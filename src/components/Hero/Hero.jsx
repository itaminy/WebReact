import React from "react";
import video from "../../assets/video/video.mp4";
import druplicon from "../../assets/img/druplicon.svg";
import Hero2 from "../Hero2/Hero2.jsx";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero">
      {/* BACKGROUND */}
      <div className="hero__bg">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="hero__overlay" />
      </div>

      {/* CONTENT */}
      <div className="container hero__content">
        {/* TEXT */}
        <div className="hero__text">
          <div className="hero__eyebrow">
            Поддержка сайтов на Drupal
          </div>

          <h1 className="hero__title">
            Поддержка
            <br />
            сайтов на Drupal
          </h1>

          <p className="hero__subtitle">
            Сопровождение и поддержка сайтов
            <br />
            на CMS Drupal любых версий и запущенности
          </p>

          <div className="hero__actions">
            <button
              className="btn btn--outline hero__btn-outline"
              onClick={onOpenModal}
            >
              Тарифы
            </button>
          </div>
        </div>

        {/* STATS */}
        <Hero2 />
      </div>

      {/* DECOR ICON */}
      <img
        src={druplicon}
        alt=""
        className="hero__image"
      />
    </section>
  );
}