import type { NextPage } from "next";
import TextElements from "./TextElements";
import styles from "./Footer1.module.css";

const Footer1: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <TextElements propMargin="unset" />
      <div className={styles.footerFrame}>
        <div className={styles.lineFrame} />
        <div className={styles.luxaTechnologiesIncFrame}>
          <div className={styles.luxaTechnologiesIncContainer}>
            <span className={styles.span}>{`@2024 `}</span>
            <span>Luxa Technologies Inc.</span>
            <span className={styles.allRightsReserved}>
              . All rights reserved.
            </span>
          </div>
          <div className={styles.ellipseFrame}>
            <button className={styles.groupFrame}>
              <div className={styles.ellipseFrame1} />
              <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
            </button>
            <div className={styles.groupFrame1}>
              <div className={styles.groupFrameChild} />
              <img
                className={styles.twitterIcon}
                loading="eager"
                alt=""
                src="/twitter2.svg"
              />
            </div>
            <button className={styles.groupFrame2}>
              <div className={styles.groupFrameItem} />
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
            </button>
            <button className={styles.groupFrame3}>
              <div className={styles.groupFrameInner} />
              <img className={styles.whatsappIcon} alt="" src="/whatsapp.svg" />
            </button>
            <div className={styles.groupFrame4}>
              <div className={styles.ellipseDiv} />
              <img
                className={styles.youtubeIcon}
                loading="eager"
                alt=""
                src="/youtube4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
