import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./BoostProductivityContainer.module.css";

type BoostProductivityContainerType = {
  productDimensions?: string;
  featureDescription?: string;
  projectDescription?: string;
  imageDimensions?: string;
  projectSubtitle?: string;
  subcontractorVisibilityTe?: string;
  imageDimensions2?: string;
  titleText?: string;
  businessCollaborationDesc?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propOverflow?: CSSProperties["overflow"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propOverflow1?: CSSProperties["overflow"];
  propWidth2?: CSSProperties["width"];
  propOverflow2?: CSSProperties["overflow"];
};

const BoostProductivityContainer: NextPage<BoostProductivityContainerType> = ({
  productDimensions,
  featureDescription,
  projectDescription,
  imageDimensions,
  projectSubtitle,
  subcontractorVisibilityTe,
  imageDimensions2,
  titleText,
  businessCollaborationDesc,
  propWidth,
  propOverflow,
  propAlignSelf,
  propHeight,
  propWidth1,
  propOverflow1,
  propWidth2,
  propOverflow2,
}) => {
  const framefaqsleedStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const feature01IconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const deliveryYourProjectStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propAlignSelf, propHeight]);

  const framefaqsleed1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const feature02IconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow1,
    };
  }, [propOverflow1]);

  const framefaqsleed2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const feature031IconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow2,
    };
  }, [propOverflow2]);

  return (
    <div className={styles.framelexalogo}>
      <div className={styles.framefaqsleed} style={framefaqsleedStyle}>
        <img
          className={styles.feature01Icon}
          loading="eager"
          alt=""
          src={productDimensions}
          style={feature01IconStyle}
        />
        <div className={styles.boostProductivity}>{featureDescription}</div>
        <div
          className={styles.deliveryYourProject}
          style={deliveryYourProjectStyle}
        >
          {projectDescription}
        </div>
      </div>
      <div className={styles.framefaqsleed1} style={framefaqsleed1Style}>
        <img
          className={styles.feature02Icon}
          loading="eager"
          alt=""
          src={imageDimensions}
          style={feature02IconStyle}
        />
        <div className={styles.continualOversight}>{projectSubtitle}</div>
        <div className={styles.gainVisibilityInto}>
          {subcontractorVisibilityTe}
        </div>
      </div>
      <div className={styles.framefaqsleed2} style={framefaqsleed2Style}>
        <img
          className={styles.feature031Icon}
          loading="eager"
          alt=""
          src={imageDimensions2}
          style={feature031IconStyle}
        />
        <div className={styles.reduceComplexity}>{titleText}</div>
        <div className={styles.facilitateCollaborationWith}>
          {businessCollaborationDesc}
        </div>
      </div>
    </div>
  );
};

export default BoostProductivityContainer;
