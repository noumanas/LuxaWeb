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
      <AccordionItem header="How much does a subscription cost?" initialEntered>
      Subscriptions are on a project by project basis and are priced at $300/month for the duration of construction (when billed in full). For additional LEED support and monthly check-ins with GCS on your project’s progress, the subscription cost is $500/month. Volume and enterprise options are also available. See our pricing page for complete details.
      </AccordionItem>

      <AccordionItem header="How do I register my first project?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
        erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
      </AccordionItem>

      <AccordionItem header="Does Luxa LEED Software work for LEED v4 and other versions?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
      <AccordionItem header="Do you offer a trial of the software?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
      <AccordionItem header="I’m sold! How do I activate my project?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
      <AccordionItem header="What kind of support will my team receive from the Luxa team?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
      <AccordionItem header="Will I still have access to my project data after it has been completed and sent to LEED online?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>

    </Accordion>
  </div>
  );
};

export default Accordions;
