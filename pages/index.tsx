import type { NextPage } from "next";
import Header from "../components/mainheader";
import WelcomeTo from "../components/homepageContainer";
import FRAME from "../components/FRAME";
import ConstructionIndustry from "../components/ConstructionIndustry";
import EngineeringIndustry from "../components/EngineeringIndustry"
import LineSection from "../components/LineSection";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import ColumnFrame from "../components/ColumnFrame";
import Footer from "../components/Footer";
import styles from "./HomeLandingPage.module.css";
import SecondAccordion from "../components/SecondAccordion";
import ContactFormContainer from "../components/ContactFormContainer";
import MobileMenuResponsive from "../components/MobileMenuResponsive";
import Accordions from "../components/Accordion";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";
import LineSectionMobile from "../components/LineSectionMobile";
import ArchtecturalResponsiveSlider from "../components/ArchtecturalResponsiveSlider";

const HomeLandingPage: NextPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledsecon, setisScrolledsecon] = useState(false);
  const [isScrolledthird, setisScrolledthird] = useState(false);
  const [isScrolledforth, setisScrolledforth] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [architecturalFirmstwo, setrchitecturalFirmstwo] = useState(false);
  const [architecturalFirms, setarchitecturalFirms] = useState(true);
  const [architecturalEngineering, setarchitecturalEngineering] = useState(false);
  const [isLinesectionMobile , setIsLineSectionMobile] =useState(false);
  const [headingText , setHeadingtext]=useState("Architectural Industry")
  const [isMobile, setIsMobile] = useState(false);
  const [isDestop, setisDestop] = useState(true);
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);


  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      setIsLineSectionMobile(window.innerWidth <= 768); // Adjust breakpoint as needed

      // Add an event listener to update the state when the window is resized
      const handleResize = () => {
        setIsLineSectionMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
      };
      window.addEventListener('resize', handleResize);
      
      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleClick1 = () => {
    // Toggle the state value when clicked
    if(clicked1 === true){
      setClicked1(false)
      setClicked2(true)
    }
    else if(clicked2 === true){
      setClicked2(false)
      setClicked3(true)

    }
    else if(clicked3 === true){
      setClicked1(true)
      setClicked2(false)
      setClicked3(false)

    }
  };
  const handleClick2 = () => {
    // Toggle the state value when clicked
    setClicked1(false)
    setClicked2(true);
  };
  const handleChande = () => {
    // Toggle the state value when clicked
    setClicked1(true)


  };
  const handleLinkClick= ()=> {
    if(headingText === "Architectural Industry"){
      setHeadingtext("Construction Industry")
      setrchitecturalFirmstwo(true);
      setarchitecturalFirms(false)
    }
    else if(headingText === "Construction Industry"){
      setHeadingtext("Engineering Industry")
      setarchitecturalEngineering(true);
      setrchitecturalFirmstwo(false);

    }
    else{
      setHeadingtext("Architectural Industry");
      setarchitecturalEngineering(false);
      setarchitecturalFirms(true)

    }
     // Set the clicked link as active
  };
  const handleLinkClickback= ()=> {
    if(headingText === "Architectural Industry"){
      setHeadingtext("Construction Industry")
      setrchitecturalFirmstwo(true);
      setarchitecturalFirms(false)
    }
    else if(headingText === "Construction Industry"){
      setHeadingtext("Engineering Industry")
      setarchitecturalEngineering(true);
      setrchitecturalFirmstwo(false);

    }
    else{
      setHeadingtext("Architectural Industry");
      setarchitecturalEngineering(false);
      setarchitecturalFirms(true)

    } // Set the clicked link as active
  };
  // useEffect(() => {
  //   // Check if window object is available (client-side)
  //   if (typeof window !== 'undefined') {
  //     setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed

  //     // Add an event listener to update the state when the window is resized
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  //     };
  //     window.addEventListener('resize', handleResize);
      
  //     // Cleanup function to remove event listener
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
        setIsScrolled(scrollY>120);
        setisScrolledsecon(scrollY >800)
        setisScrolledthird(scrollY>2500)
        setisScrolledforth(scrollY>3500)
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
        {isMobile ? (
          <MobileMenuResponsive testinfmobileMenu={true} setIsMobile={setIsMobile} />
        ):( <Header activeLink={""} setIsMobile={setIsMobile} />)}
        <div>
        <WelcomeTo />

        </div>
      </section>
      {isScrolled &&(
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}> 
            <section className={`${styles.message} ${isScrolled ? styles.scrolled : ''}`}>

              <div className={styles.polygonParent}>
                      <h1 className={styles.theWorlds1Container}>
                        <span>{`The world's #1 solution to start your `}</span>
                        <b className={styles.sustainability}>{`sustainability `}</b>
                        <span> journey</span>
                      </h1>
                <div className={styles.text}>
                  <SecondAccordion/>
                    <div>
                      <Image
                        className={styles.contactDetailsIcon}
                        loading="eager"
                        alt=""
                        src="/Rectangle4.png"
                        width={527}
                        height={479}
                      />
                    </div>
                </div>
              </div>
            </section>
          </motion.div>
      )}
      {isScrolledsecon && (
       <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}>
                 <section className={`${styles.message} ${isScrolled ? styles.scrolled : ''}`}>
                  {isLinesectionMobile ?(
                <LineSectionMobile/>

                  ):(
                  <LineSection/>)}
                 </section>
      </motion.div>
      )}
      {isScrolledthird && (
         <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.8,
           ease: [0, 0.71, 0.2, 1.01]
         }}>
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
         </motion.div>
      )}
         <FrameComponent3 />
      {isScrolledforth && (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        
       
     
      
      <section className={styles.homeLandingPageChild}>
        {isLinesectionMobile ? (
        <div className={styles.operationBTn}>
          <div className={headingText === "Architectural Industry" ? styles.active1 :styles.notactive} onClick={handleLinkClick}>Architectural Industry</div>
          <div className={headingText === "Construction Industry" ? styles.active2:  styles.notactive} onClick={handleLinkClick}>Construction Industry</div>
          <div className={headingText === "Engineering Industry" ? styles.active3:  styles.notactive} onClick={handleLinkClick}>Engineering Industry</div>

       </div>

        ):(<div className={styles.gcsLogoSymbolParent}>
          <img
            className={styles.gcsLogoSymbol}
            alt=""
            src="/gcs-logo-symbol@2x.png"
          />
      
          <div className={styles.frameGroup}>
            <div className={styles.iconlylightarrowRight3Parent}>
              <img
                className={styles.iconlylightarrowRight3}
                loading="eager"
                alt=""
                src="/iconlylightarrow--right-3@2x.png"
                onClick={handleLinkClickback}
  
              />
              <h2 className={styles.architecturalFirms}>{headingText}</h2>
              <img
                className={styles.iconlylightarrowRight2}
                loading="eager"
                alt=""
                src="/iconlylightarrow--right-2.svg"
                onClick={handleLinkClick}
  
              />
            </div>
            {/* <div className={styles.frameItem} /> */}
          </div>
        </div>)}
   
      {architecturalFirms && (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        <FRAME/>
        </motion.div>
      )}
      {architecturalFirmstwo && (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
          <ConstructionIndustry/>
        </motion.div>
        
      )}
         {architecturalEngineering&& (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
          <EngineeringIndustry/>
        </motion.div>
        
      )}
      </section>
      </motion.div>
      )}
       
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
      
      {/* Getting started */}
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
