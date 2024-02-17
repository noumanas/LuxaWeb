// components/Accordions.js
import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./Accordion.module.css";
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
const Accordions = () => {

  return (
    <div className={styles.accordion}>
    {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
    <Accordion transition transitionTimeout={250}>
      <AccordionItem header="What is Luxa?" initialEntered>
      Luxa is a cutting-edge software platform designed to empower construction, architecture, and engineering professionals with comprehensive tools for managing green certification processes and carbon emissions tracking. Our goal is to simplify sustainable project management, making it more accessible and achievable.
      </AccordionItem>

      <AccordionItem header="How can Luxa help with LEED certification?">
      Luxa streamlines the LEED certification process by providing an organized framework for tracking and documenting all necessary criteria. From initial assessment to final submission, Luxa guides users through each step, offering resources, reminders, and real-time progress tracking to ensure compliance and maximize points.
      </AccordionItem>

      <AccordionItem header="Does Luxa support other sustainability certifications besides LEED?">
      Yes, Luxa is designed to support a wide range of sustainability certifications, including BREEAM, WELL, and Green Globes, among others. Our platform is flexible and customizable, allowing users to adapt it to the specific requirements of different certification systems.
      </AccordionItem>
      <AccordionItem header="Can Luxa integrate with existing project management tools?">
      Absolutely. Luxa is built to complement your current project management ecosystem. It can seamlessly integrate with many existing tools, enhancing your projects with powerful sustainability and emissions tracking capabilities without disrupting your workflow.
      </AccordionItem>
      <AccordionItem header="Is Luxa suitable for small-scale projects?">
       Yes, Luxa is scalable and can be effectively utilized for projects of any size. Whether you’re working on a small residential build or a large commercial development, Luxa’s features can be tailored to meet your project's specific needs.
      </AccordionItem>
      <AccordionItem header=" How does Luxa contribute to carbon emissions tracking?">
      Luxa offers detailed emissions tracking features that calculate, monitor, and report your project's carbon footprint in real-time. This enables project teams to make informed decisions to reduce emissions, comply with regulations, and achieve sustainability goals.
      </AccordionItem>
      <AccordionItem header="How do I get started with Luxa?">
      Getting started with Luxa is simple. You can sign up on our website for a free trial or request a demo to see Luxa in action. Our team is ready to assist with onboarding and will guide you through the setup process to ensure Luxa fits perfectly into your project management strategy.
      </AccordionItem>

    </Accordion>
  </div>
  );
};

export default Accordions;
