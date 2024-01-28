import type { NextPage } from "next";
import FrameComponent2 from "../../components/FrameComponent2";
import BoostProductivityContainer from "../../components/BoostProductivityContainer";
import DataAnalyticsHeadingContainer from "../../components/DataAnalyticsHeadingContainer";
import CardContainer from "../../components/CardContainer";
import ContactFormContainer from "../../components/ContactFormContainer";
import styles from "./ServicesLEEDCertificationM.module.css";
import Footer from "../../components/Footer";
import Accordions from "../../components/Accordion";
import { useEffect, useState } from "react";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";
const ServicesLEEDCertificationM: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    }, []);
  return (
    <div className={`${styles.servicesLeedCertificationM} ${isLoaded ? styles.loaded : ''}`} >
      <div className={styles.learnMoreParent}>
        <div className={styles.learnMore}>Learn More</div>
        <img className={styles.groupChild} alt="" />
      </div>
      <div className={styles.learnMoreGroup}>
        <div className={styles.learnMore1}>Learn More</div>
        <img className={styles.groupItem} alt="" />
      </div>
      <div className={styles.learnMoreContainer}>
        <div className={styles.learnMore2}>Learn More</div>
        <img className={styles.groupInner} alt="" />
      </div>
      <FrameComponent2
        stroke3="/stroke-3.svg"
        stroke2="/stroke-2.svg"
        yourSustainabilityCommand="Streamline Your Path to LEED Certification with Luxa"
        gainUnparalleledInsightsI="Luxa's innovative software transforms the LEED certification journey, offering an integrated, user-friendly platform that simplifies every step from compliance tracking to documentation submission, making sustainable certification more accessible and manageable than ever before."
        frameSectionPadding="0px 0px 102px"
        frameDivGap="146px"
        servicesColor="6px solid #d36135"
        servicesFontWeight="unset"
        frameDivGap1="13px"
        resourcesColor="#454545"
        resourcesFontWeight="unset"
        advancedAnalyticsGap="90px"
        footerGap="30px"
        yourSustainabilityCommandHeight="120px"
        gainUnparalleledInsightsHeight="54px"
        linkedInIconWidth="39px"
        linkedInIconHeight="90px"
        rectangleDivWidth="39px"
        rectangleDivHeight="90px"
      />
      <div className={styles.groupDiv}>
        <div className={styles.learnMore3}>Learn More</div>
        <img className={styles.arrowIcon} alt="" />
      </div>
      <div className={styles.learnMoreParent1}>
        <div className={styles.learnMore4}>Learn More</div>
        <img className={styles.groupChild1} alt="" />
      </div>
      <section className={styles.rectangle}>
        <BoostProductivityContainer
          productDimensions="/rectangle-621@2x.png"
          featureDescription="Create your project"
          projectDescription="Create your project in Luxa by logging in here."
          imageDimensions="/rectangle-63@2x.png"
          projectSubtitle="Kick-off your project"
          subcontractorVisibilityTe="Luxa experts will train your project team during a project kick-off call."
          imageDimensions2="/rectangle-64@2x.png"
          titleText="Achieve your certification goals"
          businessCollaborationDesc="Use Luxa to track all of your certification construction related documentation and stay on track of credit progress."
          propWidth="unset"
          propOverflow="unset"
          propAlignSelf="unset"
          propHeight="unset"
          propWidth1="407px"
          propOverflow1="unset"
          propWidth2="407px"
          propOverflow2="unset"
        />
        <div className={styles.groupParent}>
          <div className={styles.group} />
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              <DataAnalyticsHeadingContainer
                featureTitle="Key Features of Our LEED Management Software"
                dataAnalyticsFeatureTitle="Effortless LEED Compliance"
                dataAnalyticsSubtitle="Comprehensive Documentation Management"
                dashboardFeatureTitle="Real-Time Progress Tracking"
                reportingToolsTitle="Automated Credit Documentation and Collaboration"
                dataAnalyticsImageCaption="Up-to-Date LEED Standards and Updates"
                dataAnalyticsFeatureTitle2="Expert Guidance and Support"
                certificationTrackingTitl="User-Friendly Interface"
                propPadding="var(--padding-7xs) 0px 0px"
                propMinWidth="420px"
                propGap="20px"
                propHeight="100px"
                propMinWidth1="309px"
              />
              <div className={styles.fAQGroup}>
                <div className={styles.fAQGroupChild} />
                <img
                  className={styles.group12160252401}
                  loading="eager"
                  alt=""
                  src="/group-1216025240-11@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.gettingStarted}>
        <div className={styles.requestDemoFrame}>
          <img
            className={styles.leedCertificationLevels1Icon}
            loading="eager"
            alt=""
            src="/leedcertificationlevels-1@2x.png"
          />
        </div>
        <div className={styles.understandingLeedCertificatiParent}>
          <h1 className={styles.understandingLeedCertificati}>
            Understanding LEED Certification What You Need to Know
          </h1>
          <div className={styles.leedLeadershipIn}>
            LEED (Leadership in Energy and Environmental Design) certification
            is a globally recognized symbol of sustainability achievement and
            leadership in the construction industry, emphasizing eco-friendly
            building practices, energy efficiency, and resource conservation. To
            achieve this prestigious certification, projects must meet specific
            criteria across various sustainability categories, including site
            development, water savings, energy efficiency, material selection,
            and indoor environmental quality
          </div>
        </div>
      </section>
      <section className={styles.partnersGroup}>
        <div className={styles.contactUsForm}>
          <div className={styles.projectRegistrationLine}>
            <div className={styles.howLuxaOptimizesLEED}>
              <h1 className={styles.integratingLeedGoals}>
                Integrating LEED Goals into Project Management
              </h1>
              <div className={styles.luxaSeamlesslyWeaves}>
                Luxa seamlessly weaves LEED certification goals into every stage
                of your construction project, ensuring that sustainability isn't
                just an add-on, but a fundamental aspect of your project
                management strategy. From initial design to final construction,
                Luxa aligns every decision and action with LEED criteria,
                fostering a holistic approach to building sustainably and
                efficiently.
              </div>
            </div>
          </div>
          <div className={styles.callusFrame}>
            <div className={styles.wrapperGroup10000024971}>
              <img
                className={styles.group10000024971}
                loading="eager"
                alt=""
                src="/group-1000002497-1@2x.png"
              />
            </div>
            <div className={styles.wrapperGroup12160252331}>
              <img
                className={styles.group12160252331}
                alt=""
                src="/group-1216025233-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.environmentalImpactAssessmen}>
        <div className={styles.servicesFrame}>
          <div className={styles.luxaLEEDSteps}>
            <div className={styles.luxaLEEDStepsChild} />
            <img
              className={styles.group12160252351}
              loading="eager"
              alt=""
              src="/group-1216025235-1@2x.png"
            />
          </div>
          <div className={styles.projectInfoFrame}>
            <div className={styles.howLuxaOptimizesLEED1}>
              <h1 className={styles.howLuxaOptimizes}>
                How Luxa Optimizes LEED Documentation and Submission
              </h1>
              <div className={styles.luxasLeedCertification}>
                Luxa’s LEED Certification Management Software revolutionizes the
                documentation process by automatically compiling and organizing
                necessary project data, leveraging smart templates and
                checklists to ensure accuracy and completeness.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.customizedSolutionsFrame}>
          <div className={styles.gettingStartedRequestDemo}>
            <div className={styles.rectangleGroupFrame}>
              <h1 className={styles.customizedSolutionsFor}>
                Customized Solutions for Diverse Project Needs
              </h1>
              <div className={styles.whetherYoureDeveloping}>
                "Whether you’re developing a high-rise commercial building or a
                sustainable residential complex, Luxa's LEED management software
                is designed to adapt seamlessly to your project's specific needs
                and goals. Our platform intelligently tailors its features, from
                tracking LEED credits to managing documentation, ensuring
                optimal LEED certification pathways for projects of any scale
                and type.
              </div>
            </div>
            <div className={styles.lEEDCertificationManageme}>
              <div className={styles.lEEDCertificationManagemeChild} />
              <img
                className={styles.group12160252341}
                loading="eager"
                alt=""
                src="/group-1216025234-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.dataAnalyticsInsights}>
        <div className={styles.environmentalImpactAssessmen1}>
          <div className={styles.environmentalImpactAssessmenChild} />
          <div className={styles.contactUsOurStoryPrivacyP}>
            <div className={styles.resourcesTextNode}>
              <h1 className={styles.gettingStartedWithContainer}>
                <span>{`Getting started with `}</span>
                <b className={styles.luxa}>{`LUXA `}</b>
                <span>for LEED Certification</span>
              </h1>
              <div className={styles.linkedInTwitterFacebookWha} />
            </div>
          </div>
          <div className={styles.embarkOnYour}>
            Embark on your LEED certification journey with Luxa by simply
            signing up, inputting your project details, and let our platform
            guide you through each step - from initial data entry to continuous
            monitoring and management of your LEED compliance
          </div>
          <div className={styles.becomeAPartnerPartnerPorta}>
            <div className={styles.requestDemoFrame1}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.requestADemo}>Request a Demo</div>
              </button>
              <button className={styles.requestADemo1}>
                <div className={styles.requestADemoChild} />
                <div className={styles.contactAnExpert}>Contact an expert</div>
              </button>
            </div>
          </div>
          <div className={styles.environmentalImpactAssessmenInner}>
            <div className={styles.groupGroup}>
              <div className={styles.group1}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.group12160252371}
                  loading="eager"
                  alt=""
                  src="/group-1216025237-1@2x.png"
                />
              </div>
              <div className={styles.rectangle1}>
                <div className={styles.rectangleChild} />
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
      </section> */}
      <DataAnalyticsInsightsContainer dataforcard={"for LEED Certification"} />

      <section className={styles.faqsOnLeedCertificationManParent}>
        <h1 className={styles.faqsOnLeed}>
          FAQs on LEED Certification Management
        </h1>
        <CardContainer />
      </section>
      {/* <Accordions/> */}
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Contact Us for Your LEED Certification Needs"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
  <Footer/>
    </div>
  );
};

export default ServicesLEEDCertificationM;
