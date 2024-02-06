import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "./mobileMenu.module.css";
import Link from "next/link";
interface mobileMenuResponsive {
    testinfmobileMenu: boolean;
  }

const MobileMenuResponsive: React.FC<mobileMenuResponsive> =({ testinfmobileMenu }) => {
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
  return (
    <div className={styles.mobileresponsiveheader}>
    <div className={styles.servicesframe}>
      <img
        className={styles.colorlogonobackground}
        loading="eager"
        alt=""
        src="./color-logo--no-background@2x.png"
      />

      <img
        className={styles.iconsalertsalarm}
        loading="eager"
        alt=""
        src="./iconsalertsalarm.svg"
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
      <div className={styles.pricing}>Pricing</div>
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
      <div className={styles.company}>Company</div>
      <div className={styles.pricingresources2}>
        <div className={styles.knowledgecenter}>Knowledge Center</div>
        <img
          className={styles.stroke2icon1}
          loading="eager"
          alt=""
          src="./stroke-3.svg"
        />
      </div>
    </nav>
    <div className={styles.loginform}>
      <div className={styles.login}>Login</div>
      <button className={styles.rectangleparent}>
        <div className={styles.framechild}></div>
        <img
          className={styles.iconlyboldarrowright}
          alt=""
          src="./iconlyboldarrow--right.svg"
        />

        <div className={styles.requestademo}>Request a demo</div>
      </button>
    </div>
    <div className={styles.multigroup}>
      <div className={styles.wrappergroup1216025293}>
        <img
          className={styles.wrappergroup1216025293child}
          loading="eager"
          alt=""
          src="./group-1216025293.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025292}>
        <img
          className={styles.wrappergroup1216025292child}
          loading="eager"
          alt=""
          src="./group-1216025292.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025291}>
        <img
          className={styles.wrappergroup1216025291child}
          loading="eager"
          alt=""
          src="./group-1216025291.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025290}>
        <img
          className={styles.wrappergroup1216025290child}
          loading="eager"
          alt=""
          src="./group-1216025290.svg"
        />
      </div>
      <div className={styles.wrappergroup1216025289}>
        <img
          className={styles.wrappergroup1216025289child}
          loading="eager"
          alt=""
          src="./group-1216025289.svg"
        />
      </div>
    </div>
  </div>
  );
};

export default MobileMenuResponsive;
