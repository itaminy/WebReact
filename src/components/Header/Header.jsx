import React from "react";
import logo from "../../assets/img/drupal-coder.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(null);
  // null | "admin" | "about"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".header__dropdown")) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          {/* LOGO */}
          <div className="header__logo">
            <img src={logo} alt="Drupal Coder" />
          </div>

          {/* NAV */}
          <nav className="header__nav">
            <a className="header__link">Поддержка Drupal</a>

            <div className="header__dropdown">
              <button
                className="header__link header__dropdown-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === "admin" ? null : "admin");
                }}
              >
                Администрирование <span className="arrow">▼</span>
              </button>

              {openMenu === "admin" && (
                <div className="header__dropdown-menu">
                  <a>Миграция</a>
                  <a>Бэкапы</a>
                  <a>Аудит безопасности</a>
                  <a>Оптимизация скорости</a>
                  <a>Переезд на HTTPS</a>
                </div>
              )}
            </div>

            <a className="header__link">Продвижение</a>
            <a className="header__link">Реклама</a>

            <div className="header__dropdown">
              <button
                className="header__link header__dropdown-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === "about" ? null : "about");
                }}
              >
                О нас <span className="arrow">▼</span>
              </button>

              {openMenu === "about" && (
                <div className="header__dropdown-menu">
                  <a>Команда</a>
                  <a>Вакансии</a>
                  <a>Миссия</a>
                </div>
              )}
            </div>

            <a className="header__link">Проекты</a>
            <a className="header__link">Контакты</a>
          </nav>

          BURGER (mobile)
          <button
            className="header__burger"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}