import type { NextPage } from "next";
import InfrastructureConstructionCont from "../../../components/InfrastructureConstructionCont";
import styles from "./ResourcesConstructionType1.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import Header from "../../../components/Header";
import { useState } from "react";

const ResourcesConstructionType1: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const accordionData = [
    {
      header: "How does Luxa cater to the specific needs of large-scale infrastructure projects?",
      description: "Luxa is designed with scalability in mind, handling the complex data and coordination needs of large infrastructure projects. Our platform integrates various aspects of project management, from emissions tracking to compliance, ensuring that even the largest projects can be managed efficiently."
    },
    {
      header: "Can Luxa assist with the compliance requirements typical in infrastructure construction?",
      description: "Luxa simplifies adherence to specifically environmental compliance standards. Our system keeps you updated with the latest standards and helps manage the necessary documentation and reporting."
    },
    {
      header: "Is Luxa capable of tracking emissions for infrastructure projects that span multiple years?",
      description: "Yes, Luxa is equipped to track emissions over extended periods. Our robust database and analytics tools can accumulate and analyze data over the entire lifecycle of long-term infrastructure projects, providing valuable insights into their environmental impact."
    },
    {
      header: "How does Luxa facilitate collaboration among the diverse teams involved in infrastructure projects?",
      description: "Luxa offers advanced collaboration tools that allow seamless communication and information sharing among various stakeholders, including contractors, engineers, and government bodies. This ensures that everyone is on the same page, enhancing project coordination and efficiency."
    },
    {
      header: "Can Luxa integrate with other software systems commonly used in infrastructure projects?",
      description: "Yes, integration is a key feature of Luxa. Our platform can seamlessly integrate with existing project management tools, GIS systems, and other software commonly used in infrastructure projects, ensuring a unified and efficient workflow."
    },
    {
      header: "Does Luxa provide real-time reporting capabilities for on-the-go decision making?",
      description: "Luxa offers real-time data analytics and reporting features, enabling project managers and decision-makers to access up-to-date information and make informed decisions quickly, essential for the dynamic environment of infrastructure projects."
    },
    {
      header: "What kind of support and training does Luxa offer for teams new to the software?",
      description: "We provide comprehensive training and ongoing support for all our clients. This includes onboarding sessions, detailed user manuals, and responsive customer support to ensure your team can make the most of Luxa’s capabilities."
    }
  ];
  

  return (
    <div className={styles.resourcesConstructionType}>
    
    <Header
        setIsMobile={setIsMobile}
        projectDescription="Tailored Solutions for Infrastructure Projects"
        constructionManagementDes="Luxa brings unparalleled expertise and technology to the forefront of infrastructure construction, offering specialized solutions designed to tackle the intricate challenges and scale of these projects. With our innovative platform, we empower your infrastructure projects with advanced tools for data management, compliance tracking, and sustainability, ensuring every phase meets the highest standards of efficiency and excellence."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)" activeLink={""}      />

  
      <section className={styles.resourcesConstructionTypeInner}>
        <InfrastructureConstructionCont />
      </section>
      <DataAnalyticsInsightsContainer dataforcard={"on Your Infrastructure Project"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
        FAQs About Luxa in Infrastructure
        </h1>
        <CardContainer accordionData={accordionData}/>
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
