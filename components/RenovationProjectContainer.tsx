import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./RenovationProjectContainer.module.css";

type RenovationProjectContainerType = {
  projectDescription?: string;
  renovationProjectDescript?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propPadding2?: CSSProperties["padding"];
  propFlex1?: CSSProperties["flex"];
  propWidth4?: CSSProperties["width"];
  propMarginTop?: CSSProperties["marginTop"];
};

const RenovationProjectContainer: NextPage<RenovationProjectContainerType> = ({
  projectDescription,
  renovationProjectDescript,
  propMinHeight,
  propPadding,
  propHeight,
  propWidth,
  propPadding1,
  propFlex,
  propWidth1,
  propMarginLeft,
  propWidth2,
  propWidth3,
  propPadding2,
  propFlex1,
  propWidth4,
  propMarginTop,
}) => {
  const interactionNodesStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const interactionNodes1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const setupGroupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  const informationalTextStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  const fAQNodesStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const readyToElevateStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const buttonGroupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      padding: propPadding2,
    };
  }, [propWidth3, propPadding2]);

  const formNodeStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth4,
    };
  }, [propFlex1, propWidth4]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <section className={styles.interactionNodes} style={interactionNodesStyle}>
      <div className={styles.interactionNodes1} style={interactionNodes1Style}>
        <div
          className={styles.interactionNodesChild}
          style={rectangleDivStyle}
        />
        <div className={styles.setupGroup} style={setupGroupStyle}>
          <div
            className={styles.informationalText}
            style={informationalTextStyle}
          >
            <h1 className={styles.gettingStartedWithContainer}>
              <span>{`Getting started with `}</span>
              <b className={styles.luxa}>{`LUXA  `}</b>
              <span>{projectDescription}</span>
            </h1>
            <div className={styles.fAQNodes} style={fAQNodesStyle} />
          </div>
        </div>
        <div className={styles.readyToElevate} style={readyToElevateStyle}>
          {renovationProjectDescript}
        </div>
        <div className={styles.buttonGroup} style={buttonGroupStyle}>
          <div className={styles.formNode} style={formNodeStyle}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.requestADemo}>Request a Demo</div>
            </button>
            <button className={styles.inputFrame}>
              <div className={styles.inputFrameChild} />
              <div className={styles.contactAnExpert}>Contact an expert</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.fAQNodesWrapper} style={groupDivStyle}>
        <div className={styles.fAQNodes1}>
          <div className={styles.fAQNodes2}>
            <div className={styles.fAQNodesChild} />
            <img
              className={styles.group12160252371}
              loading="eager"
              alt=""
              src="/group-1216025237-1@2x.png"
            />
          </div>
          <div className={styles.fAQNodes3}>
            <div className={styles.fAQNodesItem} />
            <img
              className={styles.group12160252361}
              loading="eager"
              alt=""
              src="/group-1216025236-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationProjectContainer;
