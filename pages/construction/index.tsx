import type { NextPage } from "next";
import Header from "../../components/Header";
import AdvancedEmissionsTrackingSecti from "../../components/AdvancedEmissionsTrackingSecti";
import ComprehensiveProjectManagement from "../../components/ComprehensiveProjectManagement";
import TrainingAndSupportContainer from "../../components/TrainingAndSupportContainer";
import FormContainer2 from "../../components/FormContainer2";
import FAQContainer from "../../components/FAQContainer";
import EnvironmentImpactAssessment from "../../components/EnvironmentImpactAssessment";
import styles from "./ResourcesIndustryConstruc.module.css";
import Footer from "../../components/Footer";
import ContactFormContainer from "../../components/ContactFormContainer";

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
      <div className={styles.learnMoreParent2}>
        <div className={styles.learnMore5}>Learn More</div>
        <img className={styles.groupChild2} alt="" />
      </div>
      <TrainingAndSupportContainer />
      <FormContainer2 />
      <FAQContainer
        faqTitle="FAQs"
        retrofitQuestion="What sustainability certifications can Luxa help us achieve?"
        retrofitFaqTitle=" Luxa is designed to assist with a range of sustainability certifications, including LEED, BREEAM, and WELL Building Standards. Our platform streamlines the compliance process by managing documentation, tracking sustainability metrics, and providing actionable insights to meet certification criteria effectively."
        propMinHeight="1047px"
      />
      <img className={styles.feature01Icon} alt="" />
      <img className={styles.feature02Icon} alt="" />
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
