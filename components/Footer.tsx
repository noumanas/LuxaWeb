import type { NextPage } from "next";
import TextElements from "./TextElements";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <TextElements propMargin="0" />
      <div className={styles.lineFrames}>
        <div className={styles.luxaTechnologiesText} />
        <div className={styles.socialMediaIcons}>
          <h3 className={styles.luxaTechnologiesIncContainer}>
            <span className={styles.span}>{`@2024 `}</span>
            <span>Luxa Technologies Inc.</span>
            <span className={styles.allRightsReserved}>
              . All rights reserved.
            </span>
          </h3>
          <div className={styles.servicesList}>
            <Link href="https://www.linkedin.com/company/projectluxa" target="_blank">
            <button className={styles.emailInputGroup}>
              <div className={styles.submitButtonFrame} />
              <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
            </button>
            </Link>
            
            <div className={styles.emailInputGroup1}>
              <div className={styles.emailInputGroupChild} />
              <img
                className={styles.twitterIcon}
                loading="eager"
                alt=""
                src="/twitter1.svg"
              />
            </div>
            <button className={styles.emailInputGroup2}>
              <div className={styles.emailInputGroupItem} />
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
            </button>
            <div className={styles.emailInputGroup3}>
              <div className={styles.emailInputGroupInner} />
              <img
                className={styles.whatsappIcon}
                loading="eager"
                alt=""
                src="/whatsapp1.svg"
              />
            </div>
            <div className={styles.emailInputGroup4}>
              <div className={styles.ellipseDiv} />
              <img
                className={styles.youtubeIcon}
                loading="eager"
                alt=""
                src="/youtube3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
