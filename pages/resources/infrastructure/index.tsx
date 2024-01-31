import type { NextPage } from "next";
import InfrastructureConstructionCont from "../../../components/InfrastructureConstructionCont";
import styles from "./ResourcesConstructionType1.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import Header from "../../../components/Header";

const ResourcesConstructionType1: NextPage = () => {
  const accordionData = [
    {
      header: "What is LEED Certification and Why is it Important?",
      description: "LEED (Leadership in Energy and Environmental Design) is a globally recognized green building certification system. It provides a framework for healthy, efficient, carbon-saving green buildings. LEED certification is important as it demonstrates a building's commitment to environmental sustainability and can lead to reduced operational costs, increased asset value, and a healthier environment for occupants."
    },
    {
      header: "How Does Luxa Simplify the LEED Certification Process?",
      description: " Luxa simplifies the LEED certification process by automating much of the documentation and tracking required. Our platform consolidates all necessary data, tracks progress towards LEED credits, and provides real-time insights and compliance checks, making the process more manageable and less time-consuming."
    },
    {
      header : "Can Luxa Help with Both LEED Certification and Recertification?",
      description : "Yes, Luxa is designed to assist with both initial LEED certification and the recertification process. It maintains and organizes all your documentation and performance data, which is crucial for the recertification process, ensuring that your building remains compliant with LEED standards over time."
    },
    {
      header : "Is Luxa Suitable for Different Types of Construction Projects?",
      description : "Absolutely. Luxa is versatile and can be adapted to various types of construction projects, including commercial, residential, and infrastructure. Our platform can be tailored to meet the specific sustainability goals and requirements of each unique project."
    },
    {
      header : " How Does Luxa Ensure the Accuracy of LEED-Related Data?",
      description : "Luxa uses advanced data validation techniques to ensure the accuracy of all LEED-related data entered into the system. Our platform cross-references entered data with LEED requirements and provides alerts for any discrepancies or missing information, ensuring high data integrity."
    },
    {
      header : " Can Luxa Help in Achieving Higher Levels of LEED Certification?",
      description : " Yes, Luxa is an invaluable tool in striving for higher levels of LEED certification, like Silver, Gold, or Platinum. Our system provides insights and recommendations on how to achieve additional credits and improve sustainability performance, guiding you towards higher certification levels."
    },
    {
      header : "What Kind of Support Does Luxa Offer for First-Time LEED Applicants?",
      description : " For first-time LEED applicants, Luxa offers comprehensive support including guided walkthroughs of the LEED certification process, educational resources, and customer support from our team of experts. We ensure that you have all the knowledge and tools needed to navigate the LEED certification journey successfully.'"
    },
    // Add more accordion items as needed
  ];
  return (
    <div className={styles.resourcesConstructionType}>
    
    <Header
        projectDescription="Tailored Solutions for Infrastructure Projectsy"
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
