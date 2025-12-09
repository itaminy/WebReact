import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import 'animate.css';

export const Header = ({ onOpenModal, onNavigate }) => {
    return (
        <header className="header" id="header">
            <video className="header-video" autoPlay loop muted playsInline>
                <source src="https://cdn.coverr.co/videos/coverr-abstract-digital-background-9719/1080p.mp4" type="video/mp4" />
            </video>
            <div className="header-overlay"></div>
            <img
                className="rectangle-13"
                alt="Rectangle"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/rectangle-1.svg"
            />

            <img
                className="image-14"
                alt="Image"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/image.png"
            />

            <img
                className="druplicon"
                alt="Druplicon"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/druplicon.svg"
            />

            <div className="text-wrapper-74">8 800 222-26-73</div>

            <div className="text-wrapper-75">RU</div>

            <img
                className="group-18"
                alt="Group"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/group-9.png"
            />

            <div className="text-wrapper-76" onClick={() => onNavigate('support')}>ПОДДЕРЖКА САЙТОВ</div>

            <div className="text-wrapper-77" onClick={() => onNavigate('cases')}>НАШИ РАБОТЫ</div>

            <div className="text-wrapper-78" onClick={() => onNavigate('reviews')}>ОТЗЫВЫ</div>

            <div className="text-wrapper-79" onClick={() => onNavigate('webform')}>КОНТАКТЫ</div>

            <div className="text-wrapper-80" onClick={() => onNavigate('plans')}>ТАРИФЫ</div>

            <img
                className="arrow-lang"
                alt="Arrow lang"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/arrow-lang.svg"
            />

            <div className="group-19">
                <p className="CMS-drupal">
                    Сопровождение и поддержка сайтов
                    <br />
                    на CMS Drupal любых версий и запущенности
                </p>

                <div className="text-wrapper-81">Поддержка сайтов на Drupal</div>

                <motion.div
                    className="group-20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenModal}
                    style={{ cursor: "pointer" }}
                >
                    <div className="rectangle-14" />
                    <div className="text-wrapper-82">ТАРИФЫ</div>
                </motion.div>
            </div>

            <div className="group-21">
                <div className="factoid">
                    <div className="text-wrapper-83">200+</div>

                    <div className="text-wrapper-84">
                        Проектов
                        <br />
                        на поддержке
                    </div>
                </div>

                <div className="factoid-2">
                    <div className="text-wrapper-85">3+</div>

                    <p className="element-11">
                        средний опыт специалистов более
                        <br />3 лет
                    </p>
                </div>

                <div className="factoid-3">
                    <div className="text-wrapper-85">35 000</div>

                    <p className="text-wrapper-86">часов поддержки сайтов на Drupal</p>
                </div>

                <div className="factoid-4">
                    <div className="text-wrapper-83">14</div>

                    <p className="text-wrapper-84">лет опыта в сфере Drupal</p>
                </div>

                <div className="factoid-5">
                    <div className="text-wrapper-83">200+</div>

                    <p className="text-wrapper-84">
                        модулей и тем
                        <br />в формате DrupalGive
                    </p>
                </div>

                <div className="rectangle-15" />

                <div className="rectangle-16" />

                <div className="rectangle-17" />

                <div className="rectangle-18" />

                <div className="rectangle-19" />

                <img
                    className="cup"
                    alt="Cup"
                    src="https://c.animaapp.com/mixkm5sjC7HSqN/img/cup.png"
                />

                <div className="text-wrapper-87">#1</div>

                <p className="drupal">
                    Drupal-разработчик
                    <br />в России по версии Рейтинга Рунета
                </p>

                <div className="rectangle-20" />
            </div>

            <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/mixkm5sjC7HSqN/img/line.svg"
            />
        </header>
    );
};
