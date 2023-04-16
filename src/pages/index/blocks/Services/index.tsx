/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import {useNavigate} from "react-router-dom";

import styles from './index.module.css';

export default function ServicesBlock() {

  // Hooks
  const $navigate = useNavigate();

  // Render
  return (
    <div id="services" className={styles['services-block']}>
      <h1>Что мы умеем</h1>

      <div className={styles["services"]}>
        <div className={styles["service"]}>
          <div className={styles['service-image']}>
            <img src={require('./images/landing-ill.svg').default} alt="" />
          </div>

          <div className={styles['service-base-info']}>
            <div className={styles['service-name']}>Landing Page</div>

            <div className={styles['service-price']}>
              <div>от</div>
              <div>₽15,000</div>
            </div>
          </div>

          <ul className={styles['service-features']}>
            <li>Разработка индивидуального продающего дизайна;</li>
            <li>Оптимизация под поисковики (<b>SEO</b>);</li>
            <li>Адаптирование вёрстки сайта <b>под все современные гаджеты</b>;</li>
            <li>Интеграция сервисов <b>Яндекс Вебмастер</b> и <b>Яндекс Метрика</b>;</li>
            <li>Приём заявок с сайта <b>на E-Mail</b>, в Telegram, <b>в CRM</b>, в Excel;</li>
            <li>Подключение эквайринга от <b>Сбер</b>, <b>Тинькофф</b>, <b>ВТБ</b> и других банков</li>
          </ul>

          <button className={styles['service-button']} onClick={() => $navigate('./?act=order')}>
            Заказать
          </button>
        </div>

        <div className={styles["service"]}>
          <div className={styles['service-image']}>
            <img src={require('./images/bot-ill.svg').default} alt="" />
          </div>

          <div className={styles['service-base-info']}>
            <div className={styles['service-name']}>Telegram Бот</div>

            <div className={styles['service-price']}>
              <div>от</div>
              <div>₽25,000</div>
            </div>
          </div>

          <ul className={styles['service-features']}>
            <li>Разработка <b>с полного нуля</b> без использования конструкторов;</li>
            <li>Настройка <b>VPS</b> под работу бота;</li>
            <li>Интеграция с <b>ЮКасса</b>, <b>Paymaster</b>, <b>Qiwi</b> и другими платёжками;</li>
            <li>Подключение <b>админки</b> нашей собственной разработки;</li>
          </ul>

          <button className={styles['service-button']} onClick={() => $navigate('./?act=order')}>
            Заказать
          </button>
        </div>

        <div className={styles["service"]}>
          <div className={styles['service-image']}>
            <img src={require('./images/mvp-ill.svg').default} alt="" />
          </div>

          <div className={styles['service-base-info']}>
            <div className={styles['service-name']}>Онлайн-проект</div>

            <div className={styles['service-price']}>
              <div>от</div>
              <div>₽50,000</div>
            </div>
          </div>

          <ul className={styles['service-features']}>
            <li>Разработка <b>эксклюзивного дизайна</b>, нейминг, брендинг;</li>
            <li>Составление грамотного <b>технического задания</b> (ТЗ);</li>
            <li>Организация <b>серверной инфраструктуры</b>;</li>
            <li>Настройка CI/CD через <b>GitHub</b>, <b>GitLab</b>, <b>Docker</b>;</li>
            <li>Организация Staging Areas</li>
          </ul>

          <button className={styles['service-button']} onClick={() => $navigate('./?act=order')}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
