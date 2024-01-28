import type { NextPage } from "next";
import styles from "./TrainingAndSupportContainer.module.css";

const TrainingAndSupportContainer: NextPage = () => {
  return (
    <section className={styles.projectRegistration}>
      <div className={styles.luxaCommunityJoin}>
        <div className={styles.luxaCommunityJoinChild} />
        <div className={styles.demoRequestFrame}>
          <h1 className={styles.trainingAndSupport}>
            Training and Support: Empowering Your Team
          </h1>
        </div>
        <div className={styles.readyToElevate}>
          Ready to elevate your next construction project with Luxa's innovative
          solutions? Contact us today to discuss how we can tailor our
          technology to meet your project's specific needs, ensuring efficiency,
          sustainability, and success every step of the way.
        </div>
        <div className={styles.joinTheCommunityWrapper}>
          <div className={styles.joinTheCommunity}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.requestADemo}>Request a Demo</div>
            </button>
            <button className={styles.requestADemo1}>
              <div className={styles.requestADemoChild} />
              <div className={styles.contactAnExpert}>Contact an expert</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.readyToFindOutWrapper}>
        <div className={styles.readyToFindOut}>
          <div className={styles.emailOutreachprojectluxaorg}>
            <div className={styles.emailOutreachprojectluxaorgChild} />
            <img
              className={styles.group12160252371}
              loading="eager"
              alt=""
              src="/group-1216025237-1@2x.png"
            />
          </div>
          <div className={styles.servicesFrame}>
            <div className={styles.servicesFrameChild} />
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

export default TrainingAndSupportContainer;
