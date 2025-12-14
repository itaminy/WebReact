import React, { useState } from "react";
import "./MobileMenu.css";

export default function MobileMenu() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <aside className="mobile-menu">
      <div className="mobile-menu__header">
        <h1>Поддержка<br />сайтов на Drupal</h1>
        <p>
          Сопровождение и поддержка сайтов<br />
          на CMS Drupal любых версий и запущенности
        </p>
      </div>

      <nav className="mobile-menu__nav">
        <button className="mobile-menu__item active">ПОДДЕРЖКА DRUPAL</button>

        <button className="mobile-menu__item" onClick={() => toggle("admin")}>
          АДМИНИСТРИРОВАНИЕ
          <span className={open === "admin" ? "arrow open" : "arrow"} />
        </button>

        <div className={`mobile-sub ${open === "admin" ? "show" : ""}`}>
          <span>Миграция</span>
          <span>Бэкапы</span>
          <span>Аудит безопасности</span>
          <span>Оптимизация скорости</span>
          <span>Переезд на HTTPS</span>
        </div>

        <button className="mobile-menu__item">ПРОДВИЖЕНИЕ</button>
        <button className="mobile-menu__item">РЕКЛАМА</button>

        <button className="mobile-menu__item" onClick={() => toggle("about")}>
          О НАС
          <span className={open === "about" ? "arrow open" : "arrow"} />
        </button>

        <div className={`mobile-sub ${open === "about" ? "show" : ""}`}>
          <span>Команда</span>
          <span>DrupalGive</span>
        </div>

        <button className="mobile-menu__item">БЛОГ</button>
        <button className="mobile-menu__item">КУРСЫ DRUPAL</button>
        <button className="mobile-menu__item">ПРОЕКТЫ</button>
        <button className="mobile-menu__item">КОНТАКТЫ</button>
      </nav>

      <div className="mobile-menu__footer">
        <span className="logo">
          <span className="d1">D</span>
          <span className="d2">D</span> rupal-coder
        </span>
      </div>
    </aside>
  );
}