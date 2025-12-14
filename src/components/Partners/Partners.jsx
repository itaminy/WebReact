import React, { useEffect, useRef } from "react";

import p1 from "../../assets/img/aecom.png";
import p2 from "../../assets/img/amd.png";
import p3 from "../../assets/img/docker.png";
import p4 from "../../assets/img/ibm.png";
import p5 from "../../assets/img/intel.png";
import p6 from "../../assets/img/lpcma_rus_v4.jpg";

const partners = [p1, p2, p3, p4, p5, p6];
const topRow = [...partners, ...partners, ...partners, ...partners, ...partners];
const bottomRow = [...partners, ...partners, ...partners, ...partners, ...partners];

export default function Partners() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const speed = 1;               // скорость движения вправо
    const cardWidth = 311;         // ширина карточки + gap
    const cycleWidth = cardWidth * partners.length * 3;

    // стартуем с середины, чтобы не было пустот слева
    let offsetTop = -cycleWidth / 4;
    let offsetBottom = -cycleWidth / 2;

    let phase = "idle";          // idle → top → idle2 → bottom
    let rafId;
    let timeoutId;

    function animate() {
      if (phase === "top") {
        offsetTop += speed;

        // бесшовный цикл без пустот
        if (offsetTop >= -cycleWidth / 3) {
          offsetTop = -cycleWidth / 2;
        }

        if (topRef.current) {
          topRef.current.style.transform = `translateX(${offsetTop}px)`;
        }
      }

      if (phase === "bottom") {
        offsetBottom += speed;

        // бесшовный цикл без пустот
        if (offsetBottom >= -cycleWidth / 3) {
          offsetBottom = -cycleWidth / 2;
        }

        if (bottomRef.current) {
          bottomRef.current.style.transform = `translateX(${offsetBottom}px)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    }

    function startCycle() {
      phase = "idle";

      timeoutId = setTimeout(() => {
        phase = "top";

        timeoutId = setTimeout(() => {
          phase = "idle2";

          timeoutId = setTimeout(() => {
            phase = "bottom";

            timeoutId = setTimeout(() => {
              startCycle(); // 🔁 повтор цикла как на drupal-coder
            }, 1000);

          }, 1000);

        }, 1000);

      }, 4000);
    }

    startCycle();
    rafId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="partners">
      <h2 className="section-title">С нами работают</h2>
      <p className="section-subtitle">
        Десятки компаний доверяют нам самое ценное — свои сайты. Мы делаем всё,
        чтобы сотрудничество было долгим.
      </p>

      <div className="partners-wrapper">
        <div className="partners-grid" ref={topRef}>
          {topRow.map((img, i) => (
            <div className="partner-card" key={`top-${i}`}>
              <img src={img} alt="partner" />
            </div>
          ))}
        </div>

        <div className="partners-grid partners-grid--shifted" ref={bottomRef}>
          {bottomRow.map((img, i) => (
            <div className="partner-card" key={`bottom-${i}`}>
              <img src={img} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}