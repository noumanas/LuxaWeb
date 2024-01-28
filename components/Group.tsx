import type { NextPage } from "next";
import styles from "./Group.module.css";

const Group: NextPage = () => {
  return (
    <section className={styles.group}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.gettingStartedWithLuxaParent}>
            <h1 className={styles.gettingStartedWithContainer}>
              <span>{`Getting started with `}</span>
              <b className={styles.luxa}>LUXA</b>
            </h1>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.inJustA}>
            In just a few easy steps, you can start crushing your sustainability
            targets.
          </div>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.requestADemo}>Request a Demo</div>
          </button>
          <button className={styles.group1}>
            <div className={styles.groupChild} />
            <div className={styles.contactAnExpert}>Contact an expert</div>
          </button>
        </div>
      </div>
      <div className={styles.groupInner}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.group12160252371}
              loading="eager"
              alt=""
              src="/group-1216025237-1@2x.png"
            />
          </div>
          <div className={styles.collaborationFrame}>
            <div className={styles.collaborationFrameChild} />
            <img
              className={styles.group12160252361}
              loading="eager"
              alt=""
              src="/group-1216025236-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group;
