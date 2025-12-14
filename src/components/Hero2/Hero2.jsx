import React from "react";
import cup from "../../assets/img/cup.png";

export default function Hero2() {
  return (
    <div className="hero-stats">
        <div className="hero-stats__item hero-stats__item--rating">
          <div className="hero-stats__rating-top">
            <div className="hero-stats__num hero-stats__num--white">#1</div>
            <img
              src={cup}
              alt="Рейтинг Рунета"
              className="hero-stats__cup"
            />
          </div>

          <div className="hero-stats__text">
            Drupal-разработчик
            <br />
            в России по версии
            <br />
            Рейтинга Рунета
          </div>
        </div>

        <div className="hero-stats__item">
            <div className="hero-stats__num hero-stats__num--white">3+</div>
            <div className="hero-stats__text">
            Средний опыт
            <br />
            специалистов более
            <br />
            3 лет
            </div>
        </div>

        <div className="hero-stats__item">
        <div className="hero-stats__num hero-stats__num--white">14</div>
        <div className="hero-stats__text">
          Лет опыта в сфере
          <br />
          Drupal
        </div>
      </div>


        <div className="hero-stats__item">
            <div className="hero-stats__num hero-stats__num--white">50+</div>
            <div className="hero-stats__text">
            Модулей и тем
            <br />
            в формате DrupalGive
            </div>
        </div>

        <div className="hero-stats__item">
            <div className="hero-stats__num hero-stats__num--white">90 000+</div>
            <div className="hero-stats__text">
            Часов поддержки
            <br />
            Drupal-проектов
            </div>
        </div>


      <div className="hero-stats__item">
        <div className="hero-stats__num hero-stats__num--white">300+</div>
        <div className="hero-stats__text">
          Проектов
          <br />
          на поддержке
        </div>
      </div>
    </div>
  );
}