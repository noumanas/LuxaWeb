import type { NextPage } from "next";
import styles from "./FormContainer.module.css";

const FormContainer: NextPage = () => {
  return (
    <section className={styles.faqFrame}>
      <div className={styles.howDoesDataContribute}>
        <div className={styles.rectangleShape}>
          <div className={styles.rectangleShapeChild} />
          <div className={styles.gettingStarted}>
            <div className={styles.luxaAnalytics}>
              <div className={styles.seamlesslyIntegrate}>
                <h1 className={styles.gettingStartedWithContainer}>
                  <span>{`Getting started with `}</span>
                  <b className={styles.luxa}>{`LUXA `}</b>
                  <span>Analytics</span>
                </h1>
                <div className={styles.contactUs} />
              </div>
            </div>
            <div
              className={styles.contactUsToday}
            >{`Contact us today to discover how to seamlessly integrate Luxa’s data analytics into your projects. We will discuss how we can tailor our technology to meet your project's specific needs, ensuring efficiency, sustainability, and success every step of the way. `}</div>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.requestADemo}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.requestADemo1}>Request a Demo</div>
              </button>
              <button className={styles.groupRegistration}>
                <div className={styles.groupRegistrationChild} />
                <div className={styles.contactAnExpert}>Contact an expert</div>
              </button>
            </div>
          </div>
          <div className={styles.demoRequestFrameWrapper}>
            <div className={styles.demoRequestFrame}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <img
                  className={styles.group12160252371}
                  loading="eager"
                  alt=""
                  src="/group-1216025237-1@2x.png"
                />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <img
                  className={styles.group12160252361}
                  loading="eager"
                  alt=""
                  src="/group-1216025236-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faqs}>
        <h1 className={styles.faqsAboutData}>
          FAQs About Data Analytics in Construction
        </h1>
        <div className={styles.howDataContributesSustainab}>
          <div className={styles.howDoesDataAnalyticsContriParent}>
            <h3 className={styles.howDoesData}>
              How does data analytics contribute to sustainability in
              construction projects?
            </h3>
            <img className={styles.groupIcon} alt="" src="/group-37.svg" />
          </div>
          <div className={styles.dataAnalyticsPlaysACrucialParent}>
            <div className={styles.dataAnalyticsPlays}>
              Data analytics plays a crucial role in sustainability by enabling
              accurate tracking of resource usage, waste generation, and carbon
              emissions. This information helps in making informed decisions
              that reduce environmental impact, improve energy efficiency, and
              ensure compliance with sustainability standards.
            </div>
            <img
              className={styles.lineIcon}
              loading="eager"
              alt=""
              src="/line-2.svg"
            />
            <div className={styles.howDoIRegisterMyFirstProParent}>
              <h3 className={styles.howDoI}>
                How do I register my first project?
              </h3>
              <img
                className={styles.frameChild1}
                loading="eager"
                alt=""
                src="/group-38.svg"
              />
            </div>
            <img
              className={styles.frameChild2}
              loading="eager"
              alt=""
              src="/line-2.svg"
            />
            <div className={styles.doesLuxaLeedSoftwareWorkFParent}>
              <h3 className={styles.doesLuxaLeed}>
                Does Luxa LEED Software work for LEED v4 and other versions?
              </h3>
              <img
                className={styles.frameChild3}
                loading="eager"
                alt=""
                src="/group-38.svg"
              />
            </div>
            <img className={styles.frameChild4} alt="" src="/line-2.svg" />
            <div className={styles.doYouOfferATrialOfTheSoParent}>
              <h3 className={styles.doYouOffer}>
                Do you offer a trial of the software?
              </h3>
              <img
                className={styles.frameChild5}
                loading="eager"
                alt=""
                src="/group-38.svg"
              />
            </div>
            <img className={styles.frameChild6} alt="" src="/line-2.svg" />
            <div className={styles.imSoldHowDoIActivateMyParent}>
              <h3 className={styles.imSoldHow}>
                I’m sold! How do I activate my project?
              </h3>
              <img
                className={styles.frameChild7}
                loading="eager"
                alt=""
                src="/group-41.svg"
              />
            </div>
            <img className={styles.frameChild8} alt="" src="/line-2.svg" />
            <div className={styles.whatKindOfSupportWillMyTParent}>
              <h3 className={styles.whatKindOf}>
                What kind of support will my team receive from the Luxa team?
              </h3>
              <img
                className={styles.frameChild9}
                loading="eager"
                alt=""
                src="/group-41.svg"
              />
            </div>
            <img className={styles.frameChild10} alt="" src="/line-2.svg" />
            <div className={styles.willIStillHaveAccessToMyParent}>
              <h3 className={styles.willIStill}>
                Will I still have access to my project data after it has been
                completed and sent to LEED online?
              </h3>
              <img
                className={styles.frameChild11}
                loading="eager"
                alt=""
                src="/group-41.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
