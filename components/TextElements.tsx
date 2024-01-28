import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./TextElements.module.css";
import Link from "next/link";

type TextElementsType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
};

const TextElements: NextPage<TextElementsType> = ({ propMargin }) => {
  const emailOutreachprojectluxaorStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.textElements}>
      <div className={styles.contactUsFrame}>
        <div className={styles.serviceLinks}>
          <div className={styles.emailoutreachprojectluxaorg}>
            <div className={styles.serviceLinks1}>
              <h1 className={styles.readyToFindContainer}>
                <p className={styles.readyToFind}>Ready to find out</p>
                <p className={styles.more}>More</p>
              </h1>
              <h3
                className={styles.emailOutreachprojectluxaor}
                style={emailOutreachprojectluxaorStyle}
              >
                Email: outreach@projectluxa.org
              </h3>
            </div>
            <div className={styles.callUs123}>Call us: 123 456 789</div>
          </div>
          <div className={styles.contactUsFooter}>
            <div className={styles.servicesFrame}>
              <div className={styles.lEEDCertificationManageme}>
                <h3 className={styles.services}>Services</h3>
                <Link href='/services/leef-certification-management-software'>
                <div className={styles.leedCertificationManagementContainer}>
                  <ul className={styles.leedCertificationManagement}>
                    <li>LEED Certification Management</li>
                  </ul>
                </div>
                </Link>
                
                <div className={styles.dataAnalyticsInsights}>
                   <Link href='/services/emission-management-and-reporting-software'>
                    <div className={styles.scope12Container}>
                      <ul className={styles.scope123EmissionManag}>
                        <li>{`Scope 1, 2, & 3 Emission Management & Reporting`}</li>
                      </ul>
                    </div>
                  </Link>
                  
                  <div className={styles.dataAnalyticsInsightsParent}>
                  <Link href='/services/data-analytics-insights'>
                  <div className={styles.dataAnalyticsContainer}>
                      <ul className={styles.dataAnalyticsInsights1}>
                        <li>{`Data Analytics & Insights`}</li>
                      </ul>
                    </div>
                  </Link>
                    
                    <div
                      className={styles.environmentalImpactAssessmenContainer}
                    >
                      <ul className={styles.environmentalImpactAssessmen}>
                        <li>Environmental Impact Assessments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contactUsOurStoryPrivacyP}>
                <h3 className={styles.resources}>Resources</h3>
                <div className={styles.contactUs}>
                  <ul className={styles.contactUs1}>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className={styles.ourStory}>
                  <ul className={styles.ourStory1}>
                    <li>Our Story</li>
                  </ul>
                </div>
                <div className={styles.privacyPoliciesContainer}>
                  <ul className={styles.privacyPolicies}>
                    <li>{`Privacy & Policies`}</li>
                  </ul>
                </div>
                <div className={styles.termsConditionsContainer}>
                  <ul className={styles.termsConditions}>
                    <li>{`Terms & Conditions`}</li>
                  </ul>
                </div>
                <div className={styles.careers}>
                  <ul className={styles.careers1}>
                    <li>Careers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLayout}>
          <div className={styles.contactInfoGroup}>
            <h3 className={styles.partners}>Partners</h3>
            <div className={styles.becomeAPartnerContainer}>
              <ul className={styles.becomeAPartner}>
                <li>{`Become a partner `}</li>
              </ul>
            </div>
            <div className={styles.partnerPortal}>
              <ul className={styles.partnerPortal1}>
                <li>Partner portal</li>
              </ul>
            </div>
            <div className={styles.getInTouchContainer}>
              <ul className={styles.getInTouch}>
                <li>Get in touch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextElements;
