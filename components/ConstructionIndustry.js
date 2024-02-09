
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
const ConstructionIndustry = () => {
  return (
    <div className={styles.accordion}>
    {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
    <Accordion transition transitionTimeout={250}>
      <AccordionItem header="Streamlined Certification Process
" initialEntered>
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
      Luxa consolidates all sustainability-related project aspects into a single platform. This centralized approach simplifies the management of green certifications, emissions tracking, and compliance reporting, making it easier for project managers to monitor progress, make informed decisions, and maintain oversight on all sustainability fronts.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Lifecycle Assessment and Reporting" >
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

export default ConstructionIndustry;
