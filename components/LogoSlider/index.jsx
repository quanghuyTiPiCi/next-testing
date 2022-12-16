import React from 'react';
import styles from './styles.module.scss';
const LogoSlider = () => {
  return (
    <div className={styles.slider} style={{ transform: 'scale(2)' }}>
      {Array.from({ length: 6 }).map((it, i) => (
        <span
          className={styles.span}
          key={i}
          style={{
            transform: `rotateY(calc(${(i + 1) * 60}deg))  translateZ(150px)`,
          }}
        >
        </span>
      ))}
    </div>
  );
};

export default LogoSlider;
