import type { NextPage } from "next";
import BoostProductivityContainer from "../../../components/BoostProductivityContainer";
import DataAnalyticsHeadingContainer from "../../../components/DataAnalyticsHeadingContainer";
import styles from "./ServicesDataAnalyticsAndI.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";
import Header from "../../../components/Header";
import DataAnalyticsInsightsContainer from "../../../components/DataAnalyticsInsightsContainer";
import CardContainer from "../../../components/CardContainer";

const ServicesDataAnalyticsAndI: NextPage = () => {
  const accordionData = [
    {
      header: " How does data analytics contribute to sustainability in construction projects?",
      description: "Data analytics plays a crucial role in sustainability by enabling accurate tracking of resource usage, waste generation, and carbon emissions. This information helps in making informed decisions that reduce environmental impact, improve energy efficiency, and ensure compliance with sustainability standards."
    },
    {
      header:"Can Luxa's data analytics help in achieving green building certifications like LEED?",
      description:"Absolutely. Luxa’s analytics tools can track and report on the specific metrics required for certifications like LEED. By providing detailed data on energy efficiency, material sourcing, and waste management, our platform simplifies the process of meeting certification criteria."
    },
    {
      header:"What type of sustainability data does Luxa analyze?",
      description:"Luxa analyzes a wide range of data, including but not limited to energy consumption, water usage, waste generation, recycling rates, carbon emissions, and the environmental impact of building materials. This comprehensive approach ensures a holistic view of sustainability in construction projects."
    },
    {
      header:"How does Luxa ensure the accuracy of its sustainability data?",
      description:"Luxa utilizes advanced data validation techniques and integrates with various trusted data sources, ensuring that the information processed is both accurate and reliable. Continuous updates and user feedback further enhance the precision of our data analytics."
    },
    {
      header:"Can Luxa's analytics integrate with other project management tools?",
      description:"Yes, Luxa is designed to seamlessly integrate with various project management tools, allowing for easy consolidation and analysis of sustainability data alongside other project metrics."
    },
    {
      header:" How does Luxa's data analytics support decision-making in construction projects?",
      description:"By providing real-time insights and predictive analytics, Luxa empowers project managers to make proactive decisions that enhance sustainability. Whether it’s optimizing resource allocation, reducing waste, or improving energy efficiency, our analytics provide the necessary data to guide these decisions."
    },
    {
      header:"Is Luxa suitable for projects of all sizes?",
      description:"Definitely. Luxa’s data analytics platform is scalable and can be tailored to projects of any size, from small residential builds to large commercial developments. It provides valuable sustainability insights regardless of the project scale."
    }


    // Add more accordion items as needed
  ];
  return (
    <div className={styles.servicesDataAnalyticsAndI}>
        <Header
        projectDescription="Unleashing the Power of Sustainability Data in Construction"
        constructionManagementDes="Step into a realm of data-driven sustainability as we bring your projects to life through detailed analytics and impactful insights. Transform complex information into clear visuals that empower you to drive meaningful change."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)" activeLink={""}      />
      <section className={styles.lineframecontact}>
        <BoostProductivityContainer
          productDimensions="/feature01.svg"
          featureDescription="Boost Productivity"
          projectDescription="Delivery your project on time and focus on the subcontractors that matter most with intelligent solutions at Luxa."
          imageDimensions="/feature02.svg"
          projectSubtitle="Continual Oversight"
          subcontractorVisibilityTe="Gain visibility into subcontractors with real-time data and task management."
          imageDimensions2="/feature03-1.svg"
          titleText="Reduce Complexity"
          businessCollaborationDesc="Facilitate collaboration with business stakeholders while streamlining subcontractor issue tracking and mitigation."
          propWidth="293px"
          propOverflow="hidden"
          propAlignSelf="stretch"
          propHeight="81px"
          propWidth1="293px"
          propOverflow1="hidden"
          propWidth2="293px"
          propOverflow2="hidden"
        />
        <div className={styles.frameregisterproject}>
          <div className={styles.frameleedservices}>
            <div className={styles.rectangleleedcert} />
          </div>
          <div className={styles.groupsupportandcareers}>
            <div className={styles.grouppartnerportal}>
              <div className={styles.framellcnotice}>
                <h1 className={styles.transformingRawData}>
                  Transforming Raw Data into Actionable Insights
                </h1>
                <div className={styles.ourProcessTransforms}>
                  Our process transforms complex sustainability metrics and
                  construction data into clear, actionable insights, enabling
                  construction projects to optimize their environmental
                  performance and achieve LEED certification goals more
                  efficiently.
                </div>
              </div>
            </div>
            <div className={styles.wrapperGroup12160252431}>
              <img
                className={styles.group12160252431}
                loading="eager"
                alt=""
                src="/group-1216025243-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.framecalluslink}>
        <div className={styles.groupfaqsaboutdata}>
          <div className={styles.linehowdoesitwork}>
            <div className={styles.linehowdoesitworkChild} />
            <img
              className={styles.group100000249311}
              loading="eager"
              alt=""
              src="/group-1000002493-1-1@2x.png"
            />
          </div>
          <DataAnalyticsHeadingContainer
            featureTitle="Key Features of Our Data Analytics Platform"
            dataAnalyticsFeatureTitle="Real-Time Data Processing"
            dataAnalyticsSubtitle="Predictive Analytics"
            dashboardFeatureTitle="Customizable Dashboards"
            reportingToolsTitle="Advanced Reporting Tools"
            dataAnalyticsImageCaption="Emission Tracking and Analysis"
            dataAnalyticsFeatureTitle2="AI-Driven Insights"
            certificationTrackingTitl="Sustainability Certification Tracking"
            propPadding="0px 0px var(--padding-2xs)"
            propMinWidth="413px"
            propGap="25px"
            propHeight="100px"
            propMinWidth1="208px"
          />
        </div>
      </section>
      <section className={styles.demoRegistrationForm}>
        <div className={styles.lEEDVOtherCheckboxes}>
          <div className={styles.trialCheckbox}>
            <div className={styles.activateProjectFrame}>
              <div className={styles.supportTeam}>
                <h1 className={styles.enhancingProjectEfficiency}>
                  Enhancing Project Efficiency and Decision-Making
                </h1>
                <div className={styles.ourTailoredAnalytics}>
                  Our tailored analytics provide deep insights into your
                  project’s sustainability performance, including precise LEED
                  compliance tracking and comprehensive emissions monitoring,
                  enabling smarter, more informed decision-making that aligns
                  with both environmental goals and budgetary requirements.
                </div>
              </div>
            </div>
            <div className={styles.wrapperGroup12160252422}>
              <img
                className={styles.group12160252422}
                loading="eager"
                alt=""
                src="/group-1216025242-2@2x.png"
              />
            </div>
          </div>
          <div className={styles.servicesSection}>
            <div className={styles.lEEDCertificationManageme}>
              <div className={styles.wrapperGroup33401}>
                <img
                  className={styles.wrapperGroup33401Child}
                  loading="eager"
                  alt=""
                  src="/group-33401@2x.png"
                />
              </div>
              <div className={styles.dataAnalyticsInsights}>
                <div className={styles.environmentalImpactAssessmen}>
                  <h1 className={styles.dataDrivenSustainabilityAnd}>
                    Data-Driven Sustainability and Compliance
                  </h1>
                  <div className={styles.ourPlatformEnsures}>
                    Our platform ensures your project not only meets but exceeds
                    compliance standards, keeping you ahead of the curve in
                    environmental regulations with data-backed decision-making.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentFrame}>
              <div className={styles.customSolutions}>
                <div className={styles.scaleType}>
                  <h1 className={styles.customSolutionsFor}>
                    Custom Solutions for Diverse Project Needs
                  </h1>
                  <div className={styles.noMatterThe}>
                    No matter the scale or type of your construction project –
                    from intimate residential builds to expansive commercial
                    developments – Luxa's data analytics platform flexibly
                    adapts to your specific needs. Our scalable solution grows
                    with your project, ensuring you have the right insights at
                    the right time to make impactful decisions
                  </div>
                </div>
              </div>
              <div className={styles.requestFrame}>
                <div className={styles.requestFrameChild} />
                <img
                  className={styles.group12160252341}
                  loading="eager"
                  alt=""
                  src="/group-1216025234-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DataAnalyticsInsightsContainer dataforcard={"Analytics"} />
      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
        FAQs About Data Analytics in Construction
        </h1>
        <CardContainer  accordionData={accordionData}/>
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

export default ServicesDataAnalyticsAndI;
