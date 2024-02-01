import type { NextPage } from "next";
import SectionServices from "../../components/SectionServices";
import SectionCard from "../../components/SectionCard";
import styles from "./Company.module.css";
import Footer from "../../components/Footer";
import ContactFormContainer from "../../components/ContactFormContainer";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";
import { useState } from "react";

const Company: NextPage = () => {
  return (
    <div className={styles.company}>
      <SectionServices />
      <section className={styles.lineElements}>
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
      </section>
      <SectionCard />
      <DataAnalyticsInsightsContainer dataforcard={" "} />

      {/* <section className={styles.frameEmailParent}>
        <div className={styles.frameEmail}>
          <div className={styles.frameEmailChild} />
          <div className={styles.frameGroupSubmit}>
            <div className={styles.gettingStartedWithLuxaParent}>
              <h1 className={styles.gettingStartedWithContainer}>
                <span>{`Getting started with `}</span>
                <b className={styles.luxa}>LUXA</b>
              </h1>
              <div className={styles.frameServices} />
            </div>
            <div className={styles.inJustA}>
              In just a few easy steps, you can start crushing your
              sustainability journey.
            </div>
          </div>
          <div className={styles.dataAnalyticsInsights}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.requestADemo}>Request a Demo</div>
            </button>
            <button className={styles.environmentalImpactAssessmen}>
              <div className={styles.environmentalImpactAssessmenChild} />
              <div className={styles.contactAnExpert}>Contact an expert</div>
            </button>
          </div>
        </div>
        <div className={styles.ourStoryWrapper}>
          <div className={styles.ourStory}>
            <div className={styles.privacyPolicies}>
              <div className={styles.privacyPoliciesChild} />
              <img
                className={styles.group12160252371}
                loading="eager"
                alt=""
                src="/group-1216025237-1@2x.png"
              />
            </div>
            <div className={styles.careers}>
              <div className={styles.careersChild} />
              <img
                className={styles.group12160252361}
                loading="eager"
                alt=""
                src="/group-1216025236-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section> */}
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="We are here to help you grow your business"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
     <Footer/>
    </div>
  );
};

export default Company;
