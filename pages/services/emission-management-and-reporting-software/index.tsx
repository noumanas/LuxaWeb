import type { NextPage } from "next";
import AdvancedSustainabilityAnalytic from "../../../components/AdvancedSustainabilityAnalytic";
import RealTimeEmissionMonitoringAndA from "../../../components/RealTimeEmissionMonitoringAndA";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import styles from "./ServicesScope123Emis.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";

const ServicesScope123Emis: NextPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after the component mounts
    setLoaded(true);
  }, []);
  const accordionData = [
    {
      header: "What are Scope 1, 2, and 3 emissions, and why are they important for my construction project?",
      description: "Scope 1 emissions are direct emissions from owned or controlled sources, Scope 2 covers indirect emissions from the generation of purchased electricity, and Scope 3 includes all other indirect emissions in a company's value chain. Understanding and managing these emissions is crucial for reducing your environmental impact and complying with regulatory standards."
    },
    {
      header: "How does Luxa track real-time emissions?",
      description: "Luxa uses advanced data integration from various sources, including on-site sensors, equipment logs, and material usage records. This real-time data is then analyzed to provide accurate and up-to-date emissions information, helping you make informed decisions."
    },
    {
      header : "Can Luxa’s software help my project achieve LEED certification or other environmental standards?",
      description : "Absolutely. Luxa’s software is designed to track and manage emissions effectively, which is a critical component of LEED and other environmental certification programs. By providing detailed emissions data, Luxa supports your project’s compliance and certification efforts."
    },
    
    {
      header : "Is Luxa suitable for small-scale construction projects or only large-scale developments?",
      description : "Luxa is versatile and scalable, making it suitable for projects of all sizes. Whether you’re working on a small residential build or a large commercial development, Luxa can be tailored to meet your project's specific emission tracking and reporting needs."
    },
    {
      header : "How does Luxa ensure the accuracy of its emissions reporting?",
      description : " Luxa employs stringent data verification protocols and uses established emission factors and calculation methods. This ensures that the emissions data and reports generated by Luxa are both accurate and reliable."
    },
    {
      header : "What kind of support does Luxa offer for setting up and using the emission management system?",
      description : "We provide comprehensive support, including initial setup assistance, training for your team, and ongoing technical support. Our goal is to ensure that you can maximize the benefits of Luxa’s emission management system with ease."
    },
    {
      header : "Can Luxa integrate with our existing project management tools?",
      description : " Yes, Luxa is designed with integration capabilities to work seamlessly with many existing project management tools. This integration ensures a smooth workflow and allows you to manage all aspects of your project, including emission management, in one place."
    },
    // {
    //   header : "",
    //   description : ""
    // },
    // Add more accordion items as needed
  ];
  const dataForCard ="Emission Software"
  return (
    <div className={`${styles.servicesScope123Emis} ${loaded && styles.loaded}`}>
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
        <CardContainer  accordionData={accordionData}/>
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
