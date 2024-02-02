import type { NextPage } from "next";
import styles from "./FrameComponent3.module.css";
import Image from 'next/image'

const FrameComponent3: NextPage = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        {/* <img className={styles.frameChild} alt="" src="/rectangle-51@2x.png" /> */}
        <h1 className={styles.bookAnEnvironmental}>
          Book an environmental review of your operations or project
        </h1>
        <h2 className={styles.howDoesYour}>
          How does your company measure up in the new world of sustainability?
        </h2>
      </div>
      <h1 className={styles.unlockingValuesAcrossContainer}>
        <span>{`Unlocking Values Across Industries `}</span>
        <span className={styles.ourSoftwareImpact}>Our Software Impact</span>
      </h1>
 
    </section>
  );
};

export default FrameComponent3;
