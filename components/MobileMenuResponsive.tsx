import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from "./mobileMenu.module.css";
import Link from "next/link";
interface mobileMenuResponsive {
    testinfmobileMenu: boolean;
  setIsMobile: (isMobile: boolean) => void;

  }

const MobileMenuResponsive: React.FC<mobileMenuResponsive> =({ testinfmobileMenu , setIsMobile }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [changeStroke, setchangeStroke] = useState(false);
  const [activeLinks, setActiveLink] =  useState("services");
  const [changeStrokeresources, setchangeStrokeresources] = useState(false);
  const [resourceisDropdownOpen, setresourceisDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setchangeStroke(true)
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setchangeStroke(false);

  };
  const handleMouseEnter2 = () => {
    setresourceisDropdownOpen(true);
    setchangeStrokeresources(true);


  };

  const closeDropdown2 = () => {
    setresourceisDropdownOpen(false);
    setchangeStrokeresources(false);

  };
  useEffect(() => {
    // Prevent scrolling and make mobile menu fullscreen when component mounts
    const handleScroll = () => {
      document.body.style.overflow = 'hidden';
    };
    handleScroll(); // Call the function to apply styles immediately

    return () => {
      // Cleanup function to restore scrolling when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className={styles.mobileresponsiveheader}>
    <div className={styles.servicesframe}>
    <Link href="/">
      <img
        className={styles.colorlogonobackground}
        loading="eager"
        alt=""
        src="/color-logo--no-background@2x.png"
      /></Link>
      

      <img
        className={styles.iconsalertsalarm}
        loading="eager"
        alt=""
        src="/iconsalertsalarm.svg"
        onClick={()=>(setIsMobile(false))}
      />
    </div>
    <nav className={styles.alertframe}>
          <div className={styles.pricingresources} onMouseMove={handleMouseEnter} onMouseLeave={closeDropdown}> 
            <div className={`${styles.services} ${
                activeLinks === "services" ? styles.activeLink : ""
              }`}> 
              <div className={styles.group}>
              Services
              {changeStroke === true ? (
                <img className={styles.stroke3Icon} alt="" src="/Stroke3-hover.svg" />
              ):(<img className={styles.stroke3Icon} alt="" src="/stroke-3.svg" />)}
              
            </div> 
          </div>
          {isDropdownOpen && (
            <div
              className={styles.dropdownMenu}
              onMouseEnter={handleMouseEnter} // Prevent closing when hovering over the dropdown menu
              onMouseLeave={closeDropdown}
            >
                <ul>
                <Link href="/services">
                  <li>
                      Main Services
                  </li>
                  </Link>
                  <Link href="/services/leef-certification-management-software">
                  <li>
                      LEED Certification Management Software
                  </li>
                  </Link>
                  <Link href="/services/emission-management-and-reporting-software">
                  <li>
                      Scope 1, 2, & 3 Emission Management and Reporting Software
                  </li>
                  </Link>
                  <Link href="/services/data-analytics-insights">
                  <li>
                      Data Analytics and Insights
                  </li>
                  </Link>
                </ul>
              </div>
            )}
         </div> 
          <Link href="/comingsoon">

            <div className={styles.pricing}>Pricing</div>
          </Link>
            <div className={styles.pricingresources} onMouseMove={handleMouseEnter2} onMouseLeave={closeDropdown2} >
                <div className={`${styles.services} ${
                  activeLinks === "resources" ? styles.activeLink : ""
                }`}><div className={styles.group}>
                Resources
                {changeStrokeresources === true ? (
                  <img className={styles.stroke3Icon} alt="" src="/Stroke3-hover.svg" />
                ):(<img className={styles.stroke3Icon} alt="" src="/stroke-3.svg" />)}
                
              </div> 
            </div>
            {resourceisDropdownOpen  && (
            <div
              className={styles.dropdownMenu}
              onMouseEnter={handleMouseEnter2} // Prevent closing when hovering over the dropdown menu
              onMouseLeave={closeDropdown2}
            >
                 
              <ul>
              Construction Type
                <Link href="/resources">
                  <li>
                    New Construction - Residential and Commercial
                  </li>
                  </Link>
                  <Link href="/resources/retrofit-and-renovation">
                  <li>
                    Retrofit & Renovation
                  </li>
                  </Link> 
                  <Link href="/resources/infrastructure">
                  <li>
                    Infrastructure
                  </li>
                  </Link>
                  Industries Type
                    <Link href="/resources/architecture">
                  <li>
                    Architecture
                  </li>
                  </Link>
                  <Link href="/resources/engineering">
                    <li>
                      Engineering
                    </li>
                  </Link>
                  <Link href="/resources/construction">
                    <li>
                      Construction
                    </li>
                  </Link>
                </ul>
                  
                
              </div>
            )}
            </div>  

      {/* <div className={styles.pricingresources}>
        <div className={styles.resources}>Resources</div>
        <img
          className={styles.stroke2icon}
          loading="eager"
          alt=""
          src="./stroke-2.svg"
        />
      </div> */}
     
      <div className={styles.company}>
         <Link href='/company'>Company
      </Link>
         
         </div>

      <div className={styles.pricingresources2}>
       <Link href="/comingsoon">

        <div className={styles.knowledgecenter}>Knowledge Center</div>
        </Link>
        <img
          className={styles.stroke2icon1}
          loading="eager"
          alt=""
          src="/stroke-3.svg"
        />
      </div>
    </nav>
    <div className={styles.loginform}>
     <Link href="/comingsoon">
     <div className={styles.login}>Login</div>
      </Link> 
      <Link href="/requestdemo">
      <button className={styles.rectangleparent}>
        <div className={styles.framechild}></div>
        <img
          className={styles.iconlyboldarrowright}
          alt=""
          src="/iconlyboldarrow--right.svg"
        />

        <div className={styles.requestademo}>Request a demo</div>
      </button>
      </Link>
   
    </div>
    <div className={styles.multigroup}>
      <div className={styles.wrappergroup1216025293}>
        <img
          className={styles.wrappergroup1216025293child}
          loading="eager"
          alt=""
          src="/group-1216025293.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025292}>
        <img
          className={styles.wrappergroup1216025292child}
          loading="eager"
          alt=""
          src="/group-1216025292.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025291}>
        <img
          className={styles.wrappergroup1216025291child}
          loading="eager"
          alt=""
          src="/group-1216025291.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025290}>
        <img
          className={styles.wrappergroup1216025290child}
          loading="eager"
          alt=""
          src="/group-1216025290.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025289}>
        <img
          className={styles.wrappergroup1216025289child}
          loading="eager"
          alt=""
          src="/group-1216025289.svg"
        />
      </div>
    </div>
  </div>
  );
};

export default MobileMenuResponsive;
