import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "./Text2.module.css";
import Link from "next/link";
interface HeaderProps {
  activeLink: string;
}
const mainheader: React.FC<HeaderProps> = ({ activeLink, ...props }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isknolegdeDropdownOpen, setisknolegdeDropdownOpen] = useState(false);
  const [resourceisDropdownOpen, setresourceisDropdownOpen] = useState(false);
  const [submenushow, setsubmenushow] = useState(false);
  const [submenushowsecond, setsubmenushowsecond] = useState(false);
  const [activeLinks, setActiveLink] =  useState("");
  console.log('activeLink',activeLink);
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnter1 = () => {
    setisknolegdeDropdownOpen(true);
  };

  const closeDropdown1 = () => {
    setisknolegdeDropdownOpen(false);
  };

  const handleMouseEnter2 = () => {
    setresourceisDropdownOpen(true);
  };

  const closeDropdown2 = () => {
    setresourceisDropdownOpen(false);
  };

  const handleMouseEntersubmenu = () => {
    setsubmenushow(true);
    setresourceisDropdownOpen(true)
  };

  const closeDropdownmenu = () => {
    setsubmenushow(false);
  };
  const handleMouseEntersubmenuscond = () => {
    setsubmenushowsecond(true);
    setresourceisDropdownOpen(true)
  };

  const closeDropdownmenusecond = () => {
    setsubmenushowsecond(false);
  };
  const handleLinkClick = (fieldname:any) => {
    setActiveLink(fieldname); // Set the clicked link as active
  };
  return (
    <header className={styles.text}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <Link href="/">
        <div className={styles.colorLogoNoBackgroundWrapper}>
          <img
            className={styles.colorLogoNoBackground}
            loading="eager"
            alt=""
            src="/color-logo--no-background@2x.png"
            onClick={() => handleLinkClick("")}
          />
        </div>
        </Link>
       
        <div className={styles.polygon}>
       
        <div  className={styles.servicesParent} onClick={() => handleLinkClick("services")} onMouseEnter={handleMouseEnter} onMouseLeave={closeDropdown}>
           <Link href="/services" >
              <div className={`${styles.services} ${
              activeLink === "services" ? styles.activeLink : ""
            }`}>Services</div>
           </Link>
                <div className={styles.group}>
                  <img className={styles.stroke3Icon} alt="" src="/stroke-3.svg" />
                </div>
          
             {/* Dropdown menu */}
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
          <Link href='/comingsoon'>
          <div className={styles.pricing}>Pricing</div>
          </Link>
          
          <Link href='/resources'>
          <div className={styles.resourcesParent} onMouseEnter={handleMouseEnter2} onMouseLeave={closeDropdown2} onClick={() => handleLinkClick("resources")} >
            <div className={`${styles.resources} ${
              activeLink === "resources" ? styles.activeLink : "color: orange"
            }`}>Resources</div>
            <div className={styles.stroke2Wrapper}>
              <img className={styles.stroke2Icon} alt="" src="/stroke-3.svg" />
            </div>
            {resourceisDropdownOpen  && (
            <div
              className={styles.dropdownMenu}
              onMouseEnter={handleMouseEnter2} // Prevent closing when hovering over the dropdown menu
              onMouseLeave={closeDropdown2}
            >
                <ul>
                  <li onMouseEnter={handleMouseEntersubmenu} onMouseLeave={closeDropdownmenu}>
                    Construction Type
                  </li>
                  <li onMouseEnter={handleMouseEntersubmenuscond} onMouseLeave={closeDropdownmenusecond}>
                    Industries Type
                  </li>
                </ul>
                
              </div>
            )}
            {submenushow && (
              <div
              className={styles.subMenu}
              onMouseEnter={handleMouseEntersubmenu} // Prevent closing when hovering over the dropdown menu
              onMouseLeave={closeDropdownmenu}
            >
                <ul>
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
                 
                </ul>
                
              </div>
            )}
             {submenushowsecond && (
              <div
              className={styles.subMenu}
              onMouseEnter={handleMouseEntersubmenuscond} // Prevent closing when hovering over the dropdown menu
              onMouseLeave={closeDropdownmenusecond}
            >
                <ul>
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
          </Link>
          
         <Link href="/company">
         <div className={styles.company}>Company</div>
         </Link>
        
          
          <div className={styles.knowledgeCenterParent}>
            <div className={styles.knowledgeCenter}  onMouseEnter={handleMouseEnter1} onMouseLeave={closeDropdown1}>Knowledge Center</div>
            <div className={styles.stroke2Container}>
              <img className={styles.stroke2Icon1} alt="" src="/stroke-3.svg" />
            </div>
            {isknolegdeDropdownOpen && (
            <div
              className={styles.dropdownMenu}
              onMouseEnter={handleMouseEnter1} // Prevent closing when hovering over the dropdown menu
              onMouseLeave={closeDropdown1}
            >
                <ul>
                  <li>
                    <Link href="/comingsoon">
                    Certifications
                    </Link>
                  </li>
                  <li>
                    <Link href="/comingsoon">
                    Emissions
                    </Link>
                  </li>
                  <li>
                    <Link href="/comingsoon">
                    Reporting
                    </Link>
                  </li>
                  <li>
                    <Link href="/comingsoon">
                    Climate Initiatives
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.text1}>
          <Link href="comingsoon">
          <div className={styles.login}>Login</div>
          </Link>
         
          <button className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.iconlyboldarrowRight}
              alt=""
              src="/iconlyboldarrow--right.svg"
            />
            <div className={styles.requestADemo}>Request a demo</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default mainheader;
