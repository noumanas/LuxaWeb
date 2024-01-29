import type { NextPage } from "next";
import Header from "../../../components/Header";
import AdvancedEmissionsTrackingSecti from "../../../components/AdvancedEmissionsTrackingSecti";
import ComprehensiveProjectManagement from "../../../components/ComprehensiveProjectManagement";
import TrainingAndSupportContainer from "../../../components/TrainingAndSupportContainer";
import FormContainer2 from "../../../components/FormContainer2";
import styles from "./ResourcesIndustryConstruc.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import CardContainer from "../../../components/CardContainer";

const ResourcesIndustryConstruc: NextPage = () => {
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
        <CardContainer accordionData={accordionData}/>
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
