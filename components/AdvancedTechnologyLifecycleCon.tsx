import type { NextPage } from "next";
import EngageStakeholdersContainer from "./EngageStakeholdersContainer";
import LifecycleCard from "./LifecycleCard";
import DataAnalyticsHeadingContainer from "./DataAnalyticsHeadingContainer";
import styles from "./AdvancedTechnologyLifecycleCon.module.css";

const AdvancedTechnologyLifecycleCon: NextPage = () => {
  return (
    <section className={styles.contactExpert}>
     <EngageStakeholdersContainer
        reportingAndDisclosuresTe="Leverage ESG data to streamline reporting and disclosures; engage with customers, employees, investors, and other stakeholders."
        sustainabilityGoalsText="Achieve Sustainability Goals"
        systemOfRecordText="Bring audit, risk, compliance, internal control, and ESG management into a single system of record."
        esgDataAndEvidenceText="Centralize all ESG data and evidence collection to work efficiently with internal and external auditors."
        propGap="35px"
        propMinHeight="unset"
        propHeight="108px"
      />
      <LifecycleCard
        imageId="/group-334001@2x.png"
        projectTitle="Optimizing Project Lifecycle with Advanced Technology"
        sustainabilityTechnologyI="Luxa's advanced sustainability technology integrates seamlessly into every phase of engineering projects, from initial design through to execution and maintenance. By providing data-driven insights for eco-friendly material selection, energy-efficient design optimization, and ongoing environmental impact monitoring, Luxa ensures that sustainability is a cornerstone throughout the project lifecycle, enhancing both operational efficiency and environmental compliance."
      />
      <div className={styles.rectangle}>
      <DataAnalyticsHeadingContainer
          featureTitle="Key Features Benefiting Engineers"
          dataAnalyticsFeatureTitle="Advanced Emissions Tracking"
          dataAnalyticsSubtitle="Energy Efficiency Analysis"
          dashboardFeatureTitle="Compliance Tracking for Green Certifications"
          reportingToolsTitle="Materials and Systems Database"
          dataAnalyticsImageCaption="Water Use and Conservation Planning"
          dataAnalyticsFeatureTitle2="Waste Management Optimization "
          certificationTrackingTitl="Sustainable Site Impact Assessment"
          propPadding="var(--padding-26xl) 0px 0px"
          propMinWidth="413px"
          propGap="9px"
          propHeight="unset"
          propMinWidth1="265px"
        />
        <div className={styles.groupWrapper}>
          <div className={styles.group}>
            <div className={styles.engineeringProjectFrameParent}>
              <div className={styles.rectangleParent}>
                
                <img
                  className={styles.group10000024991}
                  alt=""
                  src="/Group10000024991.png"
                />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default AdvancedTechnologyLifecycleCon;
