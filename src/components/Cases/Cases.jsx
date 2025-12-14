import React from "react";

import case1 from "../../assets/img/image-6-1-2.png";
import case2 from "../../assets/img/image-7-1-1.png";
import case3 from "../../assets/img/image-8-1-1.png";
import case4 from "../../assets/img/image-9-1-1.png";
import case5 from "../../assets/img/image-10-1-2.png";

export default function Cases() {
  return (
    <section className="cases">
      <div className="container">
        <h2 className="cases__title">Последние кейсы</h2>

        <div className="cases__grid">
          {/* 1 — обычная карточка */}
          <div className="case-card">
            <img src={case1} alt="" className="case-card__image" />
            <div className="case-card__content">
              <div className="case-card__title">
                Настройка кэширования данных. Апгрейд сервера.  
                Ускорение работы сайта в 30 раз!
              </div>
              <div className="case-card__date">04.05.2020</div>
            </div>
          </div>

          {/* 2 — широкая карточка */}
          <div className="case-card case-card--wide">
            <img src={case2} alt="" className="case-card__image" />
            <div className="case-card__content">
              <div className="case-card__title">
                Использование отчетов Ecommerce в Яндекс.Метрике
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="case-card">
            <img src={case3} alt="" className="case-card__image" />
            <div className="case-card__content">
              <div className="case-card__title">
                Повышение конверсии страницы с формой заявки  
                с применением A/B-тестирования
              </div>
              <div className="case-card__date">24.01.2020</div>
            </div>
          </div>

          {/* 4 */}
          <div className="case-card">
            <img src={case4} alt="" className="case-card__image" />
            <div className="case-card__content">
              <div className="case-card__title">
                Drupal 7: ускорение времени генерации страницы  
                интернет-магазина на 32%
              </div>
              <div className="case-card__date">23.09.2019</div>
            </div>
          </div>

          {/* 5 */}
          <div className="case-card">
            <img src={case5} alt="" className="case-card__image" />
            <div className="case-card__content">
              <div className="case-card__title">
                Обмен товарами и заказами интернет-магазинов  
                на Drupal 7 с 1С: Предприятие, МойСклад, Класс365
              </div>
              <div className="case-card__date">22.08.2019</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}