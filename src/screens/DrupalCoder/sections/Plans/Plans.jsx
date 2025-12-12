import React from "react";
import { motion } from "framer-motion";
import "./style.css";

import D from "../../../../assets/img/D.svg"

export const Plans = ({ onOpenModal }) => {
    return (
        <div className="plans" id="plans">
            <div className="text-wrapper-32">Тарифы</div>

            <p className="text-wrapper-33">
                Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам
                индивидуальные условия!
            </p>

            <div className="component">
                <div className="rectangle-wrapper">
                    <div className="rectangle-7" />
                </div>

                <div className="group-11">
                    <div className="text-wrapper-34">2000</div>

                    <div className="text-wrapper-35">Стартовый</div>

                    <div className="text-wrapper-36">₽</div>

                    <div className="text-wrapper-37">в час</div>
                </div>

                <div className="text-wrapper-38">Предоплата от 2 часов</div>

                <div className="text-wrapper-39">Стандартное время реакции</div>

                <p className="text-wrapper-40">
                    Неиспользованные оплаченные часы переносятся на следующий месяц
                </p>

                <motion.div
                    className="button-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenModal}
                    style={{ cursor: "pointer" }}
                >
                    <div className="text-wrapper-41">ОСТАВИТЬ ЗАЯВКУ!</div>
                </motion.div>

                <img
                    className="vector-3"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector-3.svg"
                />

                <div className="checked">
                    <div className="div-2" />
                </div>

                <div className="vector-wrapper">
                    <div className="div-2" />
                </div>

                <div className="checked-2">
                    <div className="div-2" />
                </div>

                <p className="text-wrapper-42">Консультации и работы по SEO</p>

                <img
                    className="vector-4"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector.svg"
                />

                <div className="text-wrapper-43">Услуги дизайнера</div>

                <img
                    className="vector-5"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector.svg"
                />
            </div>

            <div className="component-2">
                <div className="rectangle-8" />

                <div className="group-12">
                    <div className="text-wrapper-34">1800</div>

                    <div className="text-wrapper-35">VIP</div>

                    <div className="text-wrapper-37">в час</div>
                </div>

                <motion.div
                    className="button-secondary-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenModal}
                    style={{ cursor: "pointer" }}
                >
                    <div className="text-wrapper-41">ОСТАВИТЬ ЗАЯВКУ!</div>
                </motion.div>

                <img
                    className="vector-3"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector-3.svg"
                />

                <div className="text-wrapper-38">Предоплата от 100 часов</div>

                <p className="text-wrapper-44">
                    Максимальное время
                    <br />
                    реакции – в день обращения
                </p>

                <div className="text-wrapper-45">
                    Неиспользованные часы не переносятся
                </div>

                <div className="checked">
                    <div className="div-2" />
                </div>

                <div className="vector-wrapper">
                    <div className="div-2" />
                </div>

                <div className="checked-3">
                    <div className="div-2" />
                </div>

                <p className="text-wrapper-42">Консультации и работы по SEO</p>

                <img
                    className="vector-6"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector.svg"
                />

                <div className="text-wrapper-43">Услуги дизайнера</div>

                <img
                    className="vector-7"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector.svg"
                />

                <div className="text-wrapper-46">₽</div>
            </div>

            <div className="component-3">
                <div className="rectangle-9" />

                <div className="group-13">
                    <div className="text-wrapper-34">2000</div>

                    <div className="text-wrapper-35">Бизнес</div>

                    <div className="text-wrapper-36">₽</div>

                    <div className="text-wrapper-37">в час</div>
                </div>

                <motion.div
                    className="button-primary-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenModal}
                    style={{ cursor: "pointer" }}
                >
                    <div className="text-wrapper-47">ОСТАВИТЬ ЗАЯВКУ!</div>
                </motion.div>

                <img
                    className="vector-3"
                    alt="Vector"
                    src="../assets/svg.svg"
                />

                <div className="text-wrapper-48">Предоплата от 10 часов</div>

                <p className="element-2">
                    Высокое время реакции –<br />
                    до 2 рабочих дней
                </p>

                <div className="text-wrapper-49">
                    Неиспользованные часы не переносятся
                </div>

                <div className="checked-4">
                    <div className="div-2" />
                </div>

                <div className="checked-5">
                    <div className="div-2" />
                </div>

                <div className="checked-6">
                    <div className="div-2" />
                </div>

                <p className="text-wrapper-50">Консультации и работы по SEO</p>

                <img
                    className="vector-8"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector.svg"
                />

                <div className="text-wrapper-51">Услуги дизайнера</div>

                <img
                    className="vector-9"
                    alt="Vector"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/vector.svg"
                />
            </div>

            <div className="plans-d-bg">
                <img src={D} alt="D background" />
            </div>

            <motion.div
                className="button-primary-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal}
                style={{ cursor: "pointer" }}
            >
                <div className="text-wrapper-52">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</div>
            </motion.div>
        </div>
    );
};
