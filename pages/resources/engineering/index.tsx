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
                  <div className={styles.wrapperFrameGroup}>
                    <img
                      className={styles.frameGroupIcon}
                      alt=""
                      src="/rectangle-77@2x.png"
                    />
                  </div>
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
