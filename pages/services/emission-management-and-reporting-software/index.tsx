import type { NextPage } from "next";
import FrameComponent2 from "../../../components/FrameComponent2";
import AdvancedSustainabilityAnalytic from "../../../components/AdvancedSustainabilityAnalytic";
import RealTimeEmissionMonitoringAndA from "../../../components/RealTimeEmissionMonitoringAndA";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import FormContainer1 from "../../../components/FormContainer1";
import EnvironmentImpactAssessment from "../../../components/EnvironmentImpactAssessment";
import styles from "./ServicesScope123Emis.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";

const ServicesScope123Emis: NextPage = () => {
  const dataForCard ="Emission Software"
  return (
    <div className={styles.servicesScope123Emis}>
      <FrameComponent2
        stroke3="/stroke-3.svg"
        stroke2="/stroke-2.svg"
        yourSustainabilityCommand={`Streamline Your Scope 1, 2, & 3 Emissions Management and Reporting with Luxa`}
        gainUnparalleledInsightsI="Take control of your project’s environmental impact with Luxa’s advanced emissions management software. Seamlessly track, analyze, and report Scope 1, 2, and 3 emissions, ensuring compliance and sustainability in every aspect of your construction project."
        frameSectionPadding="0px 0px 99px"
        frameDivGap="155px"
        servicesColor="6px solid #d36135"
        servicesFontWeight="unset"
        frameDivGap1="13px"
        resourcesColor="#454545"
        resourcesFontWeight="unset"
        advancedAnalyticsGap="81px"
        footerGap="30px"
        yourSustainabilityCommandHeight="120px"
        gainUnparalleledInsightsHeight="54px"
        linkedInIconWidth="39px"
        linkedInIconHeight="90px"
        rectangleDivWidth="39px"
        rectangleDivHeight="90px"
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
