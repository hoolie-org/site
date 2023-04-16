import classNames from "classnames";
import React, {useState} from 'react';

import {SlideDown} from 'react-slidedown';
import Icon from "../../../../components/Icon";

import styles from './index.module.css';

const questions = [
  {
    question: 'Почему цены на услуги именно такие?',
    description: `
    Мы определили такие цены на основе анализа рынка IT-услуг.
    
    Помимо того, что мы непосредственно создаём продукт, мы также выделяем время и силы на его тестирование и поддержку. В итоге вы получаете полностью готовый, сделанный под ключ продукт и вы можете быть уверены, что он будет решать чётко поставленную задачу
  `
  }, {
    question: 'Я пока не знаю что мне нужно. Сколько стоит консультация?',
    description: `
    Консультация по проекту бесплатна без оговорок. Мы можем созвониться в любое удобное время и оценить примерные сроки и бюджет проекта
  `
  }, {
    question: 'Вы делаете проекты с нуля?',
    description: `
    Да, мы делаем проекты полностью с нуля. У нас есть несколько своих готовых наработок, которые позволяют сэкономить время на рутинных вещах при старте разработки проекта.
    
    Также это означает то, что мы не принимаем заказы на работы с конструкторами и CMS (WordPress, Tilda, Битрикс и т.д.). И мы не принимаем заказы на работу с уже существующими проектами, сделанными не нами
  `
  }, {
    question: 'Опишите путь от обсуждения проекта до его запуска ',
    description: <ol>
      <li>
        Составляем ТЗ (техническое задание). В нём прописывается то,
        каким должен быть проект и все важные детали;
      </li>
      <li>
        Делим работу на этапы. Каждый этап составляет обычно 3 дня работы.
        У каждого этапа прописываются сроки и цена;
      </li>
      <li>
        Непосредственно разработка согласно прописанным этапам. Когда этап завершён,
        заказчик его проверяет и оплачивает, после чего начинается разработка следующего
        этапа
      </li>
      <li>
        Финальное тестирование и сдача готового проекта
      </li>
    </ol>
  }, {
    question: 'Предоставляется ли дальнейшая техническая поддержка проекта?',
    description: `
    Обычно мы создаём минимальные рабочие версии проектов (MVP), чтобы заказчик оценил рентабельность своей идеи.
    
    Далее заказчик, как компания, уже сам нанимает необходимых себе IT-специалистов, которые обслуживают проект на протяжении всей жизни бизнеса.
    
    При необходимости, мы, конечно, можем осуществлять техническую поддержку проекта, но это оговаривается индивидуально с каждым заказчиком
  `
  }, {
    question: 'Какой у вас стек разработки?',
    description: `React/Node/MongoDB. Для NodeJS используем HTTP-фреймворк собственной разработки`
  }
];

export default function FaqBlock() {

  // State
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  // Render
  return (
    <div id="faq" className={styles['faq-block']}>
      <h1>F.A.Q.</h1>

      <div className={styles["questions"]}>

        {questions.map((question, i) => (
          <div key={question.question} className={styles["question"]}>
            <div
              className={styles["question-header"]}
              onClick={() => setActiveQuestion(activeQuestion !== i ? i : null)}
            >
              <div className={styles["question-title"]}>{question.question}</div>
              <button className={classNames("is-zeroed", {'is-rotated': activeQuestion === i})}>
                <Icon icon="arrow-65" />
              </button>
            </div>
            <SlideDown>
              {activeQuestion === i ? (
                <div className={styles["question-description"]}>
                  {typeof question.description === 'string' ? (question.description.trim()
                  .replace(/^ +/gmu, '')) : question.description}
                </div>
              ) : null}
            </SlideDown>
          </div>
        ))}
      </div>
    </div>
  );
}
