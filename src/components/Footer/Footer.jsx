import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider" />

      <div className="footer-socials">
        <a className="social-icon vk" aria-label="VK"></a>
        <a className="social-icon tg" aria-label="Telegram"></a>
        <a className="social-icon yt" aria-label="YouTube"></a>
        <a className="social-icon fb" aria-label="Facebook"></a>
      </div>
      <div className="container">
        {/* LEFT TEXT */}
        <div className="footer-text">
          <p>Проект ООО «Веб-студия», Россия.</p>
          <p>
            Drupal является зарегистрированной торговой маркой
            Dries Buytaert.
          </p>
        </div>
      </div>
    </footer>
  );
}