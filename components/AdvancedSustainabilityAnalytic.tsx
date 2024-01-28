import type { NextPage } from "next";
import SustainabilityAnalyticsContain from "./SustainabilityAnalyticsContain";
import Group1 from "./Group1";
import styles from "./AdvancedSustainabilityAnalytic.module.css";

const AdvancedSustainabilityAnalytic: NextPage = () => {
  return (
    <div className={styles.subHeaderFrame}>
      <SustainabilityAnalyticsContain
        sustainabilityImageUrl="/rectangle-62@2x.png"
        analyticsDescription="Advanced Sustainability Analytics"
        sustainabilityInsightsIma="Harness data-driven sustainability insights to make informed decisions. Our advanced analytics empower you to optimize eco-friendly practices and enhance your environmental impact."
      />
      <Group1
        frame="/rectangle-73@2x.png"
        advancedSustainabilityAna="Effortless Team Collaboration"
        harnessDataDrivenSustaina="Collaborate effortlessly across teams for impactful sustainability projects. Our platform's integrated tools foster synergy, enabling architects, contractors, and stakeholders to work together seamlessly."
      />
      <SustainabilityAnalyticsContain
        sustainabilityImageUrl="/rectangle-74@2x.png"
        analyticsDescription="Extensive Data Integration"
        sustainabilityInsightsIma="Expand your horizons with our diverse range of data connectors. Access over 500+ connectors to bridge the gap between data sources, from on-premises to cloud, enabling comprehensive data-driven decisions."
      />
    </div>
  );
};

export default AdvancedSustainabilityAnalytic;
