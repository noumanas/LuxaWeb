import type { NextPage } from "next";
import FrameComponent2 from "../../components/FrameComponent2";
import RenovationCertificationForm from "../../components/RenovationCertificationForm";
import RenovationProjectContainer from "../../components/RenovationProjectContainer";
import FAQContainer from "../../components/FAQContainer";
import ContactFormContainer from "../../components/ContactFormContainer";
import styles from "./ResourcesConstructionType.module.css";
import Footer from "../../components/Footer";

const ResourcesConstructionType: NextPage = () => {
  return (
    <div className={styles.resourcesConstructionType}>
      <img className={styles.feature01Icon} alt="" />
      <img className={styles.feature02Icon} alt="" />
      <div className={styles.learnMoreParent}>
        <div className={styles.learnMore}>Learn More</div>
        <img className={styles.groupChild} alt="" />
      </div>
      <div className={styles.learnMoreGroup}>
        <div className={styles.learnMore1}>Learn More</div>
        <img className={styles.groupItem} alt="" />
      </div>
      <div className={styles.learnMoreContainer}>
        <div className={styles.learnMore2}>Learn More</div>
        <img className={styles.groupInner} alt="" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.learnMore3}>Learn More</div>
        <img className={styles.arrowIcon} alt="" />
      </div>
      <div className={styles.learnMoreParent1}>
        <div className={styles.learnMore4}>Learn More</div>
        <img className={styles.groupChild1} alt="" />
      </div>
      <FrameComponent2
        stroke3="/stroke-2.svg"
        stroke2="/stroke-3.svg"
        yourSustainabilityCommand="Tailored Solutions for Retrofit and Renovation Projects"
        gainUnparalleledInsightsI="Retrofit and renovation projects in construction present unique challenges, from integrating new systems into existing structures to meeting updated sustainability standards. Luxa offers tailored solutions that navigate these complexities, providing seamless project management, environmental compliance, and enhanced efficiency for every renovation need."
        frameSectionPadding="0px 0px var(--padding-51xl)"
        frameDivGap="160px"
        servicesColor="#454545"
        servicesFontWeight="unset"
        frameDivGap1="9px"
        resourcesColor="6px solid #d36135"
        resourcesFontWeight="bold"
        advancedAnalyticsGap="57px"
        footerGap="22px"
        yourSustainabilityCommandHeight="120px"
        gainUnparalleledInsightsHeight="81px"
        linkedInIconWidth="45px"
        linkedInIconHeight="96px"
        rectangleDivWidth="45px"
        rectangleDivHeight="96px"
      />
      <section className={styles.rectangleGroup}>
        <RenovationCertificationForm />
      </section>
      <RenovationProjectContainer
        projectDescription="on Your Renovation Project"
        renovationProjectDescript="Ready to elevate your next retrofit or renovation project with Luxa's innovative solutions? Contact us today to discuss how we can tailor our technology to meet your project's specific needs, ensuring efficiency, sustainability, and success every step of the way."
        propMinHeight="939px"
        propPadding="var(--padding-26xl) var(--padding-17xl) var(--padding-229xl) var(--padding-xl)"
        propHeight="538px"
        propWidth="1170px"
        propPadding1="0px 0px 0px var(--padding-3xs)"
        propFlex="1"
        propMarginLeft="-735px"
        propWidth2="1308px"
        propWidth3="438px"
        propPadding2="0px 0px 0px var(--padding-base)"
        propFlex1="1"
        propMarginTop="-181px"
      />
      <FAQContainer
        faqTitle="FAQs on Retrofit and Renovation with Luxa"
        retrofitQuestion="How does Luxa accommodate the unique requirements of retrofit projects?"
        retrofitFaqTitle="Luxa is designed to be highly adaptable. For retrofit projects, it allows for customized input of existing building parameters, ensuring that our analytics and recommendations are tailored to the unique aspects and challenges of your specific retrofit project."
        propMinHeight="1047px"
      />
      <ContactFormContainer
        imageSize="/frame2.svg"
        contactMessage="Contact Us for Your Renovation Project Needs"
        renovationImageUrl="/frame-12@2x.png"
        propPadding="var(--padding-105xl) var(--padding-60xl)"
        propBottom="-89px"
      />
  
    <Footer/>
    </div>
  );
};

export default ResourcesConstructionType;
