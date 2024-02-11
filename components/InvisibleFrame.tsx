import type { NextPage } from "next";
import styles from "./InvisibleFrame.module.css";
import Mheader from "./mainheader"
import MobileMenuResponsive from "./MobileMenuResponsive";
import { useState } from "react";

const InvisibleFrame: NextPage = () => {
const [isMobile, setIsMobile] = useState(false);

  return (
    <div className={styles.comingsoon}>
    <div className={styles.comingsoonchild}></div>
    {isMobile ? (
          <MobileMenuResponsive testinfmobileMenu={true} setIsMobile={setIsMobile} />
        ):( <Mheader activeLink={"Pricing"} setIsMobile={setIsMobile} />)}
    <div className={styles.monthlynewsletter}>
      {/* <img
        className={styles.emptyframeicon}
        loading="eager"
        alt=""
        src="/framesoon1.svg"
      /> */}

      <h1 className={styles.comingsoon1}>COMING SOON</h1>
      <p className={styles.comingsoonparegraph}>
        In the meantime, Sign up for our monthly newsletter to stay up to
        date.
      </p>
      <div className={styles.emailaddressgroup}>
        <input
          className={styles.emailaddressgroupchild}
          placeholder="Enter Email Address"
          type="text"
        />

        <button className={styles.rectanglecontainer}>
          <div className={styles.frameinner}></div>
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
    </div>
    </div>

  );
};

export default InvisibleFrame;
