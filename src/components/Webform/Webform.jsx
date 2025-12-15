import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import "./style.css";

export const Webform = () => {
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

    /** ---------------------------- 
     *  ЗАГРУЗКА СОХРАНЁННЫХ ДАННЫХ
     * ----------------------------- */
    useEffect(() => {
        const saved = localStorage.getItem("formData");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setFormData((prev) => ({ ...prev, ...parsed }));
            } catch {}
        }

        // Подгрузка значений из URL (?name=...&email=...)
        const urlData = {};
        ["name", "phone", "email", "comment", "consent"].forEach((key) => {
            if (params.get(key)) {
                urlData[key] = key === "consent" ? params.get(key) === "true" : params.get(key);
            }
        });

        if (Object.keys(urlData).length > 0) {
            setFormData((prev) => ({ ...prev, ...urlData }));
        }
    }, []);

    /** ---------------------------- 
     *  СИНХРОНИЗАЦИЯ ПОЛЕЙ
     *  LocalStorage + URL
     * ----------------------------- */
    const syncState = (newData) => {
        const updated = { ...formData, ...newData };

        // LocalStorage
        localStorage.setItem("formData", JSON.stringify(updated));

        // URL
        Object.entries(updated).forEach(([key, value]) => {
            params.set(key, value);
        });

        setParams(params);
    };

    /** ---------------------------- 
     *  ИЗМЕНЕНИЕ ПОЛЕЙ
     * ----------------------------- */
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        const newValue = type === "checkbox" ? checked : value;

        const updated = {
            ...formData,
            [name]: newValue,
        };

        setFormData(updated);
        syncState({ [name]: newValue });

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    /** ---------------------------- 
     *  ВАЛИДАЦИЯ ФОРМЫ
     * ----------------------------- */
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Введите ваше имя";
        if (!formData.phone.trim()) newErrors.phone = "Введите телефон";

        if (!formData.email.trim()) {
            newErrors.email = "Введите email";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Неверный формат email";
        }

        if (!formData.consent) newErrors.consent = "Необходимо согласие";

        return newErrors;
    };

    /** ---------------------------- 
     *  ОТПРАВКА ФОРМЫ
     * ----------------------------- */
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
        <div className="webform" id="webform">
            <img
                className="d-flying"
                alt="D flying"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/d-flying.svg"
            />

            <img
                className="d"
                alt="D"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/d.svg"
            />

            {/* Контакты */}
            <div className="contacts">
                <p className="text-wrapper">Оставить заявку на поддержку сайта</p>

                <p className="div">
                    Срочно нужна поддержка сайта? Ваша команда не успевает справиться
                    самостоятельно или предыдущий подрядчик не справился с работой? Тогда
                    вам точно к нам! Просто оставьте заявку и наш менеджер с вами
                    свяжется!
                </p>

                <div className="phone">
                    <div className="phone-line" />
                    <div className="text-wrapper-2">8 800 222-26-73</div>
                </div>

                <div className="mail">
                    <div className="mail-2" />
                    <div className="text-wrapper-3">info@drupal-coder.ru</div>
                </div>
            </div>

            {/* Футер */}
            <footer className="footer">
                <img
                    className="vector"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector-3.svg"
                />

                <div className="group">
                    <p className="p">Проект ООО «Инитлаб», Краснодар, Россия.</p>
                    <p className="text-wrapper-4">
                        Drupal является зарегистрированной торговой маркой Dries Buytaert.
                    </p>
                </div>
            </footer>

            {/* Форма */}
            <form className="form" onSubmit={handleSubmit}>
                {submitSuccess && (
                    <motion.div
                        className="success-banner"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        ✓ Заявка успешно отправлена!
                    </motion.div>
                )}

                {submitError && (
                    <div className="error-banner">
                        {submitError}
                    </div>
                )}

                {/* Имя */}
                <div className="input-empty form-field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className={`form-input ${errors.name ? "error" : ""}`}
                  />
                  <label className="form-label">Ваше имя</label>
                  {errors.name && <span className="error-text-inline">{errors.name}</span>}
                </div>

                {/* Телефон */}
                <div className="input-empty-2 form-field">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className={`form-input ${errors.phone ? "error" : ""}`}
                  />
                  <label className="form-label">Телефон</label>
                  {errors.phone && <span className="error-text-inline">{errors.phone}</span>}
                </div>

                {/* Email */}
                <div className="input-empty-3 form-field">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className={`form-input ${errors.email ? "error" : ""}`}
                  />
                  <label className="form-label">E-mail</label>
                  {errors.email && <span className="error-text-inline">{errors.email}</span>}
                </div>

                {/* Комментарий */}
                <div className="input-empty-4 form-field textarea">
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder=" "
                    className="form-textarea"
                    rows="4"
                  />
                  <label className="form-label">Ваш комментарий</label>
                </div>

                {/* Чекбокс */}
                <div className="checkbox-wrapper">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            style={{ display: "none" }}
                        />
                        <div className={`checked-icon ${formData.consent ? "checked" : ""}`}>
                            {formData.consent && "✓"}
                        </div>
                        <p className="text-wrapper-7">
                            Отправляя заявку, я даю согласие на обработку своих персональных
                            данных
                        </p>
                    </label>
                    {errors.consent && (
                        <span className="error-text-inline">{errors.consent}</span>
                    )}
                </div>

                <motion.button
                    type="submit"
                    className="button-primary"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="text-wrapper-8">
                        {isSubmitting ? "ОТПРАВКА..." : "ОСТАВИТЬ ЗАЯВКУ!"}
                    </div>
                </motion.button>
            </form>
        </div>
    );
};
