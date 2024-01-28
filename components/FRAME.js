// components/Accordions.js
import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./SecondAccordion.module.css"
const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img className={styles.chevron}  alt="Chevron Down" src="./plus.png"/>
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );
const frameAccordion = () => {
  return (
    <div className={styles.accordion}>
    {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
    <Accordion transition transitionTimeout={250}>
      <AccordionItem header="Sustainable Design and Construction Integration" initialEntered>
      Luxa bridges the gap between sustainable architectural design and practical construction execution. It helps architects ensure that their eco-friendly designs are translated accurately into sustainable construction practices, maintaining the integrity of the design’s environmental goals.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
      </AccordionItem>
      <AccordionItem header="Compliance with Environmental Standards and Certifications" >
      Luxa consolidates all sustainability-related project aspects into a single platform. This centralized approach simplifies the management of green certifications, emissions tracking, and compliance reporting, making it easier for project managers to monitor progress, make informed decisions, and maintain oversight on all sustainability fronts.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Comprehensive Emission Tracking for Green Architecture" >
      Luxa consolidates all sustainability-related project aspects into a single platform. This centralized approach simplifies the management of green certifications, emissions tracking, and compliance reporting, making it easier for project managers to monitor progress, make informed decisions, and maintain oversight on all sustainability fronts.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Lifecycle Assessment and Reporting" >
      Luxa consolidates all sustainability-related project aspects into a single platform. This centralized approach simplifies the management of green certifications, emissions tracking, and compliance reporting, making it easier for project managers to monitor progress, make informed decisions, and maintain oversight on all sustainability fronts.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    </Accordion>
  </div>
  );
};

export default frameAccordion;
