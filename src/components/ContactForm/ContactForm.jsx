import React from "react";
import Footer from "../Footer/Footer";

import miniD from "../../assets/img/miniD.svg"

export default function ContactSection() {
  return (
    <section className="contact-section">
      <img
        src={miniD}
        alt="Decor D"
        className="contact-decor-d"
      />
      <div className="contact-container container">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-info">
            <h2 className="contact-title">
              Оставить заявку<br />на разработку или <br /> доработку сайта
            </h2>

            <p className="contact-description">
              Если вашему сайту требуется срочная техническая поддержка
              или текущие задачи не удаётся закрыть собственными силами —
              оставьте заявку, и мы свяжемся с вами.
            </p>

            <div className="contact-details">
              <div className="contact-phone">
                <a href="tel:88002222673">8 800 222-26-73</a>
              </div>

              <div className="contact-email">
                <a href="mailto:info@your-project.ru">
                  info@your-project.ru
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <form className="contact-form">

            <div className="form-field">
              <input className="form-input" placeholder=" " />
              <label className="form-label">Ваше имя</label>
            </div>

            <div className="form-field">
              <input className="form-input" placeholder=" " />
              <label className="form-label">Телефон</label>
            </div>

            <div className="form-field">
              <input className="form-input" placeholder=" " />
              <label className="form-label">E-mail</label>
            </div>

            <div className="form-field">
              <textarea className="form-textarea" placeholder=" " />
              <label className="form-label">Комментарий</label>
            </div>

            <label className="dc-checkbox">
              <input type="checkbox" />
              <span className="dc-checkbox-box"></span>
              <span className="dc-checkbox-text">
                Отправляя заявку, я даю согласие на обработку своих персональных <br /> данных *
              </span>
            </label>

            {/* reCAPTCHA mock */}
            {/* <div style={{ marginTop: 16 }}>
              <img
                src="/img/recaptcha.png"
                alt="reCAPTCHA"
                style={{ maxWidth: 280 }}
              />
            </div> */}

            <button type="submit" className="form-submit">
              СВЯЖИТЕСЬ С НАМИ
            </button>
          </form>

        </div>
      </div>
      <div className="contact-footer-wrapper">
        <Footer />
      </div>
    </section>
  );
}