import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
import mountain from '../../assets/icons/mountain.svg';
const CardItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.official}>
        <Image src={mountain} alt='' />
        <h2>Mục tiêu</h2>
      </div>
      <div className={styles.spin}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default CardItem;
