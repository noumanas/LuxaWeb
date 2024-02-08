import type { NextPage } from "next";
import Header from "../../../components/Header";
import DataDrivenDesignFrame from "../../../components/DataDrivenDesignFrame";
import styles from "./ResourcesIndustryArchitec.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../../components/CardContainer";
import { useState } from "react";

const ResourcesIndustryArchitec: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const accordionData = [
    {
      header: "How does Luxa integrate with existing architectural design software?",
      description: "Luxa is designed for seamless integration with popular architectural design software. It can sync with your existing tools to aggregate and analyze data, ensuring a smooth workflow without the need to switch between multiple platforms."
    },
    {
      header: "Can Luxa assist in achieving sustainability certifications for my designs?",
      description: "Yes, Luxa is equipped with features that simplify the process of obtaining sustainability certifications like LEED and BREEAM. It provides guidance and tracks compliance, making it easier for you to ensure your designs meet the necessary standards."
    },
    {
      header: "Does Luxa offer real-time collaboration tools for architects working in teams?",
      description: "Luxa offers real-time collaboration features that allow architects to work together effectively, regardless of location. This includes shared dashboards, instant updates, and communication tools to ensure everyone is on the same page."
    },
    {
      header: "How does Luxa handle data security and privacy, especially for sensitive project information?",
      description: "Data security is a top priority for Luxa. We employ robust encryption and secure data handling practices to ensure your project information is always protected and compliant with privacy regulations."
    },
    {
      header: "Can Luxa help in reducing the environmental impact of my architectural projects?",
      description: "Absolutely. Luxa provides detailed emissions tracking and analysis, helping you make informed decisions to minimize the environmental impact of your projects. It offers insights into materials, energy efficiency, and waste management strategies that align with eco-friendly practices."
    },
    {
      header: "Is Luxa user-friendly for architects who are not tech-savvy?",
      description: "Yes, Luxa is designed with a user-friendly interface that is intuitive even for those who may not be tech experts. Our platform provides easy navigation, clear visualizations, and straightforward tools that simplify complex data analysis, making it accessible for all users."
    },
    {
      header: "What kind of support does Luxa offer to architects during the project lifecycle?",
      description: "Luxa provides comprehensive support throughout your project’s lifecycle. This includes technical support for using the platform, as well as expert advice on sustainability practices and compliance. Our team is dedicated to ensuring you get the most out of Luxa to enhance your architectural projects."
    }
  ];
  return (
    <div className={styles.resourcesIndustryArchitec}>
   
      <Header
        setIsMobile={setIsMobile}
        projectDescription="Revolutionizing Architecture with Advanced Technology"
        constructionManagementDes="Luxa introduces a groundbreaking fusion of sustainability-focused technology and efficient project management, tailored specifically for the modern architect. This innovative platform seamlessly bridges the gap between ecological responsibility and the complex project oversight duties of architects, elevating the standard for sustainable design and construction."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)" activeLink={""}      />
      <section className={styles.projectManagementFrame}>
        <DataDrivenDesignFrame />
      </section>
      <DataAnalyticsInsightsContainer dataforcard={"in Architecture Projects"} />
      <section className={styles.fAQs}>
        <h1 className={styles.faqsByEngineering}>
          FAQs
        </h1>
        <CardContainer  accordionData={accordionData}/>
      </section>
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Connect with Us for a Tailored Solution"
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
