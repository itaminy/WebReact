import React from "react";
import "./style.css";
import competency7 from "../../../../assets/img/competency-7.svg";
import competency1 from "../../../../assets/img/competency-1.svg";
import competency3 from "../../../../assets/img/competency-3.svg";
import competency5 from "../../../../assets/img/competency-5.svg";
import competency6 from "../../../../assets/img/competency-6.svg";
import competency8 from "../../../../assets/img/competency-8.svg";
import competency4 from "../../../../assets/img/competency-4.svg";
import competency2 from "../../../../assets/img/competency-2.svg";

import vector18 from "../../../../assets/img/vector-18.svg";



export const Services = () => {
    return (
        <div className="services">
            <div className="adv">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <div className="text-wrapper-70">
                    Оптимизация
                    <br />и ускорение Drupal-сайтов
                </div>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency7}
                />
            </div>

            <div className="adv-2">
                <img
                    className="img-8"
                    alt="Icon bg"
                    src={vector18}
                />

                <p className="text-wrapper-71">
                    Добавление информации на сайт, создание новых разделов
                </p>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency1}
                />
            </div>

            <div className="adv-3">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <div className="text-wrapper-70">
                    Разработка
                    <br />и оптимизация модулей сайта
                </div>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency2}
                />
            </div>

            <div className="adv-4">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <p className="text-wrapper-71">
                    Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами
                </p>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency3}
                />
            </div>

            <div className="adv-5">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <p className="text-wrapper-70">
                    Аудит и мониторинг безопасности Drupal сайтов
                </p>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency5}
                />
            </div>

            <div className="adv-6">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <p className="text-wrapper-70">
                    Миграция, импорт контента и апгрейд Drupal
                </p>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency6}
                />
            </div>

            <div className="adv-7">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <p className="text-wrapper-70">
                    Веб-маркетинг, консультации
                    <br />и работы по SEO
                </p>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency8}
                />
            </div>

            <div className="adv-8">
                <img
                    className="img-8"
                    alt="Vector"
                    src={vector18}
                />

                <div className="text-wrapper-70">
                    Любые доработки функционала
                    <br />и дизайна
                </div>

                <img
                    className="icons"
                    alt="Icons"
                    src={competency4}
                />
            </div>

            <p className="element-drupal">
                13&nbsp;&nbsp;лет совершенствуем компетенции в Drupal поддержке!
            </p>

            <p className="text-wrapper-73">
                Разрабатываем и оптимизируем модули, расширяем функциональность сайтов,
                обновляем дизайн
            </p>
        </div>
    );
};
