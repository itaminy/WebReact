import React from "react";

import competency1 from "../../assets/img/competency-1.svg";
import competency2 from "../../assets/img/competency-2.svg";
import competency3 from "../../assets/img/competency-3.svg";
import competency4 from "../../assets/img/competency-4.svg";
import competency5 from "../../assets/img/competency-5.svg";
import competency6 from "../../assets/img/competency-6.svg";
import competency7 from "../../assets/img/competency-7.svg";
import competency8 from "../../assets/img/competency-8.svg";
import miniD from "../../assets/img/miniD.svg";

export default function Services() {
  return (
    <section className="section--white">
      <div className="container">
        {/* TITLE */}
        <div className="services__intro">
          <h2 className="section-title services__title-left">
            13 лет совершенствуем компетенции
            <br />
            в Drupal-поддержке
          </h2>

          <p className="section-subtitle services__subtitle-left">
            Разрабатываем и оптимизируем модули, расширяем функциональность сайтов,
            обновляем дизайн
          </p>
        </div>

        {/* GRID */}
        <div className="services-grid">
          <div className="service-item service-item--accent">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency1} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Оптимизация
              <br />
              и ускорение Drupal-сайтов
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency2} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Добавление информации на сайт,
              <br />
              создание новых разделов
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency3} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Разработка и оптимизация
              <br />
              модулей сайта
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency4} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Интеграция с CRM, 1C,
              <br />
              платёжными системами
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency5} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Аудит и мониторинг
              <br />
              безопасности Drupal-сайтов
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency6} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Миграция, импорт контента
              <br />
              и апгрейд Drupal
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency7} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Веб-маркетинг, консультации
              <br />
              и SEO-работы
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>

              <img src={competency8} alt="" className="service-icon service-icon--large" />
            </div>
            <div className="service-text">
              Любые доработки
              <br />
              функционала и дизайна
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}