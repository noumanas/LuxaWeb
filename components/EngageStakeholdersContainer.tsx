import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./EngageStakeholdersContainer.module.css";

type EngageStakeholdersContainerType = {
  reportingAndDisclosuresTe?: string;
  sustainabilityGoalsText?: string;
  systemOfRecordText?: string;
  esgDataAndEvidenceText?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMinHeight?: CSSProperties["minHeight"];
  propHeight?: CSSProperties["height"];
};

const EngageStakeholdersContainer: NextPage<
  EngageStakeholdersContainerType
> = ({
  reportingAndDisclosuresTe,
  sustainabilityGoalsText,
  systemOfRecordText,
  esgDataAndEvidenceText,
  propGap,
  propMinHeight,
  propHeight,
}) => {
  const textNodeStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      minHeight: propMinHeight,
    };
  }, [propGap, propMinHeight]);

  const leverageESGDataStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.textNode} style={textNodeStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle}>
          <img
            className={styles.feature011Icon}
            loading="eager"
            alt=""
            src="/feature01-1.svg"
          />
          <div className={styles.engageStakeholders}>Engage Stakeholders</div>
          <div className={styles.leverageEsgData} style={leverageESGDataStyle}>
            {reportingAndDisclosuresTe}
          </div>
        </div>
        <div className={styles.rectangle1}>
          <img
            className={styles.feature031Icon}
            loading="eager"
            alt=""
            src="/feature03-1.svg"
          />
          <div className={styles.extendErmTo}>{sustainabilityGoalsText}</div>
          <div className={styles.bringAuditRisk}>{systemOfRecordText}</div>
        </div>
        <div className={styles.rectangle2}>
          <img
            className={styles.feature031Icon1}
            loading="eager"
            alt=""
            src="/feature03-1-1.svg"
          />
          <div className={styles.ensureAuditReadiness}>
            Ensure Audit-Readiness
          </div>
          <div className={styles.centralizeAllEsg}>
            {esgDataAndEvidenceText}
          </div>
        </div>
      </div>
      <div className={styles.frame} />
    </div>
  );
};

export default EngageStakeholdersContainer;
