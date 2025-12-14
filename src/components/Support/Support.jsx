import React from "react";

import icon1 from "../../assets/img/support1.svg";
import icon2 from "../../assets/img/support2.svg";
import icon3 from "../../assets/img/support3.svg";
import icon4 from "../../assets/img/support4.svg";
import icon5 from "../../assets/img/support5.svg";
import icon6 from "../../assets/img/support6.svg";
import icon7 from "../../assets/img/support7.svg";
import icon8 from "../../assets/img/support8.svg";

import iconBg from "../../assets/img/miniD.svg";

import Expertise from "../Expertise/Expertise";

export default function Support() {
  return (
    <section className="support-exp">
      <div className="container support-exp__top">
        <h2 className="support-exp__title">
          Поддержка сайтов на Drupal
        </h2>

        <div className="support-exp__grid">
          {/* CARD 1 */}
          <div className="support-exp__card">
            <div className="support-exp__num">01.</div>
            <div className="support-exp__card-title">
              Постановка задачи по Email
            </div>
            <div className="support-exp__card-text">
              Удобная и привычная модель постановки задач, 
              при которой задачи фиксируются и никогда не теряются.
            </div>

            <img
              src={icon1}
              alt=""
              className="support-exp__card-bg"
            />
          </div>

          {/* CARD 2 */}
          <div className="support-exp__card">
            <div className="support-exp__num">02.</div>
            <div className="support-exp__card-title">
              Система Helpdesk – отчетность, прозрачность
            </div>
            <div className="support-exp__card-text">
              Возможность посмотреть все заявки в работе
                и отработанные часы
                в личном кабинете через браузер.
            </div>

            <img
              src={icon2}
              alt=""
              className="support-exp__card-bg"
            />
          </div>

          {/* CARD 3 */}
          <div className="support-exp__card">
            <div className="support-exp__num">03.</div>
            <div className="support-exp__card-title">
              Расширенная техническая
                поддержка
            </div>
            <div className="support-exp__card-text">
              Возможность организации расширенной техподдержки с 6:00
                до 22:00 без выходных.
            </div>

            <img
              src={icon3}
              alt=""
              className="support-exp__card-bg"
            />
          </div>

          {/* CARD 4 */}
          <div className="support-exp__card">
            <div className="support-exp__num">04.</div>
            <div className="support-exp__card-title">
              Персональный менеджер проекта
            </div>
            <div className="support-exp__card-text">
              Ваш менеджер проекта  всегда в курсе текущего состояния проекта
                и в любой момент готов ответить на любые вопросы.
            </div>

            <img
              src={icon4}
              alt=""
              className="support-exp__card-bg"
            />
          </div>

          {/* CARD 5 */}
          <div className="support-exp__card">
            <div className="support-exp__num">05.</div>
            <div className="support-exp__card-title">
              Удобные способы оплаты
            </div>
            <div className="support-exp__card-text">
              Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
            </div>

            <img
              src={icon5}
              alt=""
              className="support-exp__card-bg"
            />
          </div>

          {/* CARD 6 */}
          <div className="support-exp__card">
            <div className="support-exp__num">06.</div>
            <div className="support-exp__card-title">
              Работаем с SLA и NDA
            </div>
            <div className="support-exp__card-text">
              Работа в рамках соглашений
                о конфиденциальности
                и об уровне качетсва работ.
            </div>

            <img
              src={icon6}
              alt=""
              className="support-exp__card-bg"
            />
          </div>


          {/* CARD 7 */}
          <div className="support-exp__card">
            <div className="support-exp__num">07.</div>
            <div className="support-exp__card-title">
              Штатные
                специалисты
            </div>
            <div className="support-exp__card-text">
              Надежные штатные специалисты, никаких фрилансеров.
            </div>

            <img
              src={icon7}
              alt=""
              className="support-exp__card-bg"
            />
          </div>

          {/* CARD 8 */}
          <div className="support-exp__card">
            <div className="support-exp__num">08.</div>
            <div className="support-exp__card-title">
              Удобные каналы связи
            </div>
            <div className="support-exp__card-text">
              Консультации по телефону, скайпу, в месенджерах.
            </div>

            <img
              src={icon8}
              alt=""
              className="support-exp__card-bg"
            />
          </div>
        </div>

    {/* EXPERTISE */}
      <Expertise />
      </div>
    </section>
  );
}