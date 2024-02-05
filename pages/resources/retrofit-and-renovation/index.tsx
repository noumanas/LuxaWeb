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
      header: "How does Luxa accommodate the unique requirements of retrofit projects?",
      description: "Luxa is designed to be highly adaptable. For retrofit projects, it allows for customized input of existing building parameters, ensuring that our analytics and recommendations are tailored to the unique aspects and challenges of your specific retrofit project."
    },
    {
      header: "Can Luxa help in achieving energy efficiency in renovation projects?",
      description: "Absolutely. Luxa’s platform focuses on sustainability and includes features that help track and improve energy efficiency. It provides insights on energy usage patterns and recommends sustainable alternatives for building materials and systems, aiding in making renovations more energy-efficient."
    },
    {
      header: "Is Luxa useful for small-scale renovation projects?",
      description: "Yes, Luxa is scalable and suitable for projects of all sizes. For small-scale renovations, Luxa can streamline project management, assist in material selection for sustainability, and ensure compliance with local environmental regulations."
    },
    {
      header: "How does Luxa handle historical buildings in renovation projects?",
      description: "Luxa recognizes the importance of preserving historical integrity. Our tool can integrate historical data and consider preservation guidelines while providing solutions for modernizing and retrofitting historic structures in line with contemporary environmental standards."
    },
    {
      header: "Can Luxa assist in obtaining sustainability certifications for renovation projects?",
      description: "Definitely. Luxa simplifies the process of tracking and documenting various sustainability measures implemented in renovation projects, making it easier to apply for and obtain certifications like LEED for Existing Buildings, BREEAM Refurbishment, and others."
    },
    {
      header: "Does Luxa provide support for waste management during renovation?",
      description: "Yes, Luxa includes features to track and manage waste generated during renovation projects. It offers solutions for recycling, reusing materials, and reducing overall waste, contributing to more sustainable renovation practices."
    },
    {
      header: "How can Luxa facilitate better collaboration among different contractors in a renovation project?",
      description: "Luxa offers collaborative tools that enable seamless communication and coordination among various contractors and stakeholders involved in a renovation project. It provides a central platform for sharing updates, tracking progress, and making collective decisions, thereby enhancing team collaboration."
    }
  ];
  
  
  return (
    <div className={styles.resourcesConstructionType}>
      <Header
        projectDescription="Tailored Solutions for Retrofit and Renovation Projects"
        constructionManagementDes="Retrofit and renovation projects in construction present unique challenges, from integrating new systems into existing structures to meeting updated sustainability standards. Luxa offers tailored solutions that navigate these complexities, providing seamless project management, environmental compliance, and enhanced efficiency for every renovation need."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)" activeLink={""}      />
      <section className={styles.rectangleGroup}>
        <RenovationCertificationForm />
      </section>
    
      <DataAnalyticsInsightsContainer dataforcard={"on Your Renovation Project"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
          FAQs on Retrofit and Renovation with Luxa
        </h1>
        <CardContainer accordionData={accordionData} />
      </section>
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Contact Us for Your Renovation Project Needs"
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
