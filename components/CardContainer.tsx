import React from 'react';
import styles from './CardContainer.module.css';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";


interface AccordionItemProps {
  header: string;
  initialEntered?: boolean;
  children: React.ReactNode;
}

type CustomAccordionButtonProps = Readonly<{
  status: any;
  isMounted: boolean;
  isEnter: boolean;
  isResolved: boolean;
}>;

const AccordionItem: React.FC<AccordionItemProps> = ({ header, children, initialEntered }) => (
  <Item
    initialEntered={initialEntered}
    header={
      <>
        {header}
        <img className={styles.chevron} src="../plus.png"/>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }: CustomAccordionButtonProps) =>
        `${styles.itemBtn} ${isEnter ? styles.itemBtnExpanded : ''}`
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  >
    {children}
  </Item>
);
const CardContainer: React.FC = () => {
  return (
    <div className={styles.accordion}>
    {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
    <Accordion transition transitionTimeout={250}>
      <AccordionItem header="What is LEED Certification and Why is it Important?" initialEntered>
      LEED (Leadership in Energy and Environmental Design) is a globally recognized green building certification system. It provides a framework for healthy, efficient, carbon-saving green buildings. LEED certification is important as it demonstrates a building's commitment to environmental sustainability and can lead to reduced operational costs, increased asset value, and a healthier environment for occupants.
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

export default CardContainer;
