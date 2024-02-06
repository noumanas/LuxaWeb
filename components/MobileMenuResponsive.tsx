import type { NextPage } from "next";
import React, { useState } from "react";
import styles from "./mobileMenu.module.css";
import Link from "next/link";
interface mobileMenuResponsive {
    testinfmobileMenu: boolean;
  }

const MobileMenuResponsive: React.FC<mobileMenuResponsive> =({ testinfmobileMenu }) => {
 
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
      <div className={styles.pricingresources}>
        <div className={styles.services}>Services</div>
        <img
          className={styles.stroke3icon}
          loading="eager"
          alt=""
          src="./stroke-3.svg"
        />
      </div>
      <div className={styles.pricing}>Pricing</div>
      <div className={styles.pricingresources1}>
        <div className={styles.resources}>Resources</div>
        <img
          className={styles.stroke2icon}
          loading="eager"
          alt=""
          src="./stroke-2.svg"
        />
      </div>
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
