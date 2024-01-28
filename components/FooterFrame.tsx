import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./FooterFrame.module.css";

type FooterFrameType = {
  rectangle63?: string;
  kickOffYourProject?: string;
  luxaExpertsWillTrainYourP?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const FooterFrame: NextPage<FooterFrameType> = ({
  rectangle63,
  kickOffYourProject,
  luxaExpertsWillTrainYourP,
  propHeight,
}) => {
  const luxaExpertsWillStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.footerFrame}>
      <img className={styles.footerFrameChild} alt="" src={rectangle63} />
      <div className={styles.kickOffYourProjectParent}>
        <div className={styles.kickOffYourProject}>{kickOffYourProject}</div>
        <div className={styles.luxaExpertsWill} style={luxaExpertsWillStyle}>
          {luxaExpertsWillTrainYourP}
        </div>
      </div>
    </div>
  );
};

export default FooterFrame;
