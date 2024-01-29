import type { NextPage } from "next";
import styles from "./FrameComponent3.module.css";

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
      <div className={styles.gcsLogoSymbolParent}>
        <img
          className={styles.gcsLogoSymbol}
          alt=""
          src="/gcs-logo-symbol@2x.png"
        />
    
        <div className={styles.frameGroup}>
          <div className={styles.iconlylightarrowRight3Parent}>
            <img
              className={styles.iconlylightarrowRight3}
              loading="eager"
              alt=""
              src="/iconlylightarrow--right-3@2x.png"
            />
            <h2 className={styles.architecturalFirms}>Architectural Firms</h2>
            <img
              className={styles.iconlylightarrowRight2}
              loading="eager"
              alt=""
              src="/iconlylightarrow--right-2.svg"
            />
          </div>
          {/* <div className={styles.frameItem} /> */}
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.learnMoreParent}>
            <div className={styles.learnMore}>Learn More</div>
            <img
              className={styles.frameInner}
              loading="eager"
              alt=""
              src="/arrow-5.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
