import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ComplianceReportingContainer.module.css";

type ComplianceReportingContainerType = {
  featureImageUrl?: string;
  description?: string;
  complianceImageUrl?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
};

const ComplianceReportingContainer: NextPage<
  ComplianceReportingContainerType
> = ({
  featureImageUrl,
  description,
  complianceImageUrl,
  propMinHeight,
  propPadding,
  propHeight,
  propHeight1,
}) => {
  const questionFrameStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const frameWithChildrenStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const streamlinedComplianceAndStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const luxaSimplifiesComplianceStyle: CSSProperties = useMemo(() => {
    return {
      height: '100%',
    };
  }, [propHeight1]);

  return (
    <div className={styles.questionFrame} style={questionFrameStyle}>
      <div className={styles.inputFrameParent}>
        <div className={styles.inputFrame}>
          {/* <img
            className={styles.group10000024941}
            alt=""
            src="/group-1000002494-1@2x.png"
          /> */}
          {/* <div className={styles.linkFrameParent}>
            <img
              className={styles.linkFrameIcon}
              alt=""
              src="/rectangle-77@2x.png"
            />
            <div className={styles.buttonFrameParent}>
              <div className={styles.buttonFrame}>
                <img
                  className={styles.buttonFrameChild}
                  alt=""
                  src="/rectangle-77@2x.png"
                />
                <img
                  className={styles.group100000249411}
                  alt=""
                  src="/group-1000002494-1@2x.png"
                />
              </div>
              <img
                className={styles.group10000024991}
                alt=""
                src="/group-1000002499-1@2x.png"
              />
            </div>
          </div> */}
        </div>
        <img className={styles.group12160252321} alt="" src={featureImageUrl} />
      </div>
      <div className={styles.frameWithChildren} style={frameWithChildrenStyle}>
        <div className={styles.groupFrame}>
          <h1
            className={styles.streamlinedComplianceAnd}
            style={streamlinedComplianceAndStyle}
          >
            {description}
          </h1>
          <div
            className={styles.luxaSimplifiesCompliance}
            style={luxaSimplifiesComplianceStyle}
          >
            {complianceImageUrl}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceReportingContainer;
