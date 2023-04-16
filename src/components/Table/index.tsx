import classNames from "classnames";
import React, {ReactNode} from "react";

import styles from "./index.module.css";

export default function Table(props: {
  headers: (JSX.Element | string)[];
  data: ReactNode[][];

  onRowClick?(row: number): void;
}) {
  return (
    <div className={styles.table}>
      <div className={classNames(styles.row, styles["table-header"])}>
        {props.headers.map((header, i) => (
          <div
            className={styles.cell}
            key={i}
          >
            {header}
          </div>
        ))}
      </div>

      {props.data.map((row, i) => (
        <div
          className={classNames(styles.row, {_isHoverable: props.onRowClick})}
          key={i}
          onClick={() => {
            props.onRowClick && props.onRowClick?.(i);
          }}
        >
          {row.map((data, _i) => (
            <div
              className={styles.cell}
              key={_i}
            >
              {data}
            </div>
          ))}
        </div>
      ))}

      {props.data.map((row, i) => (
        <div
          className={classNames("data-rows", styles["mobile-cell"])}
          key={i}
          onClick={() => {
            props.onRowClick?.(i);
          }}
        >
          {row.map((data, _i) => (
            <div
              className="row"
              key={_i}
            >
              <div>{props.headers[_i]}</div>
              <div>{data}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
