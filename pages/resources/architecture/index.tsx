import type { NextPage } from "next";
import Header from "../../../components/Header";
import DataDrivenDesignFrame from "../../../components/DataDrivenDesignFrame";
import EnvironmentImpactAssessment from "../../../components/EnvironmentImpactAssessment";
import styles from "./ResourcesIndustryArchitec.module.css";
import Footer from "../../../components/Footer";
import ContactFormContainer from "../../../components/ContactFormContainer";

const ResourcesIndustryArchitec: NextPage = () => {
  return (
    <div className={styles.resourcesIndustryArchitec}>
     
      <Header
        projectDescription="Revolutionizing Architecture with Advanced Technology"
        constructionManagementDes="Luxa introduces a groundbreaking fusion of sustainability-focused technology and efficient project management, tailored specifically for the modern architect. This innovative platform seamlessly bridges the gap between ecological responsibility and the complex project oversight duties of architects, elevating the standard for sustainable design and construction."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={styles.projectManagementFrame}>
        <DataDrivenDesignFrame />
      </section>
      <section className={styles.architectureFrame}>
        <div className={styles.efficientCollabFrame}>
          <div className={styles.integrationFrame}>
            <div className={styles.integrationFrameChild} />
            <div className={styles.initialConceptFrame}>
              <div className={styles.luxaSoftwareFrame}>
                <h1 className={styles.gettingStartedWithContainer}>
                  <span>{`Getting started with `}</span>
                  <b className={styles.luxa}>{`LUXA  `}</b>
                  <span>in Architecture Projects</span>
                </h1>
                <div className={styles.elevateArchitectureFrame} />
              </div>
            </div>
            <div className={styles.discoverHowLuxa}>
              Discover how Luxa can elevate your architectural projects with a
              personalized demonstration tailored to your unique needs. Reach
              out to us today for more information and see firsthand the
              transformative impact Luxa can have on your design and
              sustainability goals.
            </div>
            <div className={styles.footerFrame}>
              <div className={styles.readyToFindOutFrame}>
                <button className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.requestADemo}>Request a Demo</div>
                </button>
                <button className={styles.emailFrame}>
                  <div className={styles.emailFrameChild} />
                  <div className={styles.contactAnExpert}>
                    Contact an expert
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.lEEDCertMgmtFrameWrapper}>
            <div className={styles.lEEDCertMgmtFrame}>
              <div className={styles.scopeEMFrame}>
                <div className={styles.scopeEMFrameChild} />
                <img
                  className={styles.group12160252371}
                  loading="eager"
                  alt=""
                  src="/group-1216025237-1@2x.png"
                />
              </div>
              <div className={styles.environmentalImpactAssessmen}>
                <div className={styles.environmentalImpactAssessmenChild} />
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
        <div className={styles.ourStoryPrivacyPoliciesTer}>
          <h1 className={styles.faqs}>FAQs</h1>
          <div className={styles.projectRegistrationFrame}>
            <div className={styles.requestaDemoFrame}>
              <h3 className={styles.howDoesLuxa}>
                How does Luxa integrate with existing architectural design
                software?
              </h3>
              <img
                className={styles.requestaDemoFrameChild}
                alt=""
                src="/group-37.svg"
              />
            </div>
            <div className={styles.registrationFrameLine}>
              <div className={styles.luxaIsDesigned}>
                Luxa is designed for seamless integration with popular
                architectural design software. It can sync with your existing
                tools to aggregate and analyze data, ensuring a smooth workflow
                without the need to switch between multiple platforms.
              </div>
              <div className={styles.scopeEmissionManagementFram}>
                <img
                  className={styles.scopeEmissionManagementFramChild}
                  loading="eager"
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.reportingFrame}>
                  <h3 className={styles.howDoI}>
                    How do I register my first project?
                  </h3>
                  <img
                    className={styles.reportingFrameChild}
                    loading="eager"
                    alt=""
                    src="/group-382.svg"
                  />
                </div>
                <img
                  className={styles.scopeEmissionManagementFramItem}
                  loading="eager"
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.reportingFrame1}>
                  <h3 className={styles.doesLuxaLeed}>
                    Does Luxa LEED Software work for LEED v4 and other versions?
                  </h3>
                  <img
                    className={styles.reportingFrameItem}
                    loading="eager"
                    alt=""
                    src="/group-382.svg"
                  />
                </div>
                <img
                  className={styles.scopeEmissionManagementFramInner}
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.reportingFrame2}>
                  <h3 className={styles.doYouOffer}>
                    Do you offer a trial of the software?
                  </h3>
                  <img
                    className={styles.reportingFrameInner}
                    loading="eager"
                    alt=""
                    src="/group-382.svg"
                  />
                </div>
                <img className={styles.lineIcon} alt="" src="/line-21.svg" />
                <div className={styles.reportingFrame3}>
                  <h3 className={styles.imSoldHow}>
                    I’m sold! How do I activate my project?
                  </h3>
                  <img
                    className={styles.groupIcon}
                    loading="eager"
                    alt=""
                    src="/group-412.svg"
                  />
                </div>
                <img
                  className={styles.scopeEmissionManagementFramChild1}
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.reportingFrame4}>
                  <h3 className={styles.whatKindOf}>
                    What kind of support will my team receive from the Luxa
                    team?
                  </h3>
                  <img
                    className={styles.reportingFrameChild1}
                    loading="eager"
                    alt=""
                    src="/group-412.svg"
                  />
                </div>
                <img
                  className={styles.scopeEmissionManagementFramChild2}
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.reportingFrame5}>
                  <h3 className={styles.willIStill}>
                    Will I still have access to my project data after it has
                    been completed and sent to LEED online?
                  </h3>
                  <img
                    className={styles.reportingFrameChild2}
                    loading="eager"
                    alt=""
                    src="/group-412.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className={styles.feature01Icon} alt="" />
      <img className={styles.feature02Icon} alt="" />
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="We are here to help you grow your business"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
      <Footer/>
    </div>
  );
};

export default ResourcesIndustryArchitec;
