import React from 'react';
import styles from './CardContainer.module.css';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

interface AccordionData {
  header: string;
  description: string;
}

interface CardContainerProps {
  accordionData: AccordionData[];
}

interface AccordionItemProps {
  header: string;
  description: string;
}

type CustomAccordionButtonProps = Readonly<{
  status: any;
  isMounted: boolean;
  isEnter: boolean;
  isResolved: boolean;
}>;

const AccordionItem: React.FC<AccordionItemProps> = ({ header, description }) => (
  <Item
    header={
      <>
        {header}
        <img className={styles.chevron} src="../plus.png" alt="Expand"/>
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
    {description}
  </Item>
);

const CardContainer: React.FC<CardContainerProps> = ({ accordionData }) => {
  return (
    <div className={styles.accordion}>
      <Accordion transition transitionTimeout={250}>
        {accordionData.map(({ header, description }, index) => (
          <AccordionItem key={index} header={header} description={description} />
        ))}
      </Accordion>
    </div>
  );
};

export default CardContainer;
