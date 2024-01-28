import type { NextPage } from "next";
import styles from "./LifecycleCard.module.css";

type LifecycleCardType = {
  imageId?: string;
  projectTitle?: string;
  sustainabilityTechnologyI?: string;
};

const LifecycleCard: NextPage<LifecycleCardType> = ({
  imageId,
  projectTitle,
  sustainabilityTechnologyI,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapperGroup33400Wrapper}>
        <div className={styles.wrapperGroup33400}>
          <img
            className={styles.wrapperGroup33400Child}
            loading="eager"
            alt=""
            src={imageId}
          />
        </div>
      </div>
      <div className={styles.fAQs}>
        <h1 className={styles.optimizingProjectLifecycle}>{projectTitle}</h1>
        <div className={styles.luxasAdvancedSustainability}>
          {sustainabilityTechnologyI}
        </div>
      </div>
    </div>
  );
};

export default LifecycleCard;
