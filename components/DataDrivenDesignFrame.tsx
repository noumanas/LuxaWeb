import type { NextPage } from "next";
import EngageStakeholdersContainer from "./EngageStakeholdersContainer";
import LifecycleCard from "./LifecycleCard";
import ComplianceReportingContainer from "./ComplianceReportingContainer";
import RegulationsContainer from "./RegulationsContainer";
import EmissionsTrackingContainer from "./EmissionsTrackingContainer";
import RealTimeInsightsContainer from "./RealTimeInsightsContainer";
import styles from "./DataDrivenDesignFrame.module.css";

const DataDrivenDesignFrame: NextPage = () => {
  return (
    <div className={styles.efficientDesignFrame}>
      <EngageStakeholdersContainer
        reportingAndDisclosuresTe="Leverage Environmental data to streamline reporting and disclosures; engage with customers, employees, investors, and other stakeholders."
        sustainabilityGoalsText="Achieve Sustainability Goals"
        systemOfRecordText="Benchmark your project against 15+ sustainability targets with verified emission and material data."
        esgDataAndEvidenceText="Centralize all Environmental data and evidence collection to work efficiently with internal and external auditors."
        propGap="35px"
        propMinHeight="unset"
        propHeight="108px"
      />
      <div className={styles.lEEDCertification}>
        <LifecycleCard
          imageId="/group-33400@2x.png"
          projectTitle="Streamlining Design through Data-Driven Insights"
          sustainabilityTechnologyI="Luxa’s advanced data analytics empower architects by providing deep insights into material efficiency, energy usage, and environmental impact, enabling the management of designs that are not only aesthetically striking but also ecologically responsible. By harnessing these insights, architects can make informed decisions that balance the art of design with the science of sustainability, leading to buildings that are both visually appealing and environmentally sustainable."
        />
        <div className={styles.servicesListFrame}>
          <div className={styles.partnershipFrame}>
            <div className={styles.luxaTechnologiesFooter}>
              <h1 className={styles.sustainableDesignMade}>
                Sustainable Design Made Easier
              </h1>
              <div className={styles.luxaEmpowersArchitects}>
                Luxa empowers architects with advanced tools to effortlessly
                manage sustainable design elements, seamlessly integrating
                eco-friendly practices from the blueprint stage to final
                construction. Our platform simplifies the journey towards
                achieving green building certifications, offering intuitive
                guidance and compliance tracking to ensure your designs not only
                look good but are good for the planet.
              </div>
            </div>
          </div>
          <div className={styles.wrapperRectangle78Parent}>
            <div className={styles.wrapperRectangle78}>
              {/* <img
                className={styles.wrapperRectangle78Child}
                loading="eager"
                alt=""
                src="/rectangle-781@2x.png"
              /> */}
            </div>
            <img
              className={styles.group10000024961}
              alt=""
              src="/group-1000002496-1@2x.png"
            />
          </div>
        </div>
      </div>
      <ComplianceReportingContainer
        featureImageUrl="/group-1216025232-1@2x.png"
        description="Adapting to Evolving Architectural Needs"
        complianceImageUrl="At Luxa, we stay ahead of the curve by continuously integrating the latest sustainability trends and technological advancements into our platform, ensuring that architects have the most up-to-date tools at their fingertips. Our commitment to innovation means that as the architecture industry evolves, particularly in its approach to sustainable design, Luxa evolves too, adapting to new standards, materials, and design philosophies."
        propMinHeight="357px"
        propPadding="0px 0px var(--padding-mid)"
        propHeight="100px"
        propHeight1="162px"
      />
      <div className={styles.architectureIntegrationParent}>
        <RegulationsContainer
          featureTitle="Comprehensive Emissions Tracking for Green Architecture"
          luxaSubtitle="Empower Your Architectural Designs with Real-Time Environmental Impact Insights. Luxa's advanced emissions tracking tool enables architects to measure and manage the environmental footprint of their projects, ensuring every design decision contributes to eco-friendly building outcomes."
          propTop="calc(50% - 172.4px)"
          propPadding="0px 0px var(--padding-lg)"
          propHeight="108px"
        />
        <EmissionsTrackingContainer
          featureImageUrl="/ERectangle-78.png"
          featureDescription="Efficient Collaboration and Project Management"
          emissionsTrackingDescript="Luxa streamlines project management by providing a centralized platform where architects, contractors, and other stakeholders can collaborate seamlessly. It enhances communication and coordination with shared dashboards, real-time updates, and integrated tools for scheduling, feedback, and document management, ensuring that every team member is on the same page, thus reducing misunderstandings and delays in the project lifecycle."
          propPadding="0px var(--padding-base) 0px var(--padding-mini)"
          propPadding1="0px var(--padding-2xl) var(--padding-9xs) 0px"
        />
      </div>
      <RealTimeInsightsContainer
        componentTitle="Integrating Luxa with Architectural Workflows"
        sustainabilityAnalyticsTe="From initial concept to the final brick, Luxa seamlessly integrates into an architect's workflow, enhancing every phase with smart, data-driven tools. During planning, our platform aids in sustainable material selection and compliance forecasting, while in the construction phase, it offers real-time monitoring and adjustments, ensuring that design vision and sustainability goals are perfectly aligned and achieved."
        imageDimensions="/rectangle-41@2x.png"
      />
    </div>
  );
};

export default DataDrivenDesignFrame;
