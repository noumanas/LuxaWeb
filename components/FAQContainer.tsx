import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./FAQContainer.module.css";

type FAQContainerType = {
  faqTitle?: string;
  retrofitQuestion?: string;
  retrofitFaqTitle?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
};

const FAQContainer: NextPage<FAQContainerType> = ({
  faqTitle,
  retrofitQuestion,
  retrofitFaqTitle,
  propMinHeight,
}) => {
  const fAQNodes1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <section className={styles.fAQNodes} style={fAQNodes1Style}>
      <h1 className={styles.faqsOnRetrofit}>{faqTitle}</h1>
      <div className={styles.fAQNodes1}>
        <div className={styles.fAQNodes2}>
          <h3 className={styles.howDoesLuxa}>{retrofitQuestion}</h3>
          <img className={styles.fAQNodesChild} alt="" src="/group-37.svg" />
        </div>
        <div className={styles.fAQNodes3}>
          <div className={styles.luxaIsDesigned}>{retrofitFaqTitle}</div>
          <div className={styles.fAQNodes4}>
            <img
              className={styles.fAQNodesItem}
              loading="eager"
              alt=""
              src="/line-21.svg"
            />
            <div className={styles.fAQNodes5}>
              <h3 className={styles.howDoI}>
                How do I register my first project?
              </h3>
              <img
                className={styles.fAQNodesInner}
                loading="eager"
                alt=""
                src="/group-382.svg"
              />
            </div>
            <img
              className={styles.lineIcon}
              loading="eager"
              alt=""
              src="/line-21.svg"
            />
            <div className={styles.fAQNodes6}>
              <h3 className={styles.doesLuxaLeed}>
                Does Luxa LEED Software work for LEED v4 and other versions?
              </h3>
              <img
                className={styles.groupIcon}
                loading="eager"
                alt=""
                src="/group-382.svg"
              />
            </div>
            <img className={styles.fAQNodesChild1} alt="" src="/line-21.svg" />
            <div className={styles.fAQNodes7}>
              <h3 className={styles.doYouOffer}>
                Do you offer a trial of the software?
              </h3>
              <img
                className={styles.fAQNodesChild2}
                loading="eager"
                alt=""
                src="/group-382.svg"
              />
            </div>
            <img className={styles.fAQNodesChild3} alt="" src="/line-21.svg" />
            <div className={styles.fAQNodes8}>
              <h3 className={styles.imSoldHow}>
                I’m sold! How do I activate my project?
              </h3>
              <img
                className={styles.fAQNodesChild4}
                loading="eager"
                alt=""
                src="/group-412.svg"
              />
            </div>
            <img className={styles.fAQNodesChild5} alt="" src="/line-21.svg" />
            <div className={styles.fAQNodes9}>
              <h3 className={styles.whatKindOf}>
                What kind of support will my team receive from the Luxa team?
              </h3>
              <img
                className={styles.fAQNodesChild6}
                loading="eager"
                alt=""
                src="/group-412.svg"
              />
            </div>
            <img className={styles.fAQNodesChild7} alt="" src="/line-21.svg" />
            <div className={styles.fAQNodes10}>
              <h3 className={styles.willIStill}>
                Will I still have access to my project data after it has been
                completed and sent to LEED online?
              </h3>
              <img
                className={styles.fAQNodesChild8}
                loading="eager"
                alt=""
                src="/group-412.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContainer;
