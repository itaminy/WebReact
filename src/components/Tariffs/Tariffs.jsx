import React from 'react';
import miniD from "../../assets/img/D.svg"

const Tariffs = ({ onOpenModal }) => {
  return (
    <section className="tariffs" id="tariffs">
      <div className="container">
        {/* Заголовок */}
        <h2 className="tariffs__title">Тарифы</h2>

        <img
        src={miniD}
        alt=""
        className="tariffs__bg-icon"
        />

        {/* Сетка карточек */}
        <div className="tariffs__cards">
          
          {/* Стартовый */}
          <div className="tariff-card">
            <div className="tariff-card__header">
              <div className="tariff-card__name">Стартовый</div>
            </div>

            <ul className="tariff-card__list" style={{ gap: '16px' }}>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Консультации и работы по SEO
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Услуги дизайнера
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Неиспользованные оплаченные часы переносятся на следующий месяц
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Предоплата от 6 000 рублей в месяц
              </li>
            </ul>

            <button 
              className="btn tariff-card__btn btn--outline"
              onClick={onOpenModal}
            >
              СВЯЗАТЬСЯ С НАМИ!
            </button>
          </div>

          {/* Бизнес (центральный) */}
          <div className="tariff-card tariff-card--primary">
            <div className="tariff-card__header">
              <div className="tariff-card__name">Бизнес</div>
            </div>

            <ul className="tariff-card__list" style={{ gap: '16px' }}>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Консультации и работы по SEO
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Услуги дизайнера
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Высокое время реакции - до 2 рабочих дней
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Неиспользованные оплаченные часы не переносятся
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Предоплата от 30 000 рублей в месяц
              </li>
            </ul>

            <button 
              className="btn tariff-card__btn tariff-card__btn--filled"
              onClick={onOpenModal}
            >
              СВЯЗАТЬСЯ С НАМИ!
            </button>
          </div>

          {/* VIP */}
          <div className="tariff-card">
            <div className="tariff-card__header">
              <div className="tariff-card__name">VIP</div>
            </div>

            <ul className="tariff-card__list" style={{ gap: '16px' }}>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Консультации и работы по SEO
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Услуги дизайнера
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Максимальное время реакции - в день обращения
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Неиспользованные оплаченные часы не переносятся
              </li>
              <li className="tariff-card__item">
                <svg className="tariff-card__bullet" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L12 1" stroke="#ff6a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Предоплата от 270 000 рублей в месяц
              </li>
            </ul>

            <button 
              className="btn tariff-card__btn btn--outline"
              onClick={onOpenModal}
            >
              СВЯЗАТЬСЯ С НАМИ!
            </button>
          </div>
        </div>

        {/* Footer под тарифами */}
        <div className="tariffs__footer">
          <p className="tariffs__footer-text">
            Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
          </p>
          <button 
            className="tariffs__footer-link"
            onClick={onOpenModal}
          >
            Получить индивидуальный тариф
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;