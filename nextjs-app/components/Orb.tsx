import React, { useEffect, useState } from 'react';
import styles from '../styles/Orb.module.css';

const Orb: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className={styles.orb}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Orb;