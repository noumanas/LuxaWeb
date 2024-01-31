import type { NextPage } from "next";
import Header from "../components/mainheader";
import WelcomeTo from "../components/homepageContainer";
import FRAME from "../components/FRAME";
import LineSection from "../components/LineSection";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import ColumnFrame from "../components/ColumnFrame";
import Footer from "../components/Footer";
import styles from "./HomeLandingPage.module.css";
import SecondAccordion from "../components/SecondAccordion";
import ContactFormContainer from "../components/ContactFormContainer";
import Accordions from "../components/Accordion";
import { useEffect, useState } from "react";
const HomeLandingPage: NextPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Set loaded to true after the component mounts
    setLoaded(true);
  }, []);
  
  return (
    <div className={`${styles.homeLandingPage} ${loaded && styles.loaded}  ${isScrolled ? styles.scrolled : ''}`}>
      <section className={styles.maskGroupParent}>
        {/* <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" /> */}
        <Header activeLink={""} />
        <WelcomeTo />
      </section>
      <section className={`${styles.message} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.polygonParent}>
          <div className={styles.polygon}>
            <div className={styles.polygonInner}>
              <div className={styles.emailParent}>
                <div className={styles.email} />
                <h1 className={styles.theWorlds1Container}>
                  <span>{`The world's #1 solution to start your `}</span>
                  <b className={styles.sustainability}>{`sustainability `}</b>
                  <span> journey</span>
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.text}>

            <SecondAccordion/>
            <div className={styles.wrapperContactDetails}>
              <img
                className={styles.contactDetailsIcon}
                loading="eager"
                alt=""
                src="Rectangle4.png"
              />
            </div>
          </div>
        </div>
      </section>
      <LineSection />
      <section className={styles.homeLandingPageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.elevatingSustainabilityInEvParent}>
              <h1 className={styles.elevatingSustainabilityIn}>
                Elevating Sustainability in Every Construction Type
              </h1>
              <div className={styles.whetherItsNew}>
                Whether it's new construction, retrofits, renovations, or
                infrastructure projects, our software empowers you with
                data-driven insights, collaborative tools, and AI-recommended
                solutions to elevate sustainability across all facets of the
                construction industry.
              </div>
            </div>
          </div>
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent3 />
      
      <section className={styles.homeLandingPageChild}>
        <FRAME/>
        
      </section>
      <section className={styles.text1}>
        <div className={styles.asAnArchitecture}>
          As an architecture firm dedicated to innovation and sustainable
          design, our software is designed to seamlessly integrate into your
          workflow. From new constructions to retrofits and renovations, our
          data-analytics and automation ensure that every project aligns with
          your eco-friendly goals, driving your commitment to sustainable
          architecture.
        </div>
      </section>
      <ColumnFrame />
      <section className={styles.faqsParent}>
        <h1 className={styles.faqs}>FAQs</h1>
        <div className={styles.yourName}>
          <div className={styles.contactUsFrame}>
          <Accordions/>
          </div>
        </div>
      </section>
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

export default HomeLandingPage;
