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
      <AccordionItem header="Streamlined Certification Process" initialEntered>
      Luxa simplifies the path to achieving multiple green certifications, offering architects an integrated platform that streamlines the application and documentation process. Architects are a major stakeholder in the design phase of certifications and Luxa saves time and reduces the complexity involved in managing multiple certification requirements. 
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
      </AccordionItem>
      <AccordionItem header="Enhanced Sustainable Design Decision-Making" >
      With Luxa's advanced data analytics and emission tracking, architects gain invaluable insights into the environmental impact of their design choices. This feature supports the incorporation of sustainable practices from the earliest design stages, enabling architects to optimize for energy efficiency, material sustainability, and overall environmental footprint.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Comprehensive Carbon Footprint Analysis" >
    Luxa provides detailed carbon emissions data and analysis tools that enable architects to assess and reduce the carbon footprint of their projects. This not only aids in meeting green building standards but also aligns with global sustainability goals. By Integrating carbon management into the project lifecycle, architects can demonstrate leadership in environmental stewardship and meet the growing demand for sustainable architecture.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Collaborative Project Management" >
    The Luxa platform fosters collaboration across all stages of the architectural project, ensuring that sustainability goals are communicated and achieved throughout the construction process. This collaborative environment enhances the integration of green building practices, facilitates compliance with environmental regulations, and ensures that the final construction remains true to the original sustainable design intentions.
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
