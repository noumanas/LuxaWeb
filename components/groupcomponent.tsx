import type { NextPage } from "next";
import styles from "./GroupComponent.module.css";

const GroupComponent: NextPage = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.fRAME}>
        <img
          className={styles.colorLogoNoBackground}
          loading="eager"
          alt=""
          src="/color-logo--no-background@2x.png"
        />
      </div>
      <div className={styles.servicesFrames}>
        <div className={styles.pricingFrame}>
          <div className={styles.services}>Services</div>
          <div className={styles.companyFrame}>
            <img className={styles.stroke3Icon} alt="" src="/stroke-2.svg" />
          </div>
        </div>
        <div className={styles.pricing}>Pricing</div>
        <div className={styles.pricingFrame1}>
          <div className={styles.resources}>Resources</div>
          <div className={styles.stroke2Wrapper}>
            <img className={styles.stroke2Icon} alt="" src="/stroke-2.svg" />
          </div>
        </div>
        <div className={styles.company}>Company</div>
        <div className={styles.pricingFrame2}>
          <b className={styles.knowledgeCenter}>knowledge center</b>
          <div className={styles.stroke2Container}>
            <img className={styles.stroke2Icon1} alt="" src="/stroke-3.svg" />
          </div>
        </div>
      </div>
      <div className={styles.loginArea}>
        <div className={styles.login}>Login</div>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.iconlyboldarrowRight}
            alt=""
            src="/iconlyboldarrow--right.svg"
          />
          <div className={styles.requestADemo}>Request a demo</div>
        </button>
      </div>
    </header>
  );
};

export default GroupComponent;
