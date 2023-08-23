import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import styles from './style.module.scss';
import Nav from './nav';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [location.pathname]);

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={styles.header}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
