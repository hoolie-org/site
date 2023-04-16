import React from "react";
import {Range as MasterRange} from "react-range";

import styles from "./index.module.css";

export default function Range(props: {
  values: number[];

  onChange(values: number[]): void;

  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div className={styles.range}>
      <MasterRange
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={props.onChange}
        values={props.values}
        renderTrack={({props, children}) => (
          <div
            {...props}
            className={styles.track}
          >
            {children}
          </div>
        )}
        renderThumb={({props}) => (
          <div
            {...props}
            className={styles.thumb}
          />
        )}
      />
    </div>
  );
}
