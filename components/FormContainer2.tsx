import type { NextPage } from "next";
import styles from "./FormContainer2.module.css";

const FormContainer2: NextPage = () => {
  return (
    <section className={styles.reporting}>
      <div className={styles.frameDataAnalyticsInsights}>
        {/* <img
          className={styles.frameDataAnalyticsInsightsChild}
          alt=""
          src=""
        /> */}
        <h1 className={styles.joinTheLuxa}>Join the Luxa Community</h1>
        <div className={styles.contactUsOurStoryPrivacyP}>
          <h2 className={styles.connectWithConstruction}>
            {" "}
            Connect with construction professional, share insights, and explore
            the best practices in construction management that are shaping a
            greener future.
          </h2>
        </div>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.joinCommunity}>Join Community</div>
        </button>
      </div>
    </section>
  );
};

export default FormContainer2;
