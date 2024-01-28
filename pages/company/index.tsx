import type { NextPage } from "next";
import SectionServices from "../../components/SectionServices";
import SectionCard from "../../components/SectionCard";
import EnvironmentImpactAssessment from "../../components/EnvironmentImpactAssessment";
import styles from "./Company.module.css";
import Footer from "../../components/Footer";
import ContactFormContainer from "../../components/ContactFormContainer";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";

const Company: NextPage = () => {
  return (
    <div className={styles.company}>
      <SectionServices />
      {/* <section className={styles.lineElements}>
        <div className={styles.primaryFrame}>
          <div className={styles.ourMissionParent}>
            <h1 className={styles.ourMission}>Our Mission</h1>
            <div className={styles.luxasMissionIs}>
              Luxa's mission is to empower the construction industry to build a
              more sustainable future. We are committed to providing innovative,
              user-friendly software solutions that enable construction
              professionals to efficiently manage emissions, comply with
              environmental standards, and make data-driven decisions that
              enhance sustainability. By bridging the gap between technology and
              eco-conscious construction practices, we strive to facilitate the
              creation of greener, healthier, and more efficient buildings and
              infrastructures, contributing to a better world for current and
              future generations.
            </div>
          </div>
          <div className={styles.wrapperInnerFrameHolder}>
            <img
              className={styles.innerFrameHolder}
              loading="eager"
              alt=""
              src="/rectangle-32@2x.png"
            />
          </div>
        </div>
      </section> */}
      {/* <SectionCard /> */}

    </div>
  );
};

export default Company;
