import type { NextPage } from "next";
import Header from "../../components/Header";
import AdvancedEmissionsTrackingSecti from "../../components/AdvancedEmissionsTrackingSecti";
import ComprehensiveProjectManagement from "../../components/ComprehensiveProjectManagement";
import TrainingAndSupportContainer from "../../components/TrainingAndSupportContainer";
import FormContainer2 from "../../components/FormContainer2";
import styles from "./ResourcesIndustryConstruc.module.css";
import Footer from "../../components/Footer";
import ContactFormContainer from "../../components/ContactFormContainer";
import CardContainer from "../../components/CardContainer";

const ResourcesIndustryConstruc: NextPage = () => {
  return (
 
    <div className={styles.resourcesIndustryConstruc}>
      {/* <div className={styles.resourcesIndustryConstrucChild} /> */}
      <Header
        projectDescription="Revolutionizing the Construction Industry with Luxa"
        constructionManagementDes="At the forefront of innovation, Luxa is redefining construction project management by integrating cutting-edge sustainability solutions. Our platform uniquely combines real-time emissions tracking, streamlined certification processes, and data-driven insights, setting a new standard in eco-conscious construction practices."
        readyToLearnFrameGap="152px"
        propPadding="0px 0px var(--padding-8xl)"
      />
      <AdvancedEmissionsTrackingSecti />
      <section className={styles.lEEDServices}>
        <ComprehensiveProjectManagement />
      </section>
      <TrainingAndSupportContainer />
      <FormContainer2 />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
          FAQs
        </h1>
        <CardContainer />
      </section>
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Schedule a Demo or Consultation"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
        <Footer/>
    </div>
  );
};

export default ResourcesIndustryConstruc;
