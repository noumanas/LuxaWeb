import type { NextPage } from "next";
import styles from "./SustainabilityAnalyticsContain.module.css";

type SustainabilityAnalyticsContainType = {
  sustainabilityImageUrl?: string;
  analyticsDescription?: string;
  sustainabilityInsightsIma?: string;
};

const SustainabilityAnalyticsContain: NextPage<
  SustainabilityAnalyticsContainType
> = ({
  sustainabilityImageUrl,
  analyticsDescription,
  sustainabilityInsightsIma,
}) => {
  return (
    <div className={styles.label}>
      <img
        className={styles.buttonFrameIcon}
        loading="eager"
        alt=""
        src={sustainabilityImageUrl}
      />
      <div className={styles.line}>
        <div className={styles.advancedSustainabilityAnalyt}>
          {analyticsDescription}
        </div>
        <div className={styles.harnessDataDrivenSustainabi}>
          {sustainabilityInsightsIma}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityAnalyticsContain;
