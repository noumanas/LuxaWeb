import type { NextPage } from "next";
import AdvancedSustainabilityAnalytic from "../../../components/AdvancedSustainabilityAnalytic";
import RealTimeEmissionMonitoringAndA from "../../../components/RealTimeEmissionMonitoringAndA";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import styles from "./ServicesScope123Emis.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";
import Header from "../../../components/Header";

const ServicesScope123Emis: NextPage = () => {
  const dataForCard ="Emission Software"
  return (
    <div className={styles.servicesScope123Emis}>
      <Header
        projectDescription="Streamline Your Scope 1, 2, & 3 Emissions Management and Reporting with Luxa"
        constructionManagementDes="Take control of your project’s environmental impact with Luxa’s advanced emissions management software. Seamlessly track, analyze, and report Scope 1, 2, and 3 emissions, ensuring compliance and sustainability in every aspect of your construction project."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={styles.shape}>
        <div className={styles.textComponent}>
          <div className={styles.separator}>
            <h1 className={styles.optimizeYourBusinessContainer}>
              <span>{`Optimize your business intelligence with trusted `}</span>
              <b className={styles.luxa}>LUXA</b>
            </h1>
            <div className={styles.triangle} />
          </div>
          <AdvancedSustainabilityAnalytic />
        </div>
        <div className={styles.inputFrame}>
          <div className={styles.labelComponent}>
            <div className={styles.inputFrame1} />
          </div>
          <div className={styles.labelComponent1}>
            <div className={styles.buttonComponent}>
              <div className={styles.groupSection}>
                <h1 className={styles.understandingScope1}>
                  Understanding Scope 1, 2, and 3 Emissions
                </h1>
                <div className={styles.scope12}>
                  Scope 1, 2, and 3 emissions encompass all direct and indirect
                  greenhouse gas releases associated with construction
                  activities. Understanding and managing these emissions is
                  crucial for sustainable construction, as it significantly
                  reduces the environmental impact and aligns projects with
                  global climate goals.
                </div>
                <div className={styles.textFrame}>
                  <div className={styles.learnMore}>Learn More</div>
                  <img
                    className={styles.textFrameChild}
                    alt=""
                    src="/arrow-5.svg"
                  />
                </div>
              </div>
              <div className={styles.wrapperGroup12160252421}>
                <img
                  className={styles.group12160252421}
                  loading="eager"
                  alt=""
                  src="/group-1216025242-2@2x.png"
                />
              </div>
            </div>
            <div className={styles.lineSeparator}>
              <div className={styles.wrapperGroup10000024881}>
                <img
                  className={styles.group10000024881}
                  loading="eager"
                  alt=""
                  src="/group-1000002488-1@2x.png"
                />
              </div>
              <div className={styles.lEEDCertification}>
                <div className={styles.scopeFrame}>
                  <h1 className={styles.ourComprehensiveEmission}>
                    Our Comprehensive Emission Tracking System
                  </h1>
                  <div className={styles.utilizingAdvancedAlgorithms}>
                    Utilizing advanced algorithms, invoice automation, and IoT
                    integration, Luxa’s software expertly tracks and manages
                    emissions across Scope 1, 2, and 3 by aggregating real-time
                    data from construction equipment, materials, and energy use.
                  </div>
                  <div className={styles.environmentalImpactAssessmen}>
                    <div className={styles.learnMore1}>Learn More</div>
                    <img
                      className={styles.environmentalImpactAssessmenChild}
                      alt=""
                      src="/arrow-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.emailLink}>
        <RealTimeEmissionMonitoringAndA />
      </section>
      <DataAnalyticsInsightsContainer dataforcard={dataForCard} />
      <section className={styles.frameFrame}>
        <h1 className={styles.faqsAnsweringYour}>
          FAQs Answering Your Emission Management Questions
        </h1>
            <CardContainer/>
      </section>
    
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Contact Us for a Tailored Emission Management Solution"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />

      <Footer/>
    </div>
  );
};

export default ServicesScope123Emis;
