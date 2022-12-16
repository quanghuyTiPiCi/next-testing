import React from 'react';
import styles from './styles.module.scss';
import profile from '../../assets/profile.jpg';
import blur from '../../assets/blur.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';
import iconProfile from '../../assets/icons/iconProfile.svg';
import Image from 'next/image';
const items = ['HTML', 'CSS3', 'Javascript', 'ReactJs', 'Angular'];
const colors = [
  '#B2E9AA',
  '#E9AAAA',
  '#E9DBAA',
  '#AAE9E5',
  '#B2AAE9',
  '#E7AAE9',
  '#E74C3C ',
  '#F8C471 ',
  '#E5E7E9',
  '#808B96 ',
  '#808B96 ',
];
const CardProfile = () => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageBg}
        style={{
          backgroundImage: `url(${profile.src})`,
        }}
      ></div>
      <div
        className={styles.wrap}
        style={{
          backgroundImage: `url(${blur.src})`,
        }}
      >
        <div className={styles.toggle}>
          <Image src={arrowUp} alt='' />
        </div>
        <div className={styles.content}>
          <h3>Lemon Tree</h3>
          <p>Architect</p>
          <div className={styles.iconProfile}>
            <Image src={iconProfile} alt='' />
          </div>
          <div className={styles.skill}>
            {items.map((it, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: colors[idx],
                  marginRight: `${it.length / 2}1px`,
                }}
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
