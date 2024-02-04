import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";
import Mheader from "./mainheader";
import { motion } from 'framer-motion';

type HeaderType = {
  projectDescription?: string;
  constructionManagementDes?: string;
  activeLink: string;
  /** Style props */
  readyToLearnFrameGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
};

const Header: NextPage<HeaderType> = ({
  projectDescription,
  constructionManagementDes,
  readyToLearnFrameGap,
  propPadding,
  activeLink,
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
       <Mheader activeLink={activeLink}/>
        <div className={styles.services1}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}> 
            <h1 className={styles.revolutionizingTheConstructi}>
              {projectDescription}
             </h1>
          </motion.div>
         
          <div
            className={styles.atTheForefrontOfInnovationWrapper}
            style={frameDiv1Style}
          >
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}> 
            <div className={styles.atTheForefront}>
              {constructionManagementDes}
            </div>
           </motion.div>
            
          </div>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}> 
            <div className={styles.frameDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.scroll}>Scroll</div>
              <img className={styles.arrowIcon} alt="" src="/arrow-7.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
