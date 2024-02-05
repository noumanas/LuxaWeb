import type { NextPage } from "next";
import EngageStakeholdersContainer from "./EngageStakeholdersContainer";
import ComplianceReportingContainer from "./ComplianceReportingContainer";
import DataManagementContainer from "./DataManagementContainer";
import RealTimeInsightsContainer from "./RealTimeInsightsContainer";
import styles from "./InfrastructureConstructionCont.module.css";

const InfrastructureConstructionCont: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <EngageStakeholdersContainer
        reportingAndDisclosuresTe="Leverage Environmental data to streamline reporting and disclosures; engage with customers, employees, investors, and other stakeholders."
        sustainabilityGoalsText="Achieve Sustainability Goals"
        systemOfRecordText="Benchmark your project against 15+ sustainability targets with verified emission and material data."
        esgDataAndEvidenceText="Centralize all Environmental data and evidence collection to work efficiently with internal and external auditors."
        propGap="35px"
        propMinHeight="unset"
        propHeight="108px"
      />
      <div className={styles.submit}>
        <div className={styles.wrapperGroup33400}>
          <img
            className={styles.wrapperGroup33400Child}
            loading="eager"
            alt=""
            src="/L_Project_Tunnel1.png"
          />
        </div>
        <div className={styles.navigatingTheComplexityOfIParent}>
          <h1 className={styles.navigatingTheComplexity}>
            Navigating the Complexity of Infrastructure Construction
          </h1>
          <div className={styles.infrastructureProjectsPresen}>
            Infrastructure projects present a unique set of challenges,
            encompassing large-scale operations, stringent regulatory
            compliance, and significant environmental impacts. Luxa addresses
            these complexities by offering scalable solutions that streamline
            project management, ensure adherence to diverse regulatory
            standards, and prioritize sustainable, environmentally-conscious
            construction practices.
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.callUsCTAParent}>
          <div className={styles.callUsCTA}>
            <div className={styles.servicesFrame}>
              <h1 className={styles.emissionsTrackingAnd}>
                Emissions Tracking and Environmental Responsibility
              </h1>
              <div className={styles.drivingEnvironmentalExcellen}>
                Driving Environmental Excellence: Luxa empowers infrastructure
                projects with advanced tools for meticulous emissions tracking
                and reduction strategies. By aligning cutting-edge technology
                with your sustainability goals, Luxa ensures your project’s
                footprint is minimized, contributing significantly to global
                environmental sustainability efforts.
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.wrapperFAQsFrame}>
              <img
                className={styles.fAQsFrame}
                loading="eager"
                alt=""
                src="/ERectangle-78.png"
              />
            </div>
          </div>
        </div>
      </div>
      <ComplianceReportingContainer
        featureImageUrl="/Group33400.png"
        description="Streamlined Compliance and Reporting"
        complianceImageUrl="Luxa simplifies compliance for infrastructure projects by seamlessly integrating regulatory and environmental standards into its project management workflow. Our platform automates the tracking of necessary compliance metrics and generates detailed reports, ensuring that your project adheres to the latest environmental and safety regulations with ease and accuracy."
        propMinHeight="357px"
        propPadding="0px 0px var(--padding-mid)"
        propHeight="100px"
        propHeight1="162px"
      />
      <div className={styles.callToActionButton}>
        <DataManagementContainer
          featureDescription="Advanced Data Management for Large-Scale Projects"
          sustainabilityDataManagem="Luxa harnesses advanced data management tools to efficiently handle and analyze vast quantities of sustainability data, essential for large-scale infrastructure projects. By offering precise and real-time insights, Luxa empowers project managers to make informed, accurate decisions that drive efficiency and promote sustainable development."
          dataManagementImageUrl="/group-334011@2x.png"
          propFlex="1"
          propPadding1="0px 0px var(--padding-base)"
          propHeight="135px"
        />
      </div>
      <div className={styles.fullName}>
        <div className={styles.group10000024891Parent}>
          {/* <img
            className={styles.group10000024891}
            alt=""
            src="/group-1000002489-1@2x.png"
          /> */}
          <div className={styles.wrapperRectangle78}>
            <img
              className={styles.wrapperRectangle78Child}
              alt=""
              src="/Rectangle-78.png"
            />
          </div>
        </div>
        <div className={styles.enhancingCollaborationWrapper}>
          <div className={styles.enhancingCollaboration}>
            <h1 className={styles.enhancingCollaborationAcross}>
              Enhancing Collaboration Across Multiple Stakeholders
            </h1>
            <div className={styles.luxaStreamlinesProject}>
              Luxa streamlines project coordination by offering a centralized
              platform where contractors, engineers, project managers, and
              government officials can seamlessly share updates, documents, and
              critical data. This fosters transparent communication, ensuring
              that all stakeholders are aligned and informed throughout the
              lifecycle of the infrastructure project, thereby enhancing
              collaboration and decision-making efficiency.
            </div>
          </div>
        </div>
      </div>
      <RealTimeInsightsContainer
        componentTitle="Real-Time Insights for Proactive Decision-Making"
        sustainabilityAnalyticsTe="Harness the Power of Now: Luxa’s real-time sustainability analytics provide instant insights into your infrastructure project's environmental impact, enabling you to make proactive, data-driven decisions. This dynamic reporting feature allows for immediate adjustments and strategic planning, ensuring your project not only meets but exceeds sustainability benchmarks in an ever-changing project landscape."
        imageDimensions="/Group12160252422.png"
      />
    </div>
  );
};

export default InfrastructureConstructionCont;
