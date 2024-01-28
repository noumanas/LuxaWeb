import type { NextPage } from "next";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleContainer}>
        <img
          className={styles.rectangleIcon}
          loading="eager"
          alt=""
          src="/rectangle-70@2x.png"
        />
        <div className={styles.retrofits}>New Construction</div>
      </div>
      {/* <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/rectangle-70@2x.png"
        />
         <div className={styles.retrofits}>New Construction</div> */}
        {/* <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.newConstruction}>New Construction</div>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameInner} alt="" src="/arrow-4.svg" />
          </div>
        </div> */}
      {/* </div> */}
      <div className={styles.rectangleContainer}>
        <img
          className={styles.rectangleIcon}
          loading="eager"
          alt=""
          src="/rectangle-631@2x.png"
        />
        <div className={styles.retrofits}>Retrofits</div>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameChild1}
          loading="eager"
          alt=""
          src="/rectangle-641@2x.png"
        />
        <div className={styles.renovations}>Renovations</div>
      </div>
      <div className={styles.rectangleParent1}>
        <img
          className={styles.frameChild2}
          loading="eager"
          alt=""
          src="/rectangle-65@2x.png"
        />
        <div className={styles.infrastructure}>Infrastructure</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
