import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

const reviewsData = [
    {
        id: 1,
        name: "Нуреев Александр",
        position: "менеджер проекта Winamp Russian Community",
        text: "Команда Drupal Coder вызвала только положительные впечатления!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 2,
        name: "Петров Иван",
        position: "директор IT-компании WebSolutions",
        text: "Профессиональный подход и качественное выполнение всех задач в срок!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 3,
        name: "Сидорова Мария",
        position: "руководитель отдела маркетинга",
        text: "Отличная команда! Всегда на связи и готовы помочь с любым вопросом.",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 4,
        name: "Козлов Дмитрий",
        position: "владелец интернет-магазина",
        text: "Благодаря Drupal Coder наш сайт работает быстро и стабильно!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 5,
        name: "Новикова Елена",
        position: "менеджер проекта",
        text: "Рекомендую! Высокий уровень экспертизы и внимание к деталям.",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 6,
        name: "Морозов Сергей",
        position: "технический директор",
        text: "Лучшие специалисты по Drupal, с которыми мы работали!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 7,
        name: "Волкова Анна",
        position: "руководитель проекта",
        text: "Отзывчивая команда, всегда идут навстречу клиенту.",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 8,
        name: "Лебедев Павел",
        position: "CEO стартапа",
        text: "Помогли запустить проект в кратчайшие сроки. Спасибо!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 9,
        name: "Соколова Ольга",
        position: "маркетолог",
        text: "Профессионалы своего дела! Рады сотрудничеству.",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 10,
        name: "Федоров Алексей",
        position: "владелец бизнеса",
        text: "Качественная поддержка и быстрое решение любых проблем.",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 11,
        name: "Кузнецова Татьяна",
        position: "руководитель отдела",
        text: "Надежный партнер для долгосрочного сотрудничества!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 12,
        name: "Смирнов Виктор",
        position: "IT-директор",
        text: "Высокий уровень технической экспертизы и поддержки.",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 13,
        name: "Григорьева Наталья",
        position: "менеджер по развитию",
        text: "Отличное соотношение цены и качества услуг!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    },
    {
        id: 14,
        name: "Романов Андрей",
        position: "основатель компании",
        text: "Drupal Coder - это команда, которой можно доверять!",
        logo: "https://c.animaapp.com/mixkm5sjC7HSqN/img/image-6-5.png"
    }
];

export const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextReview = () => {
        setDirection(1);
        setCurrentReview((prev) => (prev + 1) % reviewsData.length);
    };

    const prevReview = () => {
        setDirection(-1);
        setCurrentReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="reviews" id="reviews">
            <div className="text-wrapper-11">Отзывы</div>

            <img
                className="right-quote-sign"
                alt="Right quote sign"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/right-quote-sign.svg"
            />

            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="frame-2">
                <img
                    className="vector-2"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector-2.svg"
                />

                <motion.img
                    className="arrow-right"
                    alt="Arrow right"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/arrow-right.svg"
                    onClick={nextReview}
                    whileHover={{ scale: 1.2, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: 'pointer' }}
                />

                <motion.img
                    className="arrow-left"
                    alt="Arrow left"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/arrow-left.svg"
                    onClick={prevReview}
                    whileHover={{ scale: 1.2, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: 'pointer' }}
                />

                <p className="element">
                    <span className="span">{String(currentReview + 1).padStart(2, '0')} </span>
                    <span className="text-wrapper-12">/ 14</span>
                </p>

                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentReview}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <p className="text-wrapper-13">
                            {reviewsData[currentReview].name}, {reviewsData[currentReview].position}
                        </p>

                        <img
                            className="image-7"
                            alt="Image"
                            src={reviewsData[currentReview].logo}
                        />

                        <p className="text-wrapper-14">
                            {reviewsData[currentReview].text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
