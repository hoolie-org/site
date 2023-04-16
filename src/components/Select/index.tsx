import classNames from "classnames";
import React from "react";
import Icon from "../Icon";
import MenuFrom, {Option} from "../MenuFrom";

import styles from "./index.module.css";

export default function Select(props: {
  options: Option[];
  value: string;
  isAutoWidth?: boolean;

  onTriggered?(value: string): void;
}) {
  function getSelectedOption(): Option {
    return props.options.find(
      (_option) => _option.value === props.value
    ) as Option;
  }

  // Render
  return (
    <div
      className={classNames(styles.select, {
        [styles.isAutoWidth]: props.isAutoWidth
      })}
    >
      <MenuFrom
        options={props.options}
        onTriggered={props.onTriggered}
      >
        <div className={styles["selected-option"]}>
          {getSelectedOption().element}
          <Icon icon="arrow-65" />
        </div>
      </MenuFrom>
    </div>
  );
}
