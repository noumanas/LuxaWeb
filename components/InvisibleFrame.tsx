import type { NextPage } from "next";
import styles from "./InvisibleFrame.module.css";
import Mheader from "./mainheader"

const InvisibleFrame: NextPage = () => {
  return (
    <div className={styles.comingsoon}>
    <div className={styles.comingsoonchild}></div>
    <Mheader activeLink={""}/>
    <div className={styles.monthlynewsletter}>
      <img
        className={styles.emptyframeicon}
        loading="eager"
        alt=""
        src="/framesoon1.svg"
      />

      <h1 className={styles.comingsoon1}>COMING SOON</h1>
      {/* <h3 className={styles.inthemeantime}>
        In the meantime, Sign up for our monthly newsletter to stay up to
        date.
      </h3> */}
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
