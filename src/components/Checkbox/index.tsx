import classNames from "classnames";
import React, {ReactNode} from "react";
import Icon from "../Icon";

import styles from "./index.module.css";

export default function Checkbox(props: {
  isActive: boolean;
  contents?: ReactNode;

  onTriggered?(): void;
}) {
  // Render
  return (
    <div
      className={classNames(styles.checkbox, {
        _isActive: props.isActive
      })}
      onClick={() => props.onTriggered?.()}
    >
      <div className={styles["checkbox-icon"]}>
        <Icon icon={props.isActive ? "checkbox-9" : "shape-10"} />
      </div>

      {props.contents ? (
        <div className={styles["checkbox-contents"]}>{props.contents}</div>
      ) : null}
    </div>
  );
}
