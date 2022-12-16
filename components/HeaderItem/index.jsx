import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import VanillaTilt from 'vanilla-tilt';

const HeaderItem = () => {
  const tilt = useRef(null);
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);
  return (
    <div className={styles.wrapBox}>
      <ul className={styles.nav}>
        <li ref={tilt}>
          <a href=''>
            <span>Home</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderItem;
