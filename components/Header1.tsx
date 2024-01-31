import type { NextPage } from "next";
import styles from "./Header1.module.css";
import Mheader from "./mainheader";
const Header1: NextPage = () => {
  return (
    <section className={styles.frameGroup}>
      <div className={styles.frameGroupChild} />
        <Mheader activeLink={""}/>
      <div className={styles.emailField}>
        <div className={styles.messageField}>
          <h1 className={styles.optimizedSolutionsFor}>
            Optimized Solutions for New Construction Projects
          </h1>
          <div className={styles.luxaIntroducesA}>
            Luxa introduces a groundbreaking approach to new construction,
            seamlessly blending advanced technology with the unique demands of
            modern residential and commercial building projects. Our platform is
            designed to address the diverse challenges of new construction,
            offering tailored solutions that enhance efficiency, ensure
            sustainability, and streamline project management from concept to
            completion.
          </div>
        </div>
        <div className={styles.footerFrame}>
          <div className={styles.footerFrameChild} />
          <div className={styles.scroll}>Scroll</div>
          <img className={styles.footerFrameItem} alt="" src="/arrow-7.svg" />
        </div>
      </div>
    </section>
  );
};

export default Header1;
