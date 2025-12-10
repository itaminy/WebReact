import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import image612 from "../../../../assets/img/image-6-1-2.png";
import image711 from "../../../../assets/img/image-7-1-1.png";
import image811 from "../../../../assets/img/image-8-1-1.png";
import image911 from "../../../../assets/img/image-9-1-1.png";
import image1012 from "../../../../assets/img/image-10-1-2.png";
import image1111 from "../../../../assets/img/image-11-1-1.png";

const additionalCases = [
    {
        id: 1,
        title: "Интеграция с CRM системой",
        date: "15.03.2019",
        description: "Полная интеграция сайта с корпоративной CRM системой для автоматизации бизнес-процессов.",
        images: [image612]
    },
    {
        id: 2,
        title: "Редизайн корпоративного портала",
        date: "10.02.2019",
        description: "Современный дизайн и улучшенная навигация для корпоративного портала компании.",
        images: [image711]
    },
    {
        id: 3,
        title: "Оптимизация производительности",
        date: "05.01.2019",
        description: "Ускорение загрузки сайта в 3 раза через оптимизацию кода и настройку кэширования.",
        images: [image811]
    }
];

export const Cases = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="cases" id="cases">
            <div className="case-card">
                <p className="text-wrapper-24">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>

                <div className="text-wrapper-25">22.04.2019</div>

                <p className="text-wrapper-26">
                    Эти слова совершенно справедливы, однако гипнотический рифф продолжает
                    паузный пласт.
                </p>

                <div className="rectangle-4" />

                <img
                    className="image-11"
                    alt="Image"
                    src={image612}
                />

                <img
                    className="image-11"
                    alt="Image"
                    src={image711}
                />

                <img
                    className="image-11"
                    alt="Image"
                    src={image811}
                />

                <img
                    className="image-11"
                    alt="Image"
                    src={image911}
                />
            </div>

            <div className="case-card-2">
                <p className="text-wrapper-24">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>

                <div className="text-wrapper-25">22.04.2019</div>

                <p className="text-wrapper-26">
                    Эти слова совершенно справедливы, однако гипнотический рифф продолжает
                    паузный пласт.
                </p>

                <div className="rectangle-4" />

                <img
                    className="image-11"
                    alt="Image"
                    src={image612}
                />
            </div>

            <div className="case-card-vert-image">
                <img
                    className="image-12"
                    alt="Image"
                    src={image711}
                />

                <img
                    className="image-12"
                    alt="Image"
                    src={image811}
                />

                <div className="rectangle-5" />

                <p className="text-wrapper-27">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>

                <div className="text-wrapper-28">22.04.2019</div>
            </div>

            <div className="case-card-vert-image-2">
                <img
                    className="image-12"
                    alt="Image"
                    src={image711}
                />

                <div className="rectangle-5" />

                <p className="text-wrapper-27">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>

                <div className="text-wrapper-28">22.04.2019</div>
            </div>

            <div className="case-card-vert-image-3">
                <div className="rectangle-5" />

                <p className="text-wrapper-27">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>

                <div className="text-wrapper-28">22.04.2019</div>
            </div>

            <div className="case-big">
                <img
                    className="image-13"
                    alt="Image"
                    src={image711}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image811}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image911}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image1012}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image1111}
                />

                <div className="rectangle-6" />

                <p className="text-wrapper-29">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>
            </div>

            <div className="case-big-2">
                <img
                    className="image-13"
                    alt="Image"
                    src={image711}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image811}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image911}
                />

                <img
                    className="image-13"
                    alt="Image"
                    src={image1012}
                />

                <div className="rectangle-6" />

                <p className="text-wrapper-29">
                    Настройка выгрузки YML для Яндекс.Маркета
                </p>
            </div>

            <div className="text-wrapper-30">Последние кейсы</div>

            {showMore && (
                <>
                    {additionalCases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.id}
                            className="case-card"
                            style={{
                                left: index === 0 ? '0' : index === 1 ? '400px' : '800px',
                                top: '1596px'
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <p className="text-wrapper-24">{caseItem.title}</p>
                            <div className="text-wrapper-25">{caseItem.date}</div>
                            <p className="text-wrapper-26">{caseItem.description}</p>
                            <div className="rectangle-4" />
                            <img className="image-11" alt="Case" src={caseItem.images[0]} />
                        </motion.div>
                    ))}
                </>
            )}

            <motion.div
                className="button-primary-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMore(!showMore)}
                style={{ cursor: 'pointer' }}
            >
                <div className="text-wrapper-31">{showMore ? 'СКРЫТЬ' : 'ПОКАЗАТЬ ЕЩЁ'}</div>
            </motion.div>
        </div>
    );
};
