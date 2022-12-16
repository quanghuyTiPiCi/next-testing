import React from 'react';
import styles from './styles.module.scss';

const navs = [
  { title: 'Trang chủ', url: '/' },
  { title: 'Về chúng tôi', url: '/about-us' },
  { title: 'Dự án tiêu biểu', url: '/projects' },
  { title: 'Tuyển dụng', url: '/recruitments' },
  { title: 'Liên Hệ', url: '/contact' },
  { title: 'Blog', url: '/blogs' },
];

const ItemGlass = () => {
  return (
    <div className={styles.wrapBox}>
      <ul className={styles.nav}>
        {navs.map((it, idx) => (
          <li key={idx}>
            <a href=''>
              <span>{it.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemGlass;
