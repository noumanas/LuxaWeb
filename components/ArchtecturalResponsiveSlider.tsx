import type { NextPage } from "next";
import styles from "./LineSectionMobile.module.css";
import React, { useState } from 'react';
const ArchtecturalResponsiveSlider: NextPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Toggle the state value when clicked
    setClicked(true)
  };
  const handleChande = () => {
    // Toggle the state value when clicked
    setClicked(false)
  };

  return (
    <section className={styles.lineSection}>
      <div className={styles.main}>
        <div className={styles.mainheading}>
        Unlocking Values Across Industries Our Software Impact
        </div>
        
        <div className={styles.withContents}>
          <div className={styles.imageswithoutluxa}>
          
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default ArchtecturalResponsiveSlider;
