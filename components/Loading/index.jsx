import React from 'react';
import styles from './styles.module.scss';
const LoadingCustomize = ({ size }) => {
  return (
    <div
      className={styles.container}
      style={{
        transform: `scale(0.${size})`,
      }}
    >
      <svg>
        <filter id='gooey'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='6' />
          <feColorMatrix
            values='
    1 0 0 0 0
    0 1 0 0 0 
    0 0 1 0 0
    0 0 0 30 -10
    '
          ></feColorMatrix>
        </filter>
      </svg>
      <div className={styles.loader}>
        {Array.from({ length: 8 }).map((it, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(calc(${45 * (i + 1)}deg))`,
            }}
          ></span>
        ))}
        {Array.from({ length: 5 }).map((it, j) => (
          <span
            key={j}
            className={styles.rotate}
            style={{
              animationDelay: `calc(${-0.2 * j}s)`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LoadingCustomize;
