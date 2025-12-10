import React from "react";
import "./style.css";
import support1 from "../../../../assets/img/support1.svg";
import support2 from "../../../../assets/img/support2.svg";
import support3 from "../../../../assets/img/support3.svg";
import support4 from "../../../../assets/img/support4.svg";
import support5 from "../../../../assets/img/support5.svg";
import support6 from "../../../../assets/img/support6.svg";
import support7 from "../../../../assets/img/support7.svg";
import support8 from "../../../../assets/img/support8.svg";
import laptop from "../../../../assets/img/laptop.png";
import maskGroup from "../../../../assets/img/mask-group.png";


export const Support = () => {
  return (
    <div className="support" id="support">
      <div className="rectangle-10" />

      <img
        className="mask-group"
        alt="Mask group"
        src={maskGroup}
      />

      <p className="text-wrapper-53">Экспертиза в Drupal, опыт 14 лет!</p>

      <img
        className="laptop"
        alt="Laptop"
        src={laptop}
      />

      <div className="group-14">
        <div className="rectangle-11" />

        <p className="drupal-CMS">
          Только Drupal сайты,
          <br />
          не берем на поддержку сайты на других CMS!
        </p>
      </div>

      <div className="group-15">
        <div className="rectangle-11" />

        <p className="text-wrapper-54">
          Только системный подход – контроль версий, резервирование
          <br />и тестирование!
        </p>
      </div>

      <div className="group-16">
        <div className="drupal-coder-2">
          Поддержка
          <br />
          от Drupal-coder
        </div>

        <div className="group-17">
          <div className="element-3">
            <div className="text-wrapper-55">08.</div>

            <div className="text-wrapper-56">
              Удобные каналы
              <br />
              связи
            </div>

            <p className="text-wrapper-57">
              Консультации по телефону, скайпу,
              <br />в месенджерах.
            </p>

            <img
              className="img-2"
              alt="Support"
              src={support8}
            />
          </div>

          <div className="element-4">
            <div className="text-wrapper-55">07.</div>

            <div className="text-wrapper-56">
              Штатные
              <br />
              специалисты
            </div>

            <p className="text-wrapper-57">
              Надежные штатные специалисты, никаких фрилансеров.
            </p>

            <img
              className="img-3"
              alt="Support"
              src={support7}
            />
          </div>

          <div className="element-5">
            <img
              className="img-4"
              alt="Support"
              src={support6}
            />

            <p className="text-wrapper-58">
              Работа в рамках соглашений
              <br />о конфиденциальности
              <br />и об уровне качетсва работ.
            </p>

            <div className="SLA-NDA">
              Работаем с SLA
              <br />и NDA
            </div>

            <div className="text-wrapper-59">06.</div>
          </div>

          <div className="element-6">
            <img
              className="img-5"
              alt="Support"
              src={support5}
            />

            <p className="text-wrapper-58">
              Безналичный расчет по договору или электронные деньги: WebMoney,
              Яндекс.Деньги, Paypal.
            </p>

            <div className="text-wrapper-60">Удобные способы оплаты</div>

            <div className="text-wrapper-59">05.</div>
          </div>

          <div className="element-7">
            <img
              className="img-6"
              alt="Support"
              src={support4}
            />

            <p className="text-wrapper-61">
              Ваш менеджер проекта&nbsp;&nbsp;всегда в курсе текущего состояния
              проекта
              <br />и в любой момент готов ответить на любые вопросы.
            </p>

            <div className="text-wrapper-62">Персональный менеджер проекта</div>

            <div className="text-wrapper-63">04.</div>
          </div>

          <div className="element-8">
            <img
              className="img-7"
              alt="Support"
              src={support3}
            />

            <p className="text-wrapper-64">
              Возможность организации расширенной техподдержки с 6:00
              <br />
              до 22:00 без выходных.
            </p>

            <div className="text-wrapper-65">
              Расширенная техническая
              <br />
              поддержка
            </div>

            <div className="text-wrapper-59">03.</div>
          </div>

          <div className="element-9">
            <img
              className="img-7"
              alt="Support"
              src={support2}
            />

            <p className="text-wrapper-64">
              Возможность посмотреть все заявки в работе
              <br />и отработанные часы
              <br />в личном кабинете через браузер.
            </p>

            <p className="text-wrapper-66">
              Система Helpdesk – отчетность, прозрачность
            </p>

            <div className="text-wrapper-59">02.</div>
          </div>

          <div className="element-10">
            <img
              className="img-4"
              alt="Support"
              src={support1}
            />

            <p className="text-wrapper-67">
              Удобная и привычная модель постановки задач, при которой задачи
              фиксируются и никогда
              <br />
              не теряются.
            </p>

            <div className="text-wrapper-68">Постановка задачи по Email</div>

            <div className="text-wrapper-69">01.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
