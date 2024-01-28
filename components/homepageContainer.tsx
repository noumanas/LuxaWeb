import type { NextPage } from "next";
import styles from "./homepageContainer.module.css";

const homepageContainer: NextPage = () => {
  return (
    <div className={styles.text}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.contactFormParent}>
            <div className={styles.contactForm}>
              <div className={styles.groupContainer} />
              <h1 className={styles.welcomeToLuxaContainer}>
                <span>{` Welcome to     `}</span>
                <b className={styles.luxa}>“LUXA”</b>
                <span>
                  {" "}
                  Revolutionizing Sustainable Design and Construction
                </span>
              </h1>
            </div>
            <div className={styles.text1}>
              <div
                className={styles.discoverAPowerful}
              >{`Discover a powerful software solution that seamlessly integrates data analytics to streamline sustainability management in the AEC Industry. Our platform conducts LEED Certification Management, Scope 1, 2, & 3 Emission Management and Reporting, and offers predictive insights for sustainable projects. Join us in shaping a greener future today.`}</div>
              <div className={styles.line}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img className={styles.groupInput} src='./ArrowRight.png'/>
                  <div className={styles.scheduleACall}>Schedule a call</div>
                </button>
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.moreDetail}>More Detail</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapperDashboardDesignmainD}>
            {/* <img
              className={styles.dashboardDesignmainDashboard}
              loading="eager"
              alt=""
              src="/dashboard-designmain-dashboard-1@2x.png"
            /> */}
        </div>
      </div>
    </div>
  );
};

export default homepageContainer;
