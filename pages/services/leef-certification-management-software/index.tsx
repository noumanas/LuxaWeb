import type { NextPage } from "next";
import BoostProductivityContainer from "../../../components/BoostProductivityContainer";
import DataAnalyticsHeadingContainer from "../../../components/DataAnalyticsHeadingContainer";
import CardContainer from "../../../components/CardContainer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import styles from "./ServicesLEEDCertificationM.module.css";
import Footer from "../../../components/Footer"
import { useEffect, useState } from "react";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import Header from "../../../components/Header";
const ServicesLEEDCertificationM: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    }, []);
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
    <div className={`${styles.servicesLeedCertificationM} ${isLoaded ? styles.loaded : ''}`} >
      <Header
        projectDescription="Streamline Your Path to LEED Certification with Luxa"
        constructionManagementDes="Luxa's innovative software transforms the LEED certification journey, offering an integrated, user-friendly platform that simplifies every step from compliance tracking to documentation submission, making sustainable certification more accessible and manageable than ever before."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)" activeLink={""}      />
     
      <div className={styles.groupDiv}>
        <div className={styles.learnMore3}>Learn More</div>
        <img className={styles.arrowIcon} alt="" />
      </div>
      <div className={styles.learnMoreParent1}>
        <div className={styles.learnMore4}>Learn More</div>
        <img className={styles.groupChild1} alt="" />
      </div>
      <section className={styles.rectangle}>
        <BoostProductivityContainer
          productDimensions="/rectangle-621@2x.png"
          featureDescription="Create your project"
          projectDescription="Create your project in Luxa by logging in here."
          imageDimensions="/rectangle-63@2x.png"
          projectSubtitle="Kick-off your project"
          subcontractorVisibilityTe="Luxa experts will train your project team during a project kick-off call."
          imageDimensions2="/rectangle-64@2x.png"
          titleText="Achieve your certification goals"
          businessCollaborationDesc="Use Luxa to track all of your certification construction related documentation and stay on track of credit progress."
          propWidth="unset"
          propOverflow="unset"
          propAlignSelf="unset"
          propHeight="unset"
          propWidth1="407px"
          propOverflow1="unset"
          propWidth2="407px"
          propOverflow2="unset"
        />
        <div className={styles.groupParent}>
          <div className={styles.group} />
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              <DataAnalyticsHeadingContainer
                featureTitle="Key Features of Our LEED Management Software"
                dataAnalyticsFeatureTitle="Effortless LEED Compliance"
                dataAnalyticsSubtitle="Comprehensive Documentation Management"
                dashboardFeatureTitle="Real-Time Progress Tracking"
                reportingToolsTitle="Automated Credit Documentation and Collaboration"
                dataAnalyticsImageCaption="Up-to-Date LEED Standards and Updates"
                dataAnalyticsFeatureTitle2="Expert Guidance and Support"
                certificationTrackingTitl="User-Friendly Interface"
                propPadding="var(--padding-7xs) 0px 0px"
                propMinWidth="420px"
                propGap="20px"
                propHeight="100px"
                propMinWidth1="309px"
              />
              <div className={styles.fAQGroup}>
                <div className={styles.fAQGroupChild} />
                <img
                  className={styles.group12160252401}
                  loading="eager"
                  alt=""
                  src="/group-1216025240-11@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.gettingStarted}>
        <div className={styles.requestDemoFrame}>
          <img
            className={styles.leedCertificationLevels1Icon}
            loading="eager"
            alt=""
            src="/leedcertificationlevels-1@2x.png"
          />
        </div>
        <div className={styles.understandingLeedCertificatiParent}>
          <h1 className={styles.understandingLeedCertificati}>
            Understanding LEED Certification What You Need to Know
          </h1>
          <div className={styles.leedLeadershipIn}>
            LEED (Leadership in Energy and Environmental Design) certification
            is a globally recognized symbol of sustainability achievement and
            leadership in the construction industry, emphasizing eco-friendly
            building practices, energy efficiency, and resource conservation. To
            achieve this prestigious certification, projects must meet specific
            criteria across various sustainability categories, including site
            development, water savings, energy efficiency, material selection,
            and indoor environmental quality
          </div>
        </div>
      </section>
      <section className={styles.partnersGroup}>
        <div className={styles.contactUsForm}>
          <div className={styles.projectRegistrationLine}>
            <div className={styles.howLuxaOptimizesLEED}>
              <h1 className={styles.integratingLeedGoals}>
                Integrating LEED Goals into Project Management
              </h1>
              <div className={styles.luxaSeamlesslyWeaves}>
                Luxa seamlessly weaves LEED certification goals into every stage
                of your construction project, ensuring that sustainability isn't
                just an add-on, but a fundamental aspect of your project
                management strategy. From initial design to final construction,
                Luxa aligns every decision and action with LEED criteria,
                fostering a holistic approach to building sustainably and
                efficiently.
              </div>
            </div>
          </div>
          <div className={styles.callusFrame}>
            <div className={styles.wrapperGroup10000024971}>
              <img
                className={styles.group10000024971}
                loading="eager"
                alt=""
                src="/group-1000002497-2@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.environmentalImpactAssessmen}>
        <div className={styles.servicesFrame}>
          <div className={styles.luxaLEEDSteps}>
            <div className={styles.luxaLEEDStepsChild} />
            <img
              className={styles.group12160252351}
              loading="eager"
              alt=""
              src="/group-1216025235-1@2x.png"
            />
          </div>
          <div className={styles.projectInfoFrame}>
            <div className={styles.howLuxaOptimizesLEED1}>
              <h1 className={styles.howLuxaOptimizes}>
                How Luxa Optimizes LEED Documentation and Submission
              </h1>
              <div className={styles.luxasLeedCertification}>
                Luxa’s LEED Certification Management Software revolutionizes the
                documentation process by automatically compiling and organizing
                necessary project data, leveraging smart templates and
                checklists to ensure accuracy and completeness.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.customizedSolutionsFrame}>
          <div className={styles.gettingStartedRequestDemo}>
            <div className={styles.rectangleGroupFrame}>
              <h1 className={styles.customizedSolutionsFor}>
                Customized Solutions for Diverse Project Needs
              </h1>
              <div className={styles.whetherYoureDeveloping}>
                "Whether you’re developing a high-rise commercial building or a
                sustainable residential complex, Luxa's LEED management software
                is designed to adapt seamlessly to your project's specific needs
                and goals. Our platform intelligently tailors its features, from
                tracking LEED credits to managing documentation, ensuring
                optimal LEED certification pathways for projects of any scale
                and type.
              </div>
            </div>
            <div className={styles.lEEDCertificationManageme}>
              <img
                className={styles.group12160252341}
                loading="eager"
                alt=""
                src="/group-1216025234-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
   
      <DataAnalyticsInsightsContainer dataforcard={"for LEED Certification"} />

      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
          FAQs on LEED Certification Management
        </h1>
        <CardContainer  accordionData={accordionData}/>
      </section>
      {/* <Accordions/> */}
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Contact Us for Your LEED Certification Needs"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
  <Footer/>
    </div>
  );
};

export default ServicesLEEDCertificationM;
