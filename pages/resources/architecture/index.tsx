import type { NextPage } from "next";
import Header from "../../../components/Header";
import DataDrivenDesignFrame from "../../../components/DataDrivenDesignFrame";
import styles from "./ResourcesIndustryArchitec.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";

const ResourcesIndustryArchitec: NextPage = () => {
  return (
    <div className={styles.resourcesIndustryArchitec}>
   
      <Header
        projectDescription="Revolutionizing Architecture with Advanced Technology"
        constructionManagementDes="Luxa introduces a groundbreaking fusion of sustainability-focused technology and efficient project management, tailored specifically for the modern architect. This innovative platform seamlessly bridges the gap between ecological responsibility and the complex project oversight duties of architects, elevating the standard for sustainable design and construction."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={styles.projectManagementFrame}>
        <DataDrivenDesignFrame />
      </section>
      <DataAnalyticsInsightsContainer dataforcard={"in Architecture Projects"} />

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

export default ResourcesIndustryArchitec;
