import React from "react";
import miniD from "../../assets/img/miniD.svg";
import competency20 from "../../assets/img/competency-20.svg";
import competency21 from "../../assets/img/competency-21.svg";
import competency22 from "../../assets/img/competency-22.svg";

export default function MidServices() {
  return (
    <section className="section--white">
      <div className="container">
        {/* TITLE */}
        <div className="services__intro">
          <h2 className="section-title services__title-left">
            <span style={{ whiteSpace: "nowrap" }}>
              Наши профессиональне разработчики
            </span>
            <br />
            <span style={{ whiteSpace: "nowrap" }}>
              выполняют быстро любые задачи
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="services-grid">
          
          {/* CARD 1 */}
          <div className="service-item service-item--accent">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>
              <img src={competency20} alt="" className="service-icon service-icon--large" />
            </div>

            <div style={{ fontSize: 22, fontWeight: 700, margin: "12px 0 6px", textAlign: "center" }}>
              от 1 часа
            </div>

            <div className="service-text" style={{ marginTop: "30px" }}>
              Настройка события GA
              <br />
              в интернет магазине
            </div>
          </div>

          {/* CARD 2 */}
          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>
              <img src={competency21} alt="" className="service-icon service-icon--large" />
            </div>

            <div style={{ fontSize: 22, fontWeight: 700, margin: "12px 0 6px", textAlign: "center" }}>
              от 1 дня
            </div>

            <div className="service-text" style={{ marginTop: "30px" }}>
              Разработка мобильной
              <br />
              версии сайта
            </div>
          </div>

          {/* CARD 3 */}
          <div className="service-item">
            <div className="service-icon-wrap">
              <div className="service-icon-bg">
                <img src={miniD} alt="" className="service-mini" />
              </div>
              <img src={competency22} alt="" className="service-icon service-icon--large" />
            </div>

            <div style={{ fontSize: 22, fontWeight: 700, margin: "12px 0 6px", textAlign: "center" }}>
              от 1 дня
            </div>

            <div className="service-text" style={{ marginTop: "30px" }}>
              Интеграция
              <br />
              модуля оплаты
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}