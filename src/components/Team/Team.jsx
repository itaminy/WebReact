import React from "react";

import team1 from "../../assets/img/IMG_2472_0.jpg";
import team2 from "../../assets/img/IMG_2539_0.jpg";
import team3 from "../../assets/img/IMG_2474_1.jpg";
import team4 from "../../assets/img/IMG_2522_0.jpg";
import team5 from "../../assets/img/IMG_9971_16.jpg";

export default function Team() {
  return (
    <section className="section--white">
      <div className="container">
        {/* TITLE */}
        <h2 className="section-title">Команда</h2>

        {/* GRID */}
        <div className="team-grid">
          {/* CARD 1 */}
          <div className="team-member">
            <div className="team-member-image">
              <img src={team1} alt="Сергей Синица" />
            </div>
            <div className="team-member-name">Сергей Синица</div>
            <div className="team-member-role">
              Руководитель отдела веб-разработки,
              <br />
              кандидат наук, заместитель директора
            </div>
          </div>

          {/* CARD 2 */}
          <div className="team-member">
            <div className="team-member-image">
              <img src={team2} alt="Роман Агабеков" />
            </div>
            <div className="team-member-name">Роман Агабеков</div>
            <div className="team-member-role">
              Руководитель отдела DevOps,
              <br />
              директор
            </div>
          </div>

          {/* CARD 3 */}
          <div className="team-member">
            <div className="team-member-image">
              <img src={team3} alt="Алексей Синица" />
            </div>
            <div className="team-member-name">Алексей Синица</div>
            <div className="team-member-role">
              Руководитель отдела
              <br />
              поддержки сайтов
            </div>
          </div>

          {/* CARD 4 */}
          <div className="team-member">
            <div className="team-member-image">
              <img src={team4} alt="Дарья Бокарёва" />
            </div>
            <div className="team-member-name">Дарья Бокарёва</div>
            <div className="team-member-role">
              Руководитель отдела
              <br />
              продвижения, контекстной рекламы
              <br />
              и контент-поддержки сайтов
            </div>
          </div>

          {/* CARD 5 */}
          <div className="team-member">
            <div className="team-member-image">
              <img src={team5} alt="Ирина Торчнова" />
            </div>
            <div className="team-member-name">Ирина Торчнова</div>
            <div className="team-member-role">
              Менеджер по работе
              <br />
              с клиентами
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
          <button className="button button-outline button-large">
            ВСЯ КОМАНДА
          </button>
        </div>
      </div>
    </section>
  );
}