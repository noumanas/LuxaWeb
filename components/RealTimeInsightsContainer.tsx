import type { NextPage } from "next";
import styles from "./RealTimeInsightsContainer.module.css";

type RealTimeInsightsContainerType = {
  componentTitle?: string;
  sustainabilityAnalyticsTe?: string;
  imageDimensions?: string;
};

const RealTimeInsightsContainer: NextPage<RealTimeInsightsContainerType> = ({
  componentTitle,
  sustainabilityAnalyticsTe,
  imageDimensions,
}) => {
  return (
    <div className={styles.realTimeInsights}>
      <div className={styles.harnessPowerNow}>
        <div className={styles.gettingStartedWithLuxa}>
          <h1 className={styles.realTimeInsightsFor}>{componentTitle}</h1>
          <div className={styles.harnessThePower}>
            {sustainabilityAnalyticsTe}
          </div>
        </div>
        <div className={styles.environmentalImpactAssessmen}>
          <div className={styles.rectangleParent}>
            
            <div className={styles.wrapperPartnerPortal}>
              <img
                className={styles.partnerPortalIcon}
                loading="eager"
                alt=""
                src={imageDimensions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeInsightsContainer;
