import React from 'react';
import styles from './styles.module.scss';
const Caption = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {Array.from({ length: 5 }).map((i, idx) => (
          <ul key={idx}>
            {Array.from({ length: 25 }).map((i, idx) => (
              <li
                key={idx}
                style={{
                  zIndex: 25 - (idx + 1),
                }}
              ></li>
            ))}
          </ul>
        ))}
      </div>
      <div className={styles.wrapper}>
        {Array.from({ length: 5 }).map((i, idx) => (
          <ul key={idx}>
            {Array.from({ length: 25 }).map((i, idx) => (
              <li
                key={idx}
                style={{
                  zIndex: 25 - (idx + 1),
                }}
              ></li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Caption;
