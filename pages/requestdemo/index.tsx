import type { NextPage } from "next";
import FrameComponent1 from "../../components/FrameComponent1";
import FrameComponent from "../../components/FrameComponent";
import Footer from "../../components/Footer";
import styles from "./RequestDemo.module.css";
import ContactFormContainer from "../../components/ContactFormContainer";
import { useEffect, useState } from "react";
import DataAnalyticsInsightsContainer from "../../components/DataAnalyticsInsightsContainer";
import Header from "../../components/Header";
import Image from 'next/image'
import Mheader from "../../components/mainheader";
import MobileMenuResponsive from "../../components/MobileMenuResponsive";
const RequestDemo: NextPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeLink, setActiveLink] =  useState("");
  const [isMobile, setIsMobile] = useState(false);

  // const setActiveLinkhandleLinkClick = (link: string) s=> {
  //   setActiveLink(link);
  // };
  useEffect(() => {
    // Set loaded to true after the component mounts
    setLoaded(true);
  }, []);
  return (
    <div  className={`${styles.servicesMain} ${loaded && styles.loaded}`}>
        <div className={styles.topmenu}>
        {isMobile ? (
          <MobileMenuResponsive testinfmobileMenu={true} setIsMobile={setIsMobile} />
        ):(
           <Mheader activeLink={activeLink} setIsMobile={setIsMobile}/>

        )}

        </div>

      
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

export default RequestDemo;
