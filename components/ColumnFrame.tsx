import type { NextPage } from "next";
import FooterFrame from "./FooterFrame";
import styles from "./ColumnFrame.module.css";

const ColumnFrame: NextPage = () => {
  return (
    <section className={styles.columnFrame}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.group}>
          <div className={styles.frameParent}>
            <div className={styles.textWrapper}>
              <div className={styles.text}>
                <h1 className={styles.gettingStartedWithContainer}>
                  <span>{`Getting started with `}</span>
                  <b className={styles.luxa}>LUXA</b>
                </h1>
                <div className={styles.group1} />
              </div>
            </div>
            <div className={styles.inJustA}>
              In just a few easy steps, you can start crushing your certificate
              documentation.
            </div>
          </div>
        </div>
        <div className={styles.text1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.group12160252361}
              loading="eager"
              alt=""
              src="/group-1216025236-11@2x.png"
            />
          </div>
          <div className={styles.group2}>
            <div className={styles.line}>
              <div className={styles.servicesFrame}>
                <img
                  className={styles.emissionManagementFrame}
                  loading="eager"
                  alt=""
                  src="/rectangle-621@2x.png"
                />
                <div className={styles.dataAnalyticsInsights}>
                  <div className={styles.createYourProject}>
                    Create your project
                  </div>
                  <div className={styles.createYourProject1}>
                    Create your project in Luxa by logging in here.
                  </div>
                </div>
              </div>
              <FooterFrame
                rectangle63="/rectangle-63@2x.png"
                kickOffYourProject="Kick-off your project"
                luxaExpertsWillTrainYourP="Luxa experts will train your project team during a project kick-off call."
                propHeight="54px"
              />
              <FooterFrame
                rectangle63="/rectangle-64@2x.png"
                kickOffYourProject="Achieve your certification goals"
                luxaExpertsWillTrainYourP="Use Luxa to track all of your certification construction related documentation and stay on track of credit progress."
                propHeight="81px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnFrame;
