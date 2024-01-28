import type { NextPage } from "next";
import styles from "./FullNameLabel.module.css";

const FullNameLabel: NextPage = () => {
  return (
    <div className={styles.fullNameLabel}>
      <div className={styles.subscriptionsAreOn}>
        Subscriptions are on a project by project basis and are priced at
        $300/month for the duration of construction (when billed in full). For
        additional LEED support and monthly check-ins with GCS on your project’s
        progress, the subscription cost is $500/month. Volume and enterprise
        options are also available. See our pricing page for complete details.
      </div>
      <img className={styles.fullNameLabelChild} alt="" src="/line-21.svg" />
      <div className={styles.emailLabel}>
        <h3 className={styles.howDoI}>How do I register my first project?</h3>
        <img
          className={styles.emailLabelChild}
          loading="eager"
          alt=""
          src="/group-385.svg"
        />
      </div>
      <img className={styles.fullNameLabelItem} alt="" src="/line-21.svg" />
      <div className={styles.emailLabel1}>
        <h3 className={styles.doesLuxaLeed}>
          Does Luxa LEED Software work for LEED v4 and other versions?
        </h3>
        <img
          className={styles.emailLabelItem}
          loading="eager"
          alt=""
          src="/group-39.svg"
        />
      </div>
      <img className={styles.fullNameLabelInner} alt="" src="/line-21.svg" />
      <div className={styles.emailLabel2}>
        <h3 className={styles.doYouOffer}>
          Do you offer a trial of the software?
        </h3>
        <img
          className={styles.emailLabelInner}
          loading="eager"
          alt=""
          src="/group-40.svg"
        />
      </div>
      <img className={styles.lineIcon} alt="" src="/line-21.svg" />
      <div className={styles.emailLabel3}>
        <h3 className={styles.imSoldHow}>
          I’m sold! How do I activate my project?
        </h3>
        <img
          className={styles.groupIcon}
          loading="eager"
          alt=""
          src="/group-415.svg"
        />
      </div>
      <img className={styles.fullNameLabelChild1} alt="" src="/line-21.svg" />
      <div className={styles.emailLabel4}>
        <h3 className={styles.whatKindOf}>
          What kind of support will my team receive from the Luxa team?
        </h3>
        <img
          className={styles.emailLabelChild1}
          loading="eager"
          alt=""
          src="/group-42.svg"
        />
      </div>
      <img className={styles.fullNameLabelChild2} alt="" src="/line-21.svg" />
      <div className={styles.emailLabel5}>
        <h3 className={styles.willIStill}>
          Will I still have access to my project data after it has been
          completed and sent to LEED online?
        </h3>
        <img className={styles.emailLabelChild2} alt="" src="/group-43.svg" />
      </div>
    </div>
  );
};

export default FullNameLabel;
