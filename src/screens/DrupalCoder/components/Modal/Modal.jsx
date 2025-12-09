import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

export const Modal = ({ isOpen, onClose }) => {
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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

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
            onClose();
        }, 2000);
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>
                            ×
                        </button>

                        {submitSuccess ? (
                            <motion.div
                                className="success-message"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15 }}
                            >
                                <div className="success-icon">✓</div>
                                <h2>Спасибо!</h2>
                                <p>Ваша заявка успешно отправлена</p>
                            </motion.div>
                        ) : (
                            <>
                                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Оставить заявку
                                </motion.h2>
                                <motion.p
                                    className="modal-description"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Заполните форму и наш менеджер свяжется с вами в ближайшее
                                    время
                                </motion.p>

                                <form onSubmit={handleSubmit}>
                                    <motion.div
                                        className="form-group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ваше имя"
                                            className={errors.name ? "error" : ""}
                                        />
                                        {errors.name && (
                                            <span className="error-text">{errors.name}</span>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className="form-group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Телефон"
                                            className={errors.phone ? "error" : ""}
                                        />
                                        {errors.phone && (
                                            <span className="error-text">{errors.phone}</span>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className="form-group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="E-mail"
                                            className={errors.email ? "error" : ""}
                                        />
                                        {errors.email && (
                                            <span className="error-text">{errors.email}</span>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className="form-group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Ваш комментарий"
                        rows="4"
                    />
                                    </motion.div>

                                    <motion.div
                                        className="form-group checkbox-group"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                name="consent"
                                                checked={formData.consent}
                                                onChange={handleChange}
                                            />
                                            <span className="checkbox-custom"></span>
                                            <span className="checkbox-text">
                        Отправляя заявку, я даю согласие на обработку своих
                        персональных данных
                      </span>
                                        </label>
                                        {errors.consent && (
                                            <span className="error-text">{errors.consent}</span>
                                        )}
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        className="submit-button"
                                        disabled={isSubmitting}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <span className="spinner"></span>
                                        ) : (
                                            "ОСТАВИТЬ ЗАЯВКУ!"
                                        )}
                                    </motion.button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
