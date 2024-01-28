import type { NextPage } from "next";
import Header1 from "../../components/Header1";
import SustainabilityForm from "../../components/SustainabilityForm";
import RenovationProjectContainer from "../../components/RenovationProjectContainer";
import FAQContainer from "../../components/FAQContainer";
import ContactUsFormContainer from "../../components/ContactUsFormContainer";
import styles from "./resource.module.css";
import { useEffect, useState } from "react";

const ResourcesConstructionType2: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    }, []);

  return (
    <div className={`${styles.resourcesConstructionType} ${isLoaded ? styles.loaded : ''}`}>
      <img className={styles.feature01Icon} alt="" />
      <img className={styles.feature02Icon} alt="" />
      <Header1 />
      <section className={styles.frameParent}>
        <SustainabilityForm />
      </section>
      <RenovationProjectContainer
        projectDescription="for Your Next Project"
        renovationProjectDescript="Ready to elevate your next new construction project with Luxa's innovative solutions? Contact us today to discuss how we can tailor our technology to meet your project's specific needs, ensuring efficiency, sustainability, and success every step of the way."
        propMinHeight="unset"
        propPadding="var(--padding-30xl) 69px 295px var(--padding-xl)"
        propHeight="591px"
        propWidth="1075px"
        propPadding1="unset"
        propFlex="unset"
        propWidth1="1032px"
        propMarginLeft="-606px"
        propWidth2="1219px"
        propWidth3="471px"
        propPadding2="unset"
        propFlex1="unset"
        propWidth4="422px"
        propMarginTop="-228px"
      />
     
      <FAQContainer
        faqTitle="FAQs on New Construction Project Management"
        retrofitQuestion="Can Luxa handle the complexities of large-scale new construction projects?"
        retrofitFaqTitle="Absolutely. Luxa is designed to manage the intricacies of large-scale projects. Our platform scales to accommodate the size and complexity of your project, ensuring efficient management of resources, timelines, and compliance requirements."
        propMinHeight="977px"
      />

      <ContactUsFormContainer />
    </div>
  );
};

export default ResourcesConstructionType2;
