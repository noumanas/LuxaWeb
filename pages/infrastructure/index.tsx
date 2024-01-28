import type { NextPage } from "next";
import FrameComponent2 from "../../components/FrameComponent2";
import InfrastructureConstructionCont from "../../components/InfrastructureConstructionCont";
import styles from "./ResourcesConstructionType1.module.css";
import Footer from "../../components/Footer";
import ContactFormContainer from "../../components/ContactFormContainer";
import CardContainer from "../../components/CardContainer";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";

const ResourcesConstructionType1: NextPage = () => {
  return (
    <div className={styles.resourcesConstructionType}>
    
      <FrameComponent2
        stroke3="/stroke-2.svg"
        stroke2="/stroke-3.svg"
        yourSustainabilityCommand="Tailored Solutions for Infrastructure Projects"
        gainUnparalleledInsightsI="Luxa brings unparalleled expertise and technology to the forefront of infrastructure construction, offering specialized solutions designed to tackle the intricate challenges and scale of these projects. With our innovative platform, we empower your infrastructure projects with advanced tools for data management, compliance tracking, and sustainability, ensuring every phase meets the highest standards of efficiency and excellence."
        frameSectionPadding="0px 0px var(--padding-51xl)"
        frameDivGap="148px"
        servicesColor="#454545"
        servicesFontWeight="unset"
        frameDivGap1="9px"
        resourcesColor="6px solid #d36135"
        resourcesFontWeight="bold"
        advancedAnalyticsGap="121px"
        footerGap="30px"
        yourSustainabilityCommandHeight="unset"
        gainUnparalleledInsightsHeight="81px"
        linkedInIconWidth="39px"
        linkedInIconHeight="90px"
        rectangleDivWidth="39px"
        rectangleDivHeight="90px"
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
