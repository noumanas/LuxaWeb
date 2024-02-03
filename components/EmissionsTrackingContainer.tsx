import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./EmissionsTrackingContainer.module.css";

type EmissionsTrackingContainerType = {
  featureDescription?: string;
  emissionsTrackingDescript?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const EmissionsTrackingContainer: NextPage<EmissionsTrackingContainerType> = ({
  featureDescription,
  emissionsTrackingDescript,
  propPadding,
  propPadding1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.advancedEmissionsTrackingFoParent}>
        <h1 className={styles.advancedEmissionsTracking}>
          {featureDescription}
        </h1>
        <div className={styles.luxaOffersAn}>{emissionsTrackingDescript}</div>
      </div>
      <div className={styles.frameCallToAction}>
        <div className={styles.rectangleParent} style={groupDiv1Style}>
          {/* <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-77@2x.png"
          /> */}
          <div className={styles.wrapperFrameEmailOutreach}>
            <img
              className={styles.frameEmailOutreach}
              loading="eager"
              alt=""
              src="/rectangle-78@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmissionsTrackingContainer;
