import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./RegulationsContainer.module.css";

type RegulationsContainerType = {
  featureTitle?: string;
  luxaSubtitle?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
};

const RegulationsContainer: NextPage<RegulationsContainerType> = ({
  featureTitle,
  luxaSubtitle,
  propTop,
  propPadding,
  propHeight,
}) => {
  const wrapperScopeManagementStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const dataAnalyticsInsightsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const stayInformedStayStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.contactUs}>
      <div className={styles.group10000024891Parent}>
        {/* <img
          className={styles.group10000024891}
          alt=""
          src="/group-1000002489-1@2x.png"
        /> */}
        <div
          className={styles.wrapperScopeManagement}
          style={wrapperScopeManagementStyle}
        >
          <img
            className={styles.scopeManagementIcon}
            alt=""
            src="/group-1000002489-1@2x.png"
          />
        </div>
        {/* <img
          className={styles.group10000024892}
          loading="eager"
          alt=""
          src="/group-1000002489-2@2x.png"
        /> */}
      </div>
      <div
        className={styles.dataAnalyticsInsights}
        style={dataAnalyticsInsightsStyle}
      >
        <div className={styles.environmentalImpactAssessmen}>
          <h1 className={styles.stayingAheadOf}>{featureTitle}</h1>
          <div
            className={styles.stayInformedStay}
            style={stayInformedStayStyle}
          >
            {luxaSubtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsContainer;
