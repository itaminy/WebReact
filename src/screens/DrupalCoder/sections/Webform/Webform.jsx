import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export const Webform = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        comment: "",
        consent: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitSuccess(true);

        setTimeout(() => {
            setSubmitSuccess(false);
            setFormData({
                name: "",
                phone: "",
                email: "",
                comment: "",
                consent: false,
            });
        }, 3000);
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

                <div className="input-empty">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <span className="error-text-inline">{errors.name}</span>}
                </div>

                <div className="input-empty-2">
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Телефон"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                    />
                    {errors.phone && <span className="error-text-inline">{errors.phone}</span>}
                </div>

                <div className="input-empty-3">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <span className="error-text-inline">{errors.email}</span>}
                </div>

                <div className="input-empty-4">
          <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Ваш комментарий"
              className="form-textarea"
              rows="4"
          />
                </div>

                <div className="checkbox-wrapper">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            style={{ display: 'none' }}
                        />
                        <div className={`checked-icon ${formData.consent ? 'checked' : ''}`}>
                            {formData.consent && '✓'}
                        </div>
                        <p className="text-wrapper-7">
                            Отправляя заявку, я даю согласие на обработку своих персональных
                            данных
                        </p>
                    </label>
                    {errors.consent && <span className="error-text-inline">{errors.consent}</span>}
                </div>

                <motion.button
                    type="submit"
                    className="button-primary"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="text-wrapper-8">
                        {isSubmitting ? 'ОТПРАВКА...' : 'ОСТАВИТЬ ЗАЯВКУ!'}
                    </div>
                </motion.button>
            </form>
        </div>
    );
};
