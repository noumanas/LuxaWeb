import type { NextPage } from "next";
import RenovationCertificationForm from "../../../components/RenovationCertificationForm";
import ContactFormContainer from "../../../components/ContactFormContainer";
import styles from "./ResourcesConstructionType.module.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../../components/CardContainer";

const ResourcesConstructionType: NextPage = () => {
  return (
    <div className={styles.resourcesConstructionType}>
      <Header
        projectDescription="Tailored Solutions for Retrofit and Renovation Projects"
        constructionManagementDes="Retrofit and renovation projects in construction present unique challenges, from integrating new systems into existing structures to meeting updated sustainability standards. Luxa offers tailored solutions that navigate these complexities, providing seamless project management, environmental compliance, and enhanced efficiency for every renovation need."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={styles.rectangleGroup}>
        <RenovationCertificationForm />
      </section>
    
      <DataAnalyticsInsightsContainer dataforcard={"on Your Renovation Project"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
          FAQs
        </h1>
        <CardContainer />
      </section>
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

export default ResourcesConstructionType;
