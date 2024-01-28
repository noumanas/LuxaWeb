import type { NextPage } from "next";
import styles from "./FormContainer1.module.css";

const FormContainer1: NextPage = () => {
  return (
    <div className={styles.dataAnalyticsFrameParent}>
      <div className={styles.dataAnalyticsFrame}>
        <div className={styles.scope1EmissionsContainer}>
          <p className={styles.scope1Emissions}>
            Scope 1 emissions are direct emissions from owned or controlled
            sources, Scope 2 covers indirect emissions from the generation of
            purchased electricity, and Scope 3 includes all other indirect
            emissions in a company's value chain. Understanding and managing
            these emissions is crucial for reducing your environmental impact
            and complying with regulatory standards.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/line-21.svg"
        />
        <div className={styles.contactUsFooterFrameParent}>
          <div className={styles.contactUsFooterFrame}>
            <h3 className={styles.howDoI}>
              How do I register my first project?
            </h3>
            <img
              className={styles.contactUsFooterFrameChild}
              loading="eager"
              alt=""
              src="/group-381.svg"
            />
          </div>
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/line-21.svg"
          />
          <div className={styles.fullNameFieldGroupParent}>
            <div className={styles.fullNameFieldGroup}>
              <h3 className={styles.doesLuxaLeed}>
                Does Luxa LEED Software work for LEED v4 and other versions?
              </h3>
              <img
                className={styles.fullNameFieldGroupChild}
                loading="eager"
                alt=""
                src="/group-381.svg"
              />
            </div>
            <img
              className={styles.frameInner}
              loading="eager"
              alt=""
              src="/line-21.svg"
            />
            <div className={styles.fullNameFieldGroup1}>
              <h3 className={styles.doYouOffer}>
                Do you offer a trial of the software?
              </h3>
              <img
                className={styles.fullNameFieldGroupItem}
                loading="eager"
                alt=""
                src="/group-381.svg"
              />
            </div>
            <img
              className={styles.lineIcon}
              loading="eager"
              alt=""
              src="/line-21.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.emailFieldGroup}>
        <div className={styles.imSoldHowDoIActivateMyParent}>
          <h3 className={styles.imSoldHow}>
            I’m sold! How do I activate my project?
          </h3>
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group-411.svg"
          />
        </div>
        <img
          className={styles.emailFieldGroupChild}
          alt=""
          src="/line-21.svg"
        />
        <div className={styles.whatKindOfSupportWillMyTParent}>
          <h3 className={styles.whatKindOf}>
            What kind of support will my team receive from the Luxa team?
          </h3>
          <img
            className={styles.frameChild1}
            loading="eager"
            alt=""
            src="/group-411.svg"
          />
        </div>
        <img className={styles.emailFieldGroupItem} alt="" src="/line-21.svg" />
        <div className={styles.willIStillHaveAccessToMyParent}>
          <h3 className={styles.willIStill}>
            Will I still have access to my project data after it has been
            completed and sent to LEED online?
          </h3>
          <img
            className={styles.frameChild2}
            loading="eager"
            alt=""
            src="/group-411.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
