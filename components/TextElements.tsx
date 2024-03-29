import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import styles from "./TextElements.module.css";
import Link from "next/link";
import {contactApiHandelr} from "../api-helpers/api-helpers"

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
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    const payload ={
      email, 

    }
     // Call the contact API handler function
     contactApiHandelr(payload)
     .then((res) => {
       console.log("API response:", res);
       setEmail(" ");
     })
     .catch((error) => {
       console.error("API error:", error);
       // Handle error here (e.g., display error message to user)
     });
    // Reset the form after submission
    setEmail("");
  
  };

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
            {/* <div className={styles.callUs123}>Call us: 123 456 789</div> */}
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

                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.lEEDCertificationManageme}>
                <h3 className={styles.resources}>Resources</h3>
                <div className={styles.contactUs}>
                  <ul className={styles.contactUs1}>
                    <li>Construction Type</li>
                  </ul>
                </div>
                <Link href='/resources'>
                  <div className={styles.ourStory}>
                    <ul className={styles.ourStory1}>
                      <li>New Construction - Residential and Commercialy</li>
                    </ul>
                  </div>
                </Link>
                <Link href='/resources/retrofit-and-renovation'>
                  <div className={styles.privacyPoliciesContainer}>
                    <ul className={styles.privacyPolicies}>
                      <li>Retrofit & Renovation</li>
                    </ul>
                  </div>
                </Link>
                <Link href='/resources/infrastructure'>
                  <div className={styles.termsConditionsContainer}>
                    <ul className={styles.termsConditions}>
                      <li>Infrastructure</li>
                    </ul>
                  </div>
                </Link>
                <div className={styles.careers}>
                  <ul className={styles.careers1}>
                    {/* <li>Careers</li> */}
                  </ul>
                </div>
              </div>
              <div className={styles.lEEDCertificationManageme}>
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
      </div>
      <div className={styles.contactUsFrame}>
        <div className={styles.serviceLinks}>
          <div className={styles.emailoutreachprojectluxaorg}>
            <div className={styles.serviceLinks1}>
              <h1 className={styles.readyToFindContainer}>
                <p className={styles.readyToFind}>Subscribe News Letter</p>
              </h1>
              <input type="text" onChange={(e) => setEmail(e.target.value)} className={styles.subscribeInput} alt="" placeholder="Enter Email Address" value={email}/>
            </div>
            <div className={styles.subscribe} onClick={(handleFormSubmit)}>Subscribe</div>
          </div>
          <div className={styles.contactUsFooter}>
            <div className={styles.servicesFrame}>
              <div className={styles.lEEDCertificationManageme}>
                <h3 className={styles.services}>Knowledge Center</h3>
                <Link href='/comingsoon'>
                <div className={styles.leedCertificationManagementContainer}>
                  <ul className={styles.leedCertificationManagement}>
                    <li>Certifications</li>
                  </ul>
                </div>
                </Link>
                
                <div className={styles.dataAnalyticsInsights}>
                <Link href='/comingsoon'>

                    <div className={styles.scope12Container}>
                      <ul className={styles.scope123EmissionManag}>
                        <li>Reporting</li>
                      </ul>
                    </div>
                  </Link>
                  
                  <div className={styles.dataAnalyticsInsightsParent}>
                  <Link href='/comingsoon'>

                  <div className={styles.dataAnalyticsContainer}>
                      <ul className={styles.dataAnalyticsInsights1}>
                        <li>Climate Initiatives</li>
                      </ul>
                    </div>
                  </Link>
                    
                    <div
                      className={styles.environmentalImpactAssessmenContainer}
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.lEEDCertificationManageme}>
                <h3 className={styles.resources}>Resources</h3>
                <div className={styles.contactUs}>
                  <ul className={styles.contactUs1}>
                    <li>Industries Type</li>
                  </ul>
                </div>
                <Link href='/resources/architecture'>
                  <div className={styles.ourStory}>
                    <ul className={styles.ourStory1}>
                      <li>Architecture</li>
                    </ul>
                  </div>
                </Link>
                <Link href='/resources/engineering'>
                  <div className={styles.termsConditionsContainer}>
                    <ul className={styles.termsConditions}>
                      <li>Engineering</li>
                    </ul>
                  </div>
                </Link>
                <Link href='/resources/construction'>
                  <div className={styles.careers}>
                    <ul className={styles.careers1}>
                      <li>Construction</li>
                    </ul>
                  </div>
                </Link>
                
              </div>
              <div className={styles.lEEDCertificationManageme}>
                  <h3 className={styles.partners}>Other Links</h3>
                  <div className={styles.becomeAPartnerContainer}>
                    <ul className={styles.becomeAPartner}>
                    <li>Privacy & polices</li>

                    </ul>
                  </div>
                  <div className={styles.partnerPortal}>
                    <ul className={styles.partnerPortal1}>
                    <li>Terms & Conditions</li>
                      
                    </ul>
                  </div>
                  <div className={styles.getInTouchContainer}>
                    <ul className={styles.getInTouch}>
                    <li>Careers</li>

                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLayout}>
          
        </div>
      </div>
    </div>
  );
};

export default TextElements;
