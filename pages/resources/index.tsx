import type { NextPage } from "next";
import SustainabilityForm from "../../components/SustainabilityForm";
import ContactUsFormContainer from "../../components/ContactUsFormContainer";
import styles from "./resource.module.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../components/CardContainer";

const ResourcesConstructionType2: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLink, setActiveLink] =  useState("resources");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    }, []);
    const accordionData = [
      {
        header: " Can Luxa handle the complexities of large-scale new construction projects?",
        description: " Absolutely. Luxa is designed to manage the intricacies of large-scale projects. Our platform scales to accommodate the size and complexity of your project, ensuring efficient management of resources, timelines, and compliance requirements."
      },
      {
        header: "How does Luxa assist with sustainability goals in new construction?",
        description: "Luxa helps you integrate sustainability from the ground up. Our features include real-time tracking of emissions, assistance in sourcing sustainable materials, and streamlined pathways to achieving green building certifications like LEED."
      },
      {
        header: "Does Luxa provide data analytics for better decision-making in new construction projects?",
        description: "Yes, one of Luxa’s key strengths is its data analytics capability. We provide detailed insights into various aspects of your project, such as emission analysis, time efficiency, resource optimization, and environmental impact, aiding in informed decision-making."
      },
      {
        header: ": Can Luxa integrate with other tools and systems we currently use?",
        description: "Luxa is built with integration in mind. Our platform can seamlessly connect with various other tools and systems that you might already be using, ensuring a unified and efficient workflow."
      },
      {
        header: "Is Luxa suitable for both residential and commercial new construction projects?",
        description: " Absolutely. Luxa is versatile and can be tailored to suit both residential and commercial construction projects. Whether you are building homes or commercial properties, Luxa provides the tools and insights necessary for successful project completion."
      },
      {
        header: "How does Luxa support collaboration among different stakeholders in a construction project?",
        description: "Collaboration is key in construction projects. Luxa facilitates this by providing a shared platform where project managers, contractors, architects, and clients can communicate, share documents, and stay updated on project progress, ensuring everyone is on the same page."
      },

      // Add more accordion items as needed
    ];
  return (
    <div className={`${styles.resourcesConstructionType} ${isLoaded ? styles.loaded : ''}`}>
      <Header
      setIsMobile={setIsMobile}
        activeLink={activeLink}
        projectDescription="Optimized Solutions for New Construction Projects"
        constructionManagementDes="Luxa introduces a groundbreaking approach to new construction, seamlessly blending advanced technology with the unique demands of modern residential and commercial building projects. Our platform is designed to address the diverse challenges of new construction, offering tailored solutions that enhance efficiency, ensure sustainability, and streamline project management from concept to completion."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={styles.frameParent}>
        <SustainabilityForm />
      </section>
     
     <DataAnalyticsInsightsContainer dataforcard={"for Your Next Project"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
        FAQs on New Construction Project Management
        </h1>
        <CardContainer  accordionData={accordionData}/>

      </section>

      <ContactUsFormContainer />
    </div>
  );
};

export default ResourcesConstructionType2;
