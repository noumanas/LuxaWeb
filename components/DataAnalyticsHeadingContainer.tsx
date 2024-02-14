import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./DataAnalyticsHeadingContainer.module.css";

type DataAnalyticsHeadingContainerType = {
  featureTitle?: string;
  dataAnalyticsFeatureTitle?: string;
  dataAnalyticsSubtitle?: string;
  dashboardFeatureTitle?: string;
  reportingToolsTitle?: string;
  dataAnalyticsImageCaption?: string;
  dataAnalyticsFeatureTitle2?: string;
  certificationTrackingTitl?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DataAnalyticsHeadingContainer: NextPage<
  DataAnalyticsHeadingContainerType
> = ({
  featureTitle,
  dataAnalyticsFeatureTitle,
  dataAnalyticsSubtitle,
  dashboardFeatureTitle,
  reportingToolsTitle,
  dataAnalyticsImageCaption,
  dataAnalyticsFeatureTitle2,
  certificationTrackingTitl,
  propPadding,
  propMinWidth,
  propGap,
  propHeight,
  propMinWidth1,
}) => {
  const dataAnalyticsHeadingStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: "50%",
    };
  }, [propPadding, propMinWidth]);

  const projectRegistrationStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const keyFeaturesOfStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const realTimeDataProcessingContainerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={styles.dataAnalyticsHeading}
      style={dataAnalyticsHeadingStyle}
    >
      <div
        className={styles.projectRegistration}
        style={projectRegistrationStyle}
      >
        <h1 className={styles.keyFeaturesOf} style={keyFeaturesOfStyle}>
          {featureTitle}
        </h1>
        <div className={styles.fAQs}>
          <div className={styles.sustainabilityInfo}>
            <img
              className={styles.gcsLogoSymbol}
              loading="eager"
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
            <img
              className={styles.gcsLogoSymbol1}
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
            <img
              className={styles.gcsLogoSymbol2}
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
            <img
              className={styles.gcsLogoSymbol3}
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
            <img
              className={styles.gcsLogoSymbol4}
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
            <img
              className={styles.gcsLogoSymbol5}
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
            <img
              className={styles.gcsLogoSymbol6}
              alt=""
              src="/gcs-logo-symbol@2x.png"
            />
          </div>
          <div
            className={styles.realTimeDataProcessingContainer}
            style={realTimeDataProcessingContainerStyle}
          >
            <p className={styles.realTimeDataProcessing}>
              {dataAnalyticsFeatureTitle}
            </p>
            <p className={styles.predictiveAnalytics}>
              {dataAnalyticsSubtitle}
            </p>
            <p className={styles.customizableDashboards}>
              {dashboardFeatureTitle}
            </p>
            <p className={styles.advancedReportingTools}>
              {reportingToolsTitle}
            </p>
            <p className={styles.emissionTrackingAnd}>
              {dataAnalyticsImageCaption}
            </p>
            <p className={styles.aiDrivenInsights}>
              {dataAnalyticsFeatureTitle2}
            </p>
            <p className={styles.sustainabilityCertificationT}>
              {certificationTrackingTitl}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsHeadingContainer;
