import type { NextPage } from "next";
import AdvancedTechnologyLifecycleCon from "../../../components/AdvancedTechnologyLifecycleCon";
import DataManagementContainer from "../../../components/DataManagementContainer"
import ContactFormContainer from "../../../components/ContactFormContainer";
import styles from "./ResourcesIndustryEngineer.module.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../../components/CardContainer";

const ResourcesIndustryEngineer: NextPage = () => {
  const accordionData = [
    {
      header: "How Does Luxa Help with Sustainability in Engineering Projects?",
      description: "Luxa's software is designed to integrate sustainability into every phase of engineering projects. It offers tools for real-time emissions tracking, sustainability certification management, and efficient resource use, aiding in making environmentally responsible decisions throughout the project lifecycle."
    },
    {
      header: "Can Luxa Integrate with Existing Engineering Design Tools?",
      description: "Absolutely. Luxa is built with compatibility in mind and can seamlessly integrate with a wide range of engineering design tools and software, ensuring a smooth workflow and data consistency across platforms."
    },
    {
      header: "Does Luxa Support LEED Certification for Engineering Projects?",
      description: "Yes, Luxa supports LEED certification by providing detailed tracking and reporting features that align with LEED requirements, making it easier for engineering projects to achieve and maintain this certification."
    },
    {
      header: "Is Luxa Suitable for Both Small and Large-Scale Engineering Projects?",
      description: "Definitely. Luxa is scalable and flexible, making it an ideal solution for any size of engineering project, from small-scale builds to large, complex constructions."
    },
    {
      header: "How Does Luxa Ensure Data Accuracy in Emissions Tracking?",
      description: "Luxa employs advanced algorithms and data validation techniques to ensure the accuracy of emissions data. It gathers information from reliable sources and utilizes real-time data processing to provide precise and up-to-date emissions insights."
    },
    {
      header: "Can Luxa Help in Reducing the Carbon Footprint of Engineering Projects?",
      description: "Yes, Luxa is designed to help reduce the carbon footprint of engineering projects. By providing detailed emissions data and identifying areas where efficiency can be improved, Luxa enables engineers to make informed decisions that contribute to lower carbon emissions."
    },
    {
      header: "How User-Friendly is Luxa for Engineers Who Aren't Tech-Savvy?",
      description: "Luxa is designed with a user-friendly interface, making it accessible even for those who may not be tech-savvy. It offers intuitive navigation and clear, visual data representation, ensuring that all users can efficiently utilize its features without a steep learning curve. Additionally, we provide comprehensive support and training materials to help users get the most out of our platform."
    }
  ];
  
  return (
    <div className={styles.resourcesIndustryEngineer}>
      <Header
        projectDescription="Tailored Solutions for the Engineering Industry"
        constructionManagementDes="We understand that sustainability is a cornerstone of modern engineering projects. Our specialized solutions are designed to seamlessly address the unique sustainability challenges faced by engineers, integrating cutting-edge technology with eco-friendly practices to ensure your projects not only meet but exceed environmental standards and goals."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-51xl)" activeLink={""}      />
      <AdvancedTechnologyLifecycleCon />
      <section className={styles.rectangle}>
        <div className={styles.fAQsFrame}>
          <div className={styles.howDoesLuxaHelpFrame}>
            <div className={styles.gettingStartedGroup}>
              <div className={styles.sustainabilityTextWrapper}>
                <div className={styles.sustainabilityText}>
                  <h1 className={styles.drivingEfficiencyIn}>
                    Driving Efficiency in Design and Construction
                  </h1>
                  <div className={styles.catalyzingEnhancedEfficiency}>
                    Catalyzing enhanced efficiency in both design and
                    construction phases, Luxa's software streamlines
                    decision-making with its integrated data analytics and
                    insights. This leads to significant time and cost savings,
                    as project teams can quickly identify optimal materials and
                    processes that align with sustainability goals, reducing
                    rework and accelerating project timelines.
                  </div>
                </div>
              </div>
              <div className={styles.projectDetailsWrapper}>
                <div className={styles.projectDetails}>
                  {/* <div className={styles.wrapperFrameGroup}>
                    <img
                      className={styles.frameGroupIcon}
                      alt=""
                      src="/rectangle-77@2x.png"
                    />
                  </div> */}
                  <img
                    className={styles.rectangleTextIcon}
                    alt=""
                    src="/rectangle-text@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.wrapperGroup33400Parent}>
              <div className={styles.wrapperGroup33400}>
                <img
                  className={styles.wrapperGroup33400Child}
                  loading="eager"
                  alt=""
                  src="/group-33400-1@2x.png"
                />
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.sustainabilityAndComplianceParent}>
                  <h1 className={styles.sustainabilityAndCompliance}>
                    Sustainability and Compliance in Engineering Projects
                  </h1>
                  <div className={styles.luxaEmpowersEngineering}>
                    "Luxa empowers engineering projects to achieve ambitious
                    sustainability goals through comprehensive emissions
                    tracking and efficient resource management. Our platform
                    ensures adherence to environmental regulations, simplifying
                    compliance with an intuitive, data-driven approach.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DataManagementContainer
            featureDescription="Integration with Engineering Software and Tools"
            sustainabilityDataManagem="Our solution acts as a complementary asset, enhancing your current systems with advanced sustainability tracking and compliance management, all without disrupting the established processes you rely on."
            dataManagementImageUrl="/group-334012@2x.png"
            propFlex="unset"
            propAlignSelf="stretch"
            propPadding="0px var(--padding-base) 0px var(--padding-mini)"
            propPadding1="0px 0px var(--padding-4xl)"
            propHeight="81px"
          />
        </div>
      </section>
      <DataAnalyticsInsightsContainer dataforcard={"in Your Engineering Projects"} />

      <section className={styles.fAQs}>
        <h1 className={styles.faqsByEngineering}>
          FAQs by Engineering Professionals
        </h1>
        <CardContainer  accordionData={accordionData}/>
      </section>
      <ContactFormContainer
        imageSize="/frame4.svg"
        contactMessage="Contact Us for a Tailored Engineering Solution"
        renovationImageUrl="/frame-12@2x.png"
        propPadding="var(--padding-105xl) var(--padding-60xl)"
        propMinHeight="unset"
        propBottom="-89px"
      />
      <Footer/>
    </div>
  );
};

export default ResourcesIndustryEngineer;
