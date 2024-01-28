import type { NextPage } from "next";
import styles from "./Group1.module.css";

type Group1Type = {
  frame?: string;
  advancedSustainabilityAna?: string;
  harnessDataDrivenSustaina?: string;
};

const Group1: NextPage<Group1Type> = ({
  frame,
  advancedSustainabilityAna,
  harnessDataDrivenSustaina,
}) => {
  return (
    <div className={styles.group}>
      <div className={styles.rectangle}>
        <img className={styles.frameIcon} loading="eager" alt="" src={frame} />
        <div className={styles.advancedSustainabilityAnalyt}>
          {advancedSustainabilityAna}
        </div>
      </div>
      <div className={styles.harnessDataDrivenSustainabi}>
        {harnessDataDrivenSustaina}
      </div>
    </div>
  );
};

export default Group1;
