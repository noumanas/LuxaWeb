import type { NextPage } from "next";
import InfrastructureConstructionCont from "../../../components/InfrastructureConstructionCont";
import styles from "./ResourcesConstructionType1.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import Header from "../../../components/Header";

const ResourcesConstructionType1: NextPage = () => {
  return (
    <div className={styles.resourcesConstructionType}>
    
    <Header
        projectDescription="Tailored Solutions for Infrastructure Projectsy"
        constructionManagementDes="Luxa brings unparalleled expertise and technology to the forefront of infrastructure construction, offering specialized solutions designed to tackle the intricate challenges and scale of these projects. With our innovative platform, we empower your infrastructure projects with advanced tools for data management, compliance tracking, and sustainability, ensuring every phase meets the highest standards of efficiency and excellence."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />

  
      <section className={styles.resourcesConstructionTypeInner}>
        <InfrastructureConstructionCont />
      </section>
      <DataAnalyticsInsightsContainer dataforcard={"on Your Infrastructure Project"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
        FAQs About Luxa in Infrastructure
        </h1>
        <CardContainer />
      </section>
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Contact Us for a Tailored Infrastructure Solution"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
  
    <Footer/>
    </div>
  );
};

export default ResourcesConstructionType1;
