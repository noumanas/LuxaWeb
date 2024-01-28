import type { NextPage } from "next";
import SustainabilityForm from "../../components/SustainabilityForm";
import ContactUsFormContainer from "../../components/ContactUsFormContainer";
import styles from "./resource.module.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../components/CardContainer";

const ResourcesConstructionType2: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    }, []);

  return (
    <div className={`${styles.resourcesConstructionType} ${isLoaded ? styles.loaded : ''}`}>
      <Header
        projectDescription="Optimized Solutions for New Construction Projects"
        constructionManagementDes="Luxa introduces a groundbreaking approach to new construction, seamlessly blending advanced technology with the unique demands of modern residential and commercial building projects. Our platform is designed to address the diverse challenges of new construction, offering tailored solutions that enhance efficiency, ensure sustainability, and streamline project management from concept to completion."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={styles.frameParent}>
        <SustainabilityForm />
      </section>
     
     <DataAnalyticsInsightsContainer dataforcard={"for Your Next Project"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
        FAQs on New Construction Project Management
        </h1>
        <CardContainer />
      </section>

      <ContactUsFormContainer />
    </div>
  );
};

export default ResourcesConstructionType2;
