import type { NextPage } from "next";
import RenovationCertificationForm from "../../../components/RenovationCertificationForm";
import ContactFormContainer from "../../../components/ContactFormContainer";
import styles from "./ResourcesConstructionType.module.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../../components/CardContainer";

const ResourcesConstructionType: NextPage = () => {
  const accordionData = [
    {
      header: "What is LEED Certification and Why is it Important?",
      description: "LEED (Leadership in Energy and Environmental Design) is a globally recognized green building certification system. It provides a framework for healthy, efficient, carbon-saving green buildings. LEED certification is important as it demonstrates a building's commitment to environmental sustainability and can lead to reduced operational costs, increased asset value, and a healthier environment for occupants."
    },
    {
      header: "How do I register my first project?",
      description: "Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae."
    },
    // Add more accordion items as needed
  ];
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
        <CardContainer accordionData={accordionData} />
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
