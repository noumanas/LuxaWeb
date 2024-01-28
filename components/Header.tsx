import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";
import Mheader from "./mainheader";
type HeaderType = {
  projectDescription?: string;
  constructionManagementDes?: string;

  /** Style props */
  readyToLearnFrameGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
};

const Header: NextPage<HeaderType> = ({
  projectDescription,
  constructionManagementDes,
  readyToLearnFrameGap,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: readyToLearnFrameGap,
    };
  }, [readyToLearnFrameGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section className={styles.contactInfoFrame}>
      <div className={styles.rectangleParent} style={frameDivStyle}>
        <div className={styles.frameChild} />
       <Mheader/>
        <div className={styles.services1}>
          <h1 className={styles.revolutionizingTheConstructi}>
            {projectDescription}
          </h1>
          <div
            className={styles.atTheForefrontOfInnovationWrapper}
            style={frameDiv1Style}
          >
            <div className={styles.atTheForefront}>
              {constructionManagementDes}
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.scroll}>Scroll</div>
            <img className={styles.arrowIcon} alt="" src="/arrow-7.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
