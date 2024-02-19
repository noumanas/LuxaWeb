
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
     Luxa simplifies the complex journey towards achieving green certifications. Our platform help automate the documentation and submission process, reducing administrative burdens and ensuring accuracy. By guiding construction projects through each step of the certification process, Luxa enables teams to focus on what they do best - building sustainably - while we handle the compliance intricacies.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
      </AccordionItem>
      <AccordionItem header="Real-Time Carbon Emission Tracking" >
      With Luxa's cutting edge emissions tracking feature, construction projects can monitor their carbon footprint in real-time, enabling immediate adjustments to meet emissions targets. This dynamic approach to managing and reporting emissions helps construction companies stay ahead of regulations, avoid potential penalties, and demonstrate environmental responsibility.
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Cost Reduction through Sustainable Practices" >
    Luxa identifies opportunities for sustainable materials use and waste reduction, directly contributing to cost savings. By optimizing resource allocation and reducing reliance on high-carbon materials, construction projects can significantly lower both their environmental footprint and operational costs. 
      <div className={styles.getStarttbn}>
        <a>Get Started</a>
        <img src="./arrow-4.svg"/>
      </div>
    </AccordionItem>
    <AccordionItem header="Enhancing Project Appeal and Compliance" >
    In an era where sustainability is increasingly prioritized by clients, investors, and regulators, Luxa equips construction projects with the tools to excel. Our platform ensures that projects not only comply with existing environmental regulations but are also positioned to meet the criteria for emerging green building standards. This proactive approach to sustainability enhances a project's appeal, potentially leading to higher occupancy rates, rental premiums, and investment returns.

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
