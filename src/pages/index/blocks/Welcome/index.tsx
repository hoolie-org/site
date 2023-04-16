/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import {useNavigate} from "react-router-dom";

import styles from './index.module.css';

export default function WelcomeBlock() {

  // Hooks
  const $navigate = useNavigate();

  // Render
  return (
    <div className={styles['welcome-block']}>

      {/* Contents */}
      <div className={styles["contents"]}>
        <h1>Hoolie Projects</h1>
        <p>Создаём:</p>
        <ul>
          <li>Сайты для бизнеса;</li>
          <li>Онлайн-проекты (SaaS);</li>
          <li>Telegram-боты</li>
        </ul>

        <button className="is-auto-width" onClick={() => $navigate('./?act=order')}>Заказать проект</button>
      </div>

      {/* Illustration */}
      <div className={styles['ill']}>
        <img src={require('./images/ill1.svg').default} alt="" />
      </div>
    </div>
  );
}
