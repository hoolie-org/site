import classNames from "classnames";
import React, {ReactNode, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import Icon from "../Icon/";

import styles from "./index.module.css";

interface Props {
  children: ReactNode;
  title?: string;
  isShown: boolean;

  onClose?(): void;
}

// Fade duration in ms
const fadeDuration = 270;

export default function ModalWindow(props: Props) {
  const [isWrapperShown, setIsWrapperShown] = useState(props.isShown);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  function close() {
    if(!props.onClose) {
      return;
    }

    setIsWrapperShown(false);
    setTimeout(() => props.onClose?.(), fadeDuration);
  }

  // Render
  return (
    <CSSTransition
      nodeRef={ref1}
      in={props.isShown}
      timeout={fadeDuration}
      classNames={{
        enter: "animate__animated",
        enterActive: "animate__fadeIn",
        exit: "animate__animated",
        exitActive: "animate__fadeOut"
      }}
      unmountOnExit={true}
      onEntered={() => setIsWrapperShown(true)}
      onExited={() => setIsWrapperShown(false)}
    >
      <div
        ref={ref1}
        className={styles["modal-window"]}
        style={
          {
            "--animate-duration": `${fadeDuration}ms`
          } as never
        }
        onClick={({target, currentTarget}) =>
          target === currentTarget && close()
        }
      >
        <CSSTransition
          nodeRef={ref2}
          in={isWrapperShown}
          timeout={fadeDuration}
          classNames={{
            enter: "animate__animated",
            enterActive: "animate__fadeInUp",
            exit: "animate__animated",
            exitActive: "animate__fadeOutDown"
          }}
          unmountOnExit={true}
        >
          <div
            ref={ref2}
            className={styles.wrapper}
          >
            {props.title ? (
              <div
                className={classNames(styles.header, {
                  [styles.isNoClosable]: !props.onClose
                })}
              >
                <div className={styles.headerTitle}>{props.title}</div>
                {props.onClose ? (
                  <button
                    className="is-zeroed"
                    onClick={() => close()}
                  >
                    <Icon icon="x-mark-circle-lined" />
                  </button>
                ) : null}
              </div>
            ) : null}
            <div className={styles.contents}>{props.children}</div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}
