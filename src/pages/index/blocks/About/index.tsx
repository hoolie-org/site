/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import Icon from "../../../../components/Icon";

import styles from './index.module.css';

export default function AboutBlock() {

  return (
    <div id="about" className={styles['about-block']}>
      <h1>Наши преимущества</h1>

      <div className={styles["features"]}>

        <div className={styles["feature"]}>
          <div className={styles['feature-icon']}>
            <Icon icon="code-4" />
          </div>

          <div className={styles['feature-title']}>Делаем качественно</div>

          <div className={styles['feature-description']}>
            Используем современные возможности CSS3 и JavaScript, чтобы создавать по-настоящему крутые и быстрые проекты
          </div>
        </div>

        <div className={styles["feature"]}>
          <div className={styles['feature-icon']}>
            <Icon icon="time-11" />
          </div>

          <div className={styles['feature-title']}>Делаем в срок</div>

          <div className={styles['feature-description']}>
            Мы ценим и уважаем время заказчика, поэтому всегда назначаем чёткие сроки и делаем работу вовремя
          </div>
        </div>

        <div className={styles["feature"]}>
          <div className={styles['feature-icon']}>
            <Icon icon="weather-2" />
          </div>

          <div className={styles['feature-title']}>Делаем красиво</div>

          <div className={styles['feature-description']}>
            Умеем создавать красивый, современный, удобный, продающий и адаптивный дизайн для наших проектов
          </div>
        </div>

        <div className={styles["feature"]}>
          <div className={styles['feature-icon']}>
            <Icon icon="bug-12" />
          </div>

          <div className={styles['feature-title']}>Делаем без багов</div>

          <div className={styles['feature-description']}>
            Проектируем проекты так, чтобы максимально снизить вероятность ошибок в работе
          </div>
        </div>

        <div className={styles["feature"]}>
          <div className={styles['feature-icon']}>
            <Icon icon="thumb-2" />
          </div>

          <div className={styles['feature-title']}>Делаем на совесть</div>

          <div className={styles['feature-description']}>
            Преподносим индивидуальный подход и нестандартные решения при проектировании и разработке проектов
          </div>
        </div>

        <div className={styles["feature"]}>
          <div className={styles['feature-icon']}>
            <Icon icon="credit-card-16" />
          </div>

          <div className={styles['feature-title']}>Делаем прибыльно</div>

          <div className={styles['feature-description']}>
            Работаем с разным бизнесом несколько лет. Внедрим систему для анализа трафика и его поведения на сайте
          </div>
        </div>
      </div>
    </div>
  );
}
