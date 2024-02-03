import type { NextPage } from "next";
import RegulationsContainer from "./RegulationsContainer";
import styles from "./ComprehensiveProjectManagement.module.css";

const ComprehensiveProjectManagement: NextPage = () => {
  return (
    <div className={styles.emissionManagement}>
      <div className={styles.dataAnalytics}>
        <div className={styles.footerFrame}>
          <div className={styles.readyToLearn}>
            <h1 className={styles.comprehensiveProjectManageme}>
              Comprehensive Project Management Made Simple
            </h1>
            <div className={styles.transformYourProject}>
              Transform your project planning and execution with Luxa's tools,
              designed to seamlessly integrate eco-friendly practices into every
              stage of construction management. Our intuitive tools and
              user-friendly interfaces simplify complex sustainability tasks,
              ensuring that every project is not only efficient but also
              environmentally responsible from start to finish.
            </div>
          </div>
        </div>
        <div className={styles.wrapperGroup33400}>
          <img
            className={styles.wrapperGroup33400Child}
            loading="eager"
            alt=""
            src="/group-334002@2x.png"
          />
        </div>
      </div>
      <div className={styles.ourStory}>
        <div className={styles.privacyPolicies}>
          <div className={styles.group10000024891Parent}>

            <div className={styles.wrapperRegistrationInfo}>
              <img
                className={styles.registrationInfoIcon}
                alt=""
                src="/rectangle-78-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.demoRequest}>
          <h1 className={styles.customizedSolutionsFor}>
            Customized Solutions for Diverse Construction Needs
          </h1>
          <div className={styles.tailoredForEvery}>
            Tailored for Every Project: Whether you're managing a boutique
            residential build or orchestrating a major infrastructure
            development, Luxa's sustainability software adapts effortlessly. Our
            platform scales with your project, ensuring that every aspect of
            sustainability and emissions management is comprehensively
            addressed, from the smallest detail in a home renovation to the
            expansive complexities of large-scale commercial construction.
          </div>
        </div>
      </div>
      <div className={styles.projectRegistration}>
        <div className={styles.luxaSoftwareParent}>
          <div className={styles.luxaSoftware}>
            <div className={styles.certificationHelp}>
              <h1 className={styles.dataDrivenDecisionMaking}>
                Data-Driven Decision Making at Your Fingertips
              </h1>
              <div className={styles.leverageLuxasAdvanced}>
                Leverage Luxa’s advanced data analytics to gain deep insights
                into your construction projects, enabling smarter, eco-friendly
                decision-making. Our platform transforms complex environmental
                data into clear, actionable metrics, empowering construction
                professionals to optimize for both efficiency and
                sustainability.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            {/* <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-77-1@2x.png"
            /> */}
            <div className={styles.wrapperServicesOverview}>
              <img
                className={styles.servicesOverviewIcon}
                loading="eager"
                alt=""
                src="/rectangle-4@2x.png"
              />
            </div>
          </div>
        </div>
        <RegulationsContainer
          featureTitle="Staying Ahead of Industry Regulations and Standards"
          luxaSubtitle={`"Stay Informed, Stay Compliant: With Luxa, navigating the ever-evolving landscape of environmental regulations and standards in the construction industry becomes effortless. Our platform continuously updates you with the latest regulatory changes and compliance guidelines, ensuring your projects not only meet, but exceed, current environmental standards.`}
          propTop="calc(50% - 172px)"
          propPadding="var(--padding-4xs) 0px 0px"
          propHeight="135px"
        />
      </div>
    </div>
  );
};

export default ComprehensiveProjectManagement;
