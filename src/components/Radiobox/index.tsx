import React, {ReactNode} from "react";
import Icon from "../Icon";

import styles from "./index.module.css";

export default function Radiobox(props: {
  isActive: boolean;
  contents?: ReactNode;

  onTriggered?(): void;
}) {
  // Render
  return (
    <div
      className={styles.radiobox}
      onClick={() => props.onTriggered?.()}
    >
      <div className={styles["radiobox-icon"]}>
        <Icon icon={props.isActive ? "checkbox-28" : "circle-2"} />
      </div>

      {props.contents ? (
        <div className={styles["radiobox-contents"]}>{props.contents}</div>
      ) : null}
    </div>
  );
}
