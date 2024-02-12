import type { NextPage } from "next";
import styles from "./LineSectionMobile.module.css";
import React, { useState } from 'react';
const LineSectionMobile: NextPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Toggle the state value when clicked
    setClicked(true)
  };
  const handleChande = () => {
    // Toggle the state value when clicked
    setClicked(false)
  };
  const data = [
    {
    heading: "Navigating Certification Maze Alone",
    peragraph : "Achieving sustainability certifications like LEED becomes a daunting task as teams grapple with complex requirements and extensive paperwork on their own."
    },
    {
      heading : "Lack of Data-Driven Sustainability Insight",
      peragraph:"Without the analytics, construction projects miss out on valuable data insights, hindering informed decision-making and optimal sustainability strategies"
    },
    {
      heading:"Burdened by Manual Green Compliance Reporting",
      peragraph:"The absence of Luxa means spending countless hours on manual compliance reporting, leading to inefficiencies and potential inaccuracies in meeting environmental regulations."
    },
    {
      heading:"Challenges in Sustainable Decision-Making",
      peragraph:"Making environmentally responsible choices becomes more challenging without Luxa’s guidance, potentially compromising the Eco-friendliness of construction projects."
    },
    {
      heading:"Compromised Efficiency in Eco-Friendly Project Management",
      peragraph:"Managing projects with a sustainability focus lacks efficiency and effectiveness without Luxa’s integrated tools, often leading to delays and increased costs."
    },
    {
      heading:"Struggling with Complex Emissions Tracking",
      peragraph:"Tracking and managing project emissions can be a manual, error-prone process, often leading to inefficient monitoring and missed opportunities for improvement."
    },
    {
      heading:"Fragmented Collaboration",
      peragraph:"The collaborative potential in building sustainable projects is significantly reduced without Luxa, as team members work in silos, missing out on shared knowledge and strategies."
    },
    {
      heading:"One-Size-Fits-All Approach to Sustainability",
      peragraph:"Without customizable solutions, construction projects are often forced to adopt a generic approach to sustainability, which may not align with specific project goals or requirements."
    },
    {
      heading:"Falling Behind on Environmental Regulations",
      peragraph:"Staying updated with and complying to the latest environmental regulations becomes a constant challenge without the comprehensive support provided by Luxa."
    },
    {
      heading:"Missed Opportunities in Building a Sustainable Future",
      peragraph:"Without the advantages offered by Luxa, construction projects miss critical opportunities to contribute positively to the environment, affecting long-term sustainability goals."
    }
  ]
  const withLuxadata =[
    {
      heading:"Streamline Certification Workflows",
      peragraph:"Our software simplifies this process, ensuring seamless workflow management that saves you time and frustration."
    },
    {
      heading:"Data-Driven Sustainability Insights",
      peragraph:"Harness the power of advanced analytics with Luxa. Gain critical insights into your project’s environmental impact and discover data-driven strategies to enhance your sustainability performance."
    },
    {
      heading:"Automate Green Compliance Reporting",
      peragraph:"Say goodbye to manual reporting burdens. Luxa automates the generation of detailed sustainability reports, ensuring accuracy and compliance with environmental regulations."
    },
    {
      heading:"Empower Sustainable Decision-Making",
      peragraph:"Luxa provides the tools and information you need to make informed, eco-friendly decisions."
    },
    {
      heading:"Elevate Efficiency with Eco-Friendly Project Management",
      peragraph:"Integrate sustainable practices into every facet of your project. Luxa’s platform enhances operational efficiency while upholding your commitment to environmental stewardship."
    },
    {
      heading:"Revolutionize Your Emission Tracking",
      peragraph:"Our software's emission data analysis tools empower you to efficiently optimize high emission activities, resulting in resource savings and a reduced carbon footprint."
    },
    {
      heading:"Unlock Emission Reduction",
      peragraph:"Our software's collaboration tools facilitate real-time communication, ensuring all team members are on the same page and moving towards shared goals."
    },
    {
      heading:"Meet Deadlines with Ease",
      peragraph:"Every project is unique, and so are its sustainability needs. Luxa offers customizable solutions tailored to your specific project goals, ensuring a perfect fit for your green initiatives"
    },
    {
      heading:"Stay Ahead of Environmental Regulations",
      peragraph:"Luxa keeps you informed and compliant, mitigating risks and securing your reputation as a sustainability leader."
    },
    {
      heading:"Building a Sustainable Future with Luxa",
      peragraph:"Join us in shaping a greener, more sustainable construction industry. With Luxa, you’re not just building projects; you’re building a better future"
    },

  ]
  const renderItemswithLuxa =  withLuxadata.map((item, index) => (

    <div key={index} className={styles.item}>
      <div className={styles.heading}>
        {item.heading}
      </div>
      <div className={styles.peragraph}>
        {item.peragraph}
      </div>
    </div>
  ));
const renderItemswitoutLuxa =  data.map((item, index) => (
  <div key={index} className={styles.item}>
    <div className={styles.heading}>
      {item.heading}
    </div>
    <div className={styles.peragraph}>
      {item.peragraph}
    </div>
  </div>
));

  return (
    <section className={styles.lineSection}>
      <div className={styles.main}>
        <div className={styles.mainheading}>
        Transforming Sustainability Efforts: Why Our Software Matters
        </div>
        <div className={styles.operationBTn}>
          <div className={clicked ? styles.withoutLuxatwo :styles.withoutLuxa} onClick={handleChande}>Without Luxa</div>
          <div className={clicked ? styles.withLuxatwo:  styles.withLuxa} onClick={handleClick}>With Luxa</div>
        </div>
        <div className={styles.withContents}>
          <div className={styles.imageswithoutluxa}>
            {!clicked? ( <img alt=""  src="/redclose.svg"/>):( <img alt="" className={styles.logoluxa} src="/logo-no-slogan-white-background@2x.png"/>)} 
          </div>
          {!clicked? (
          
          <>{renderItemswitoutLuxa}</>

          ):(<>{renderItemswithLuxa}</>)}
        </div>
      </div>
    </section>
  );
};

export default LineSectionMobile;
