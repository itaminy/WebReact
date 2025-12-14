import React from "react";
import drupalImage from "../../assets/img/druplicon.svg";
import laptop from "../../assets/img/laptop.png";

export default function Expertise() {
  return (
    <div className="support-exp__bottom">
      {/* IMAGE */}
      <div className="support-exp__image-wrap">
        <img
          src={laptop}
          alt="Drupal expertise"
          className="support-exp__image"
        />
      </div>

      {/* INFO */}
      <div className="support-exp__info">
        <h3 className="support-exp__info-title">
          Экспертиза в Drupal,
          <br />
          опыт 14 лет!
        </h3>

        <div className="support-exp__info-grid">
          <div className="support-exp__info-item">
            <div className="support-exp__info-line" />
            <div className="support-exp__info-text">
              Только системный подход – контроль версий, резервирование и тестирование!
            </div>
          </div>

          <div className="support-exp__info-item">
            <div className="support-exp__info-line" />
            <div className="support-exp__info-text">
              Только Drupal сайты, не берем на поддержку сайты на других CMS!
            </div>
          </div>

          <div className="support-exp__info-item">
            <div className="support-exp__info-line" />
            <div className="support-exp__info-text">
              Участвуем в разработке ядра Drupal и модулей на Drupal.org
              разрабатвываем свои модули Drupal

            </div>
          </div>

          <div className="support-exp__info-item">
            <div className="support-exp__info-line" />
            <div className="support-exp__info-text">
              Поддерживаем сайты на Drupal 5, 6, 7 и 8
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND ICON */}
      <img
        src={drupalImage}
        alt=""
        className="support-exp__bg-icon"
      />
    </div>
  );
}