import type { NextPage } from "next";
import FrameComponent1 from "../../components/FrameComponent1";
import FrameComponent from "../../components/FrameComponent";
import Footer from "../../components/Footer";
import styles from "./ServicesMain.module.css";
import ContactFormContainer from "../../components/ContactFormContainer";
import { useEffect, useState } from "react";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";
import Header from "../../components/Header";

const ServicesMain: NextPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after the component mounts
    setLoaded(true);
  }, []);
  return (
    <div  className={`${styles.servicesMain} ${loaded && styles.loaded}`}>
     <Header
        projectDescription="Your Sustainability Command Center LUXA Dashboard"
        constructionManagementDes="Gain unparalleled insights into your sustainable projects with our interactive dashboard. Monitor ongoing projects, track certification progress, and dive into key data analytics. Empower your team to make informed decisions, leading to more sustainable and environmentally conscious outcomes."
        readyToLearnFrameGap="174px"
        propPadding="0px 0px var(--padding-8xs)"
      />
      <section className={`${styles.servicesMainInner} ${loaded && styles.loaded}` }>
        <FrameComponent1 />
      </section>
      <section className={styles.emailLinkText}>
        <div className={styles.callUsText}>
          <div className={styles.callUsTextChild} />
          <h1 className={styles.referringOrFind}>
            Referring or Find a Consultant.
          </h1>
          <div className={styles.dontWantTo}>
            Don’t want to mess with certificate documents at all? We don’t blame
            you! Contact Us today to learn more about how Luxa can put your
            certification goal on autopilot.
          </div>
        </div>
      </section>
      <section className={styles.emissionManagementTitle}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.leedCertificationManagementParent}>
              <h1 className={styles.leedCertificationManagementContainer}>
                <p
                  className={styles.leedCertificationManagement}
                >{`LEED Certification Management `}</p>
                <p className={styles.software}>Software</p>
              </h1>
              <div className={styles.stayOnTrack}>
                Stay on track with your project's certification goals. Monitor
                progress towards LEED at a glance. Our visual representation
                empowers you to track completed criteria, identify remaining
                requirements, and understand the steps needed to achieve
                certification.
              </div>
              <div className={styles.learnMoreParent}>
                <div className={styles.learnMore}>Learn More</div>
                <img
                  className={styles.frameChild}
                  loading="eager"
                  alt=""
                  src="/arrow-5.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.contactAnExpertFrame}>
            <div className={styles.wrapperGroup10000024972}>
              <img
                className={styles.group10000024972}
                loading="eager"
                alt=""
                src="/group-1000002497-2@2x.png"
              />
            </div>
            <div className={styles.wrapperGroup12160252332}>
              <img
                className={styles.group12160252332}
                alt=""
                src="/group-1216025233-2@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.servicesMainChild}>
        <div className={styles.frameGroup}>
          <div className={styles.readyToLearnFrameParent}>
            <div className={styles.readyToLearnFrame}>
              <div className={styles.readyToLearnFrameChild} />
              <img
                className={styles.group100000249312}
                loading="eager"
                alt=""
                src="/group-1000002493-1-1@2x.png"
              />
            </div>
            <div className={styles.servicesSection}>
              <div className={styles.leedCertificationManagement1}>
                <h1 className={styles.dataAnalyticsIn}>
                  Data Analytics in Real-Time
                </h1>
                <div className={styles.experienceTheFuture}>
                  Experience the future of sustainable design with real-time
                  data analytics. Visualize energy consumption patterns,
                  emissions reduction metrics, and other key indicators.
                  Transform complex data into actionable insights through
                  intuitive charts and graphs.
                </div>
                <div className={styles.environmentalImpactAssessmen}>
                  <div className={styles.learnMore1}>Learn More</div>
                  <img
                    className={styles.environmentalImpactAssessmenChild}
                    loading="eager"
                    alt=""
                    src="/arrow-5.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.lineWrapper}>
              <div className={styles.line}>
                <h1 className={styles.scope12Container}>
                  <p
                    className={styles.scope12}
                  >{`Scope 1, 2, & 3 Emission Management`}</p>
                  <p className={styles.andReportingSoftware}>
                    and Reporting Software
                  </p>
                </h1>
                <div className={styles.text}>
                  <div className={styles.takeControlOf}>
                    Take control of your project’s environmental impact with
                    Luxa’s advanced emissions management software. Seamlessly
                    track, analyze, and report Scope 1, 2, and 3 emissions,
                    ensuring compliance and sustainability in every aspect of
                    your construction project.
                  </div>
                  <div className={styles.group1}>
                    <div className={styles.learnMore2}>Learn More</div>
                    <img
                      className={styles.groupChild}
                      loading="eager"
                      alt=""
                      src="/arrow-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapperGroup12160252431}>
              <img
                className={styles.group12160252431}
                loading="eager"
                alt=""
                src="/group-1216025243-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      {/* <Group /> */}
      <DataAnalyticsInsightsContainer dataforcard={"Testing.."} />
      
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="We are here to help you grow your business"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />

      <Footer />
    </div>
  );
};

export default ServicesMain;
