import classNames from "classnames";
import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import IndexPage from "../../pages/index";
import Icon from "../Icon";
import ModalWindow from "../ModalWindow";

import styles from './index.module.css';

const Nav = () => (
  <nav>
    <a href="/#services">Услуги</a>
    <a href="/#about">О нас</a>
    <a href="/#faq">FAQ</a>
  </nav>
);

export default function App() {

  // State
  const [isHeaderBoxShadowed, setIsHeaderBoxShadowed] = useState(false);
  const [isAsideShown, setIsAsideShown] = useState<boolean>(false);

  // Hooks
  const $location = useLocation();
  const $navigate = useNavigate();

  // Generate color shades to CSS variables
  useEffect(() => {
    const shades = [
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700,
      800, 900, 1000
    ];

    const accentColorShades = [
      "#E6E6E6",
      "#CCCCCC",
      "#B3B3B3",
      "#999999",
      "#808080",
      "#666666",
      "#4D4D4D",
      "#333333",
      "#1A1A1A",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000"
    ];

    const blackColorShades = [
      "#F2F2F2",
      "#E6E6E6",
      "#D9D9D9",
      "#CCCCCC",
      "#C0C0C0",
      "#B3B3B3",
      "#A6A6A6",
      "#999999",
      "#8D8D8D",
      "#808080",
      "#737373",
      "#666666",
      "#5A5A5A",
      "#4D4D4D",
      "#404040",
      "#333333",
      "#262626",
      "#1A1A1A",
      "#0D0D0D"
    ];

    shades.forEach((shade, i) =>
      document.body.style.setProperty(
        `--accent-color-${shade}`,
        accentColorShades[i]
      )
    );

    shades.forEach((shade, i) =>
      document.body.style.setProperty(
        `--black-color-${shade}`,
        blackColorShades[i]
      )
    );
  }, []);

  // Handle header box shadow on scroll
  useEffect(() => {
    const handler: EventListener = () => {
      setIsHeaderBoxShadowed(window.scrollY > 1);
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  // Close mobile aside after location change
  useEffect(() => {
    setIsAsideShown(false);
  }, [$location]);

  // Render
  return (
    <div className={styles.app}>

      {/* Header */}
      <header className={classNames({'is-box-shadowed': isHeaderBoxShadowed})}>

        <a href="/#" className={styles['header-link']}>
          <img className={styles['logo-dark']} src="./logo.svg" alt="" />
          <img className={styles['logo-white']} src="./logo-white.svg" alt="" />
          <h1>Hoolie Projects</h1>
        </a>

        <Nav />

        <button
          className={classNames("is-auto-width", styles['action-button'])}
          onClick={() => $navigate('./?act=order')}
        >Заказать проект
        </button>

        <button
          className={classNames("is-zeroed", styles['menu-button'])}
          onClick={() => setIsAsideShown(true)}
        >
          <Icon icon="menu-right-lined" />
        </button>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<IndexPage />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer>
        <div>Hoolie Projects &copy; 2023. Managed by <a
          href="https://congritta.com"
          target="_blank"
          rel="noreferrer"
        >Alex&nbsp;Congritta</a></div>

        <div className={styles['footer-links']}>
          <a href="https://vk.com/congritta" target="_blank" rel="noreferrer">
            <Icon icon="vk-1" />
          </a>
          <a href="https://t.me/congritta" target="_blank" rel="noreferrer">
            <Icon icon="telegram-1" />
          </a>
          <a href="mailto:congritta@gmail.com" target="_blank" rel="noreferrer">
            <Icon icon="email-1" />
          </a>
        </div>
      </footer>

      {/* Aside darker */}
      <div
        className={classNames(styles['aside-darker'], {'is-shown': isAsideShown})}
        onClick={() => setIsAsideShown(false)}
      />

      {/* Aside  */}
      <div className={classNames(styles['mobile-aside'], {'is-shown': isAsideShown})}>
        <Nav />

        <button onClick={() => $navigate('./?act=order')}>
          Заказать проект
        </button>
      </div>

      {/* Order popup */}
      <ModalWindow
        title="Заказать проект"
        isShown={$location.search.includes('act=order')}
        onClose={() => $navigate('./?act=none')}
      >
        <div style={{textAlign: 'center'}}>
          Свяжитесь с нашим менеджером по следующим контактам
        </div>
        <div className="contacts">
          <a href="https://vk.com/congritta" target="_blank" rel="noreferrer">
            <Icon icon="vk-1" />
            <span>vk.com/congritta</span>
          </a>
          <a href="https://t.me/congritta" target="_blank" rel="noreferrer">
            <Icon icon="telegram-1" />
            <span>t.me/congritta</span>
          </a>
          <a href="mailto:congritta@gmail.com" target="_blank" rel="noreferrer">
            <Icon icon="email-1" />
            <span>congritta@gmail.com</span>
          </a>
        </div>
      </ModalWindow>
    </div>
  );
}
