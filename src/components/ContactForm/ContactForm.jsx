import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";

import DFly from "../../assets/img/D-flying.svg"

export default function ContactForm({ onOpenForm }) {
  const [params, setParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("contactFormData");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch {}
    }

    const urlData = {};
    ["name", "phone", "email", "comment", "consent"].forEach((key) => {
      if (params.get(key)) {
        urlData[key] =
          key === "consent" ? params.get(key) === "true" : params.get(key);
      }
    });

    if (Object.keys(urlData).length) {
      setFormData((prev) => ({ ...prev, ...urlData }));
    }
  }, []);

  const syncState = (newData) => {
    const updated = { ...formData, ...newData };
    localStorage.setItem("contactFormData", JSON.stringify(updated));

    Object.entries(updated).forEach(([key, value]) => {
      params.set(key, value);
    });
    setParams(params);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    const updated = { ...formData, [name]: newValue };
    setFormData(updated);
    syncState({ [name]: newValue });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.phone.trim()) newErrors.phone = "Введите телефон";
    if (!formData.email.trim()) newErrors.email = "Введите email";
    if (!formData.consent) newErrors.consent = "Необходимо согласие";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const newErrors = validateForm();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await fetch(
        "https://formcarry.com/s/jn7DKGLiZ0d",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Ошибка отправки");
      }

      setSubmitSuccess(true);

      setTimeout(() => {
        const cleared = {
          name: "",
          phone: "",
          email: "",
          comment: "",
          consent: false,
        };
        setFormData(cleared);
        syncState(cleared);
        setSubmitSuccess(false);
      }, 3000);

    } catch (err) {
      setSubmitError("Ошибка отправки формы. Пожалуйста, попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <img
        src={DFly}
        alt="Flying D"
        className="contact-d-flying"
      />

      <img
        src={DFly}
        alt="Flying D bottom"
        className="contact-d-flying contact-d-flying--bottom"
      />

      <div className="contact-container container">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-info">
            <h2 className="contact-title">
              Оставить заявку<br />на разработку или <br /> доработку сайта
            </h2>

            <p className="contact-description">
              Если вашему сайту требуется срочная техническая поддержка
              или текущие задачи не удаётся закрыть собственными силами —
              оставьте заявку, и мы свяжемся с вами.
            </p>

            <div className="contact-details">
              <div className="contact-phone">
                <a href="tel:88002222673">8 800 222-26-73</a>
              </div>

              <div className="contact-email">
                <a href="mailto:info@your-project.ru">
                  info@your-project.ru
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-field">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Ваше имя</label>
            </div>

            <div className="form-field">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">Телефон</label>
            </div>

            <div className="form-field">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder=" "
              />
              <label className="form-label">E-mail</label>
            </div>

            <div className="form-field">
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="form-textarea"
                placeholder=" "
              />
              <label className="form-label">Комментарий</label>
            </div>

            <label className="dc-checkbox">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span className="dc-checkbox-box"></span>
              <span className="dc-checkbox-text">
                Отправляя заявку, я даю согласие на обработку своих персональных <br /> данных *
              </span>
            </label>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  className="success-banner"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  ✓ Заявка успешно отправлена!
                </motion.div>
              )}
            </AnimatePresence>
            {submitError && <div className="error-banner">{submitError}</div>}

            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? "ОТПРАВКА..." : "СВЯЖИТЕСЬ С НАМИ"}
            </button>
          </form>

        </div>
      </div>
      <div className="contact-footer-wrapper">
        <Footer />
      </div>
    </section>
  );
}