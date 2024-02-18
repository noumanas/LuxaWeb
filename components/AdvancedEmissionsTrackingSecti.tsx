import type { NextPage } from "next";
import EngageStakeholdersContainer from "./EngageStakeholdersContainer";
import EmissionsTrackingContainer from "./EmissionsTrackingContainer";
import ComplianceReportingContainer from "./ComplianceReportingContainer";
import styles from "./AdvancedEmissionsTrackingSecti.module.css";

const AdvancedEmissionsTrackingSecti: NextPage = () => {
  return (
    <section className={styles.frameParent}>
     <EngageStakeholdersContainer
        reportingAndDisclosuresTe="Leverage ESG data to streamline reporting and disclosures; engage with customers, employees, investors, and other stakeholders."
        sustainabilityGoalsText="Achieve Sustainability Goals"
        systemOfRecordText="Bring audit, risk, compliance, internal control, and ESG management into a single system of record."
        esgDataAndEvidenceText="Centralize all ESG data and evidence collection to work efficiently with internal and external auditors."
        propGap="35px"
        propMinHeight="unset"
        propHeight="108px"
      />
      {/* <ComplianceReportingContainer
        featureImageUrl="/Group1216025280aa.png"
        description="Advanced Emissions Tracking for Eco-Friendly Construction"
        complianceImageUrl="Luxa offers an advanced emissions tracking system that enables precise monitoring and management of carbon footprints at construction sites, utilizing real-time data to provide actionable insights for reducing environmental impact. This robust feature supports construction companies in adopting and maintaining environmentally responsible building practices, ensuring compliance with sustainability standards and contributing to a greener future."
        propMinHeight="unset"
        propPadding="var(--padding-8xs) 0px 0px"
        propHeight="px"
        propHeight1="189px"
      /> */}
      <EmissionsTrackingContainer
       featureImageUrl="/Group1216025280aa.png"
        featureDescription="Advanced Emissions Tracking for Eco-Friendly Construction"
        emissionsTrackingDescript="Luxa offers an advanced emissions tracking system that enables precise monitoring and management of carbon footprints at construction sites, utilizing real-time data to provide actionable insights for reducing environmental impact. This robust feature supports construction companies in adopting and maintaining environmentally responsible building practices, ensuring compliance with sustainability standards and contributing to a greener future."
        propPadding1="var(--padding-12xs) var(--padding-2xl) var(--padding-10xs) 0px"
      />
      <ComplianceReportingContainer
        featureImageUrl="/SimplifyingSustainabilityCertification.png"
        description="Simplifying Sustainability Certification"
        complianceImageUrl="Luxa streamlines the complex process of obtaining sustainability certifications like LEED by offering a comprehensive tracking and management system for all relevant project criteria, from energy efficiency to resource utilization. Our platform simplifies the documentation and reporting requirements, ensuring that construction projects not only achieve but also consistently maintain their green building standards with ease and accuracy."
        propMinHeight="unset"
        propPadding="var(--padding-8xs) 0px 0px"
        propHeight="px"
        propHeight1="189px"
      />
    </section>
  );
};

export default AdvancedEmissionsTrackingSecti;
