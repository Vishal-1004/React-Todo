import React from 'react';
import styles from '../styles/modules/app.module.scss';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.appFooter}>
      <p>
        Copyright &copy; {currentYear} all rights reserved | Made by&nbsp;
        <a
          href="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
          target="_blank"
          rel="noreferrer"
        >
          Vishal
        </a>
        &nbsp;for&nbsp;
        <a href="https://www.quadbtech.com/" target="_blank" rel="noreferrer">
          Quadb Tech
        </a>
      </p>
    </div>
  );
};

export default AppFooter;
