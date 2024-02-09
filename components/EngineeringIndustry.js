
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
const EngineeringIndustry = () => {

  return (
    <div className={styles.accordion}>
    {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
    <Accordion transition transitionTimeout={250}>
      <AccordionItem header="Optimizing Sustainable Engineering Practices" initialEntered>
    Luxa empowers engineering teams to integrate sustainable practices into their projects from the ground up. Our green certification management tool simplifies the process of achieving and maintaining certifications, ensuring that projects not only meet but exceed environmental standards. With Luxa, engineers can design with sustainability in mind, creating structures that are both innovative and eco-friendly.

      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
      </AccordionItem>
      <AccordionItem header="Precision in Carbon Emissions Tracking" >
       Our carbon emissions management feature offers engineers a detailed view of their project's environmental impact, providing real-time data on carbon output. This precision allows for informed decision-making to reduce emissions, implement eco-conscious materials, and apply energy-efficient solutions. With Luxa, engineers gain the capability to measure, analyze, and improve the carbon footprint of their projects, paving the way for cleaner, greener engineering solutions.
  
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Enhanced Compliance and Reporting Efficiency" >
       Luxa streamlines the compliance process with environmental regulations and sustainability standards, offering a centralized platform for managing all necessary documentation and reports. This reduces administrative burdens and enhances efficiency, allowing engineers to focus on innovation and project execution. With automated updates and reminders, Luxa ensures that engineering projects remain compliant with the latest environmental requirements, avoiding potential fines and reputational damage.
     
        <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="4.Facilitating Collaborative Engineering Solutions" >
       Luxa fosters collaboration across multidisciplinary teams, enabling engineers, architects, and construction managers to work together seamlessly on sustainable projects. Our platform promotes transparency and shared access to project data, including emissions metrics and certification statuses, ensuring all stakeholders are aligned with the project's sustainability goals. 
       
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    </Accordion>
  </div>
  );
};

export default EngineeringIndustry;
