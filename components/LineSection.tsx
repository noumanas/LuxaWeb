import type { NextPage } from "next";
import styles from "./LineSection.module.css";
import React, { useState } from 'react';
const LineSection: NextPage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Toggle the state value when clicked
    setClicked(true)
  };
  const handleChande = () => {
    // Toggle the state value when clicked
    setClicked(false)
  };
  return (
    <section className={styles.lineSection}>
      <div className={styles.fullNameInput}>
        <div className={styles.emailInput} />
      </div>
      <div className={styles.messageInput}>
        <div className={styles.component2}>
          <div className={styles.frameColumn} />
          <div className={styles.servicesFrame} />
          <div className={styles.environmentalFrame}>
            <h1 className={styles.transformingSustainabilityEf}>
              Transforming Sustainability Efforts: Why Our Software Matters
            </h1>
            <div className={styles.groupLogoTextParent}>
              <div className={styles.groupLogoText} />
              <div className={clicked ? styles.groupLogoText1Clicked : styles.groupLogoText1}></div>
             
              <div className={styles.withoutLuxa} onClick={handleClick}>Without LUXA</div>
              <div className={styles.withLuxa} onClick={handleChande}>With LUXA</div>
            </div>
            {!clicked && (
              <div className={styles.rectangle}>
              <button className={styles.frameEmailOutreachParent}>
                <div className={styles.frameEmailOutreach} />
                <img
                  className={styles.logoNoSloganWhiteBackgroun}
                  alt=""
                  src="/logo-no-slogan-white-background@2x.png"
                />
              </button>
              <div className={styles.fullName}>
                <div className={styles.yourEmailAddress}>
                  <div className={styles.yourContactNumber}>
                    <div className={styles.footerLinksParent}>
                      <img
                        className={styles.footerLinksIcon}
                        loading="eager"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className={styles.frameBecomeAPartner} />
                      <div className={styles.streamlineCertificationWorkf}>
                        Streamline Certification Workflows
                      </div>
                      <div className={styles.ourSoftwareSimplifies}>
                        Our software simplifies this process, ensuring seamless
                        workflow management that saves you time and frustration.
                      </div>
                    </div>
                    <div className={styles.resources}>
                      <div className={styles.lineParent}>
                        <img
                          className={styles.lineIcon}
                          loading="eager"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <div className={styles.frameServices} />
                        <div className={styles.dataDrivenSustainabilityIns}>
                          Data-Driven Sustainability Insights
                        </div>
                        <div className={styles.harnessThePower}>
                          Harness the power of advanced analytics with Luxa.
                          Gain critical insights into your project’s
                          environmental impact and discover data-driven
                          strategies to enhance your sustainability performance
                        </div>
                      </div>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.frameChild}
                          loading="eager"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <div className={styles.frameItem} />
                        <div className={styles.automateGreenCompliance}>
                          Automate Green Compliance Reporting
                        </div>
                        <div className={styles.sayGoodbyeTo}>
                          Say goodbye to manual reporting burdens. Luxa
                          automates the generation of detailed sustainability
                          reports, ensuring accuracy and compliance with
                          environmental regulations.
                        </div>
                      </div>
                    </div>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameInner}
                        loading="eager"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className={styles.rectangleDiv} />
                      <div className={styles.empowerSustainableDecisionM}>
                        Empower Sustainable Decision-Making
                      </div>
                      <div className={styles.luxaProvidesThe}>
                        Luxa provides the tools and information you need to make
                        informed, eco-friendly decisions.
                      </div>
                    </div>
                  </div>
                  <div className={styles.headerContainerParent}>
                    <img
                      className={styles.headerContainerIcon}
                      loading="eager"
                      alt=""
                      src="/vector-12.svg"
                    />
                    <div className={styles.frameGroup} />
                    <div className={styles.elevateEfficiencyWithContainer}>
                      <p className={styles.elevateEfficiencyWith}>
                        Elevate Efficiency with Eco-Friendly Project
                      </p>
                      <p className={styles.management}>Management</p>
                    </div>
                    <div className={styles.integrateSustainablePractice}>
                      Integrate sustainable practices into every facet of your
                      project. Luxa’s platform enhances operational efficiency
                      while upholding your commitment to environmental
                      stewardship.
                    </div>
                  </div>
                </div>
                <div className={styles.textWrapper}>
                  <div className={styles.text}>
                    <div className={styles.fRAME}>
                      <div className={styles.tEXTParent}>
                        <img
                          className={styles.tEXT}
                          loading="eager"
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.pOLYGON} />
                        <div className={styles.revolutionizeYourEmission}>
                          Revolutionize Your Emission Tracking
                        </div>
                        <div className={styles.ourSoftwaresEmission}>
                          Our software's emission data analysis tools empower
                          you to efficiently optimize high emission activities,
                          resulting in resource savings and a reduced carbon
                          footprint.
                        </div>
                      </div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.frameChild1} />
                        <div className={styles.unlockEmissionReduction}>
                          Unlock Emission Reduction
                        </div>
                        <div className={styles.ourSoftwaresCollaboration}>
                          Our software's collaboration tools facilitate
                          real-time communication, ensuring all team members are
                          on the same page and moving towards shared goals.
                        </div>
                      </div>
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.frameChild3} />
                        <div className={styles.meetDeadlinesWith}>
                          Meet Deadlines with Ease
                        </div>
                        <div className={styles.everyProjectIs}>
                          Every project is unique, and so are its sustainability
                          needs. Luxa offers customizable solutions tailored to
                          your specific project goals, ensuring a perfect fit
                          for your green initiatives
                        </div>
                      </div>
                      <div className={styles.vectorParent1}>
                        <img
                          className={styles.frameChild4}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.frameChild5} />
                        <div className={styles.stayAheadOf}>
                          Stay Ahead of Environmental Regulations
                        </div>
                        <div className={styles.luxaKeepsYou}>
                          Our software partners with material databases to
                          create suggestions, helping you make sustainable
                          choices efficiently.
                        </div>
                      </div>
                    </div>
                    <div className={styles.messageParent}>
                      <img
                        className={styles.messageIcon}
                        alt=""
                        src="/vector-13.svg"
                      />
                      <div className={styles.frame} />
                      <div className={styles.buildingASustainable}>
                        Building a Sustainable Future with Luxa
                      </div>
                      <div className={styles.joinUsIn}>
                        Join us in shaping a greener, more sustainable
                        construction industry. With Luxa, you’re not just
                        building projects; you’re building a better future
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
            {clicked && (
              <div className={styles.rectangle}>
              <button className={styles.frameEmailOutreachParent}>
                {/* <div className={styles.frameEmailOutreach} /> */}
                <img
                  className={styles.closebtn}
                  alt=""
                  src="/redclose.svg"
                />
              </button>
              <div className={styles.fullName}>
                <div className={styles.yourEmailAddress}>
                  <div className={styles.yourContactNumber}>
                    <div className={styles.footerLinksParent}>
                      <img
                        className={styles.footerLinksIcon}
                        loading="eager"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className={styles.frameBecomeAPartner} />
                      <div className={styles.streamlineCertificationWorkf}>
                      Navigating Certification Maze Alone
                      </div>
                      <div className={styles.ourSoftwareSimplifies}>
                      Achieving sustainability certifications like LEED becomes a daunting task as teams grapple with complex requirements and extensive paperwork on their own.
                      </div>
                    </div>
                    <div className={styles.resources}>
                      <div className={styles.lineParent}>
                        <img
                          className={styles.lineIcon}
                          loading="eager"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <div className={styles.frameServices} />
                        <div className={styles.dataDrivenSustainabilityIns}>
                        Lack of Data-Driven Sustainability Insight
                        </div>
                        <div className={styles.ourSoftwareSimplifies}>
                        Without the analytics, construction projects miss out on valuable data insights, hindering informed decision-making and optimal sustainability strategies
                        </div>
                      </div>
                      <div className={styles.vectorParent}>
                        <img
                          className={styles.frameChild}
                          loading="eager"
                          alt=""
                          src="/vector-12.svg"
                        />
                        <div className={styles.frameItem} />
                        <div className={styles.automateGreenCompliance}>
                        Burdened by Manual Green Compliance Reporting
                        </div>
                        <div className={styles.ourSoftwareSimplifies}>
                        The absence of Luxa means spending countless hours on manual compliance reporting, leading to inefficiencies and potential inaccuracies in meeting environmental regulations.
                        </div>
                      </div>
                    </div>
                    <div className={styles.vectorGroup}>
                      <img
                        className={styles.frameInner}
                        loading="eager"
                        alt=""
                        src="/vector-12.svg"
                      />
                      <div className={styles.rectangleDiv} />
                      <div className={styles.empowerSustainableDecisionM}>
                      Challenges in Sustainable Decision-Making
                      </div>
                      <div className={styles.ourSoftwareSimplifies}>
                      Making environmentally responsible choices becomes more challenging without Luxa’s guidance, potentially compromising the Eco-friendliness of construction projects.
                      </div>
                    </div>
                  </div>
                  <div className={styles.headerContainerParent}>
                    <img
                      className={styles.headerContainerIcon}
                      loading="eager"
                      alt=""
                      src="/vector-12.svg"
                    />
                    <div className={styles.frameGroup} />
                    <div className={styles.elevateEfficiencyWithContainer}>
                      <p className={styles.elevateEfficiencyWith}>
                      Compromised Efficiency in Eco-Friendly Project Management
                      </p>
                      <p className={styles.management}>Management</p>
                    </div>
                    <div className={styles.ourSoftwareSimplifies}>
                    Managing projects with a sustainability focus lacks efficiency and effectiveness without Luxa’s integrated tools, often leading to delays and increased costs.
                    </div>
                  </div>
                </div>
                <div className={styles.textWrapper}>
                  <div className={styles.text}>
                    <div className={styles.fRAME}>
                      <div className={styles.tEXTParent}>
                        <img
                          className={styles.tEXT}
                          loading="eager"
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.pOLYGON} />
                        <div className={styles.revolutionizeYourEmission}>
                        Struggling with Complex Emissions Tracking
                        </div>
                        <div className={styles.ourSoftwareSimplifies}>
                        Tracking and managing project emissions can be a manual, error-prone process, often leading to inefficient monitoring and missed opportunities for improvement.
                        </div>
                      </div>
                      <div className={styles.vectorContainer}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.frameChild1} />
                        <div className={styles.unlockEmissionReduction}>
                        Fragmented Collaboration
                        </div>
                        <div className={styles.ourSoftwareSimplifies}>
                        The collaborative potential in building sustainable projects is significantly reduced without Luxa, as team members work in silos, missing out on shared knowledge and strategies.
                        </div>
                      </div>
                      <div className={styles.groupDiv}>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.frameChild3} />
                        <div className={styles.meetDeadlinesWith}>
                        One-Size-Fits-All Approach to Sustainability
                        </div>
                        <div className={styles.ourSoftwareSimplifies}>
                        Without customizable solutions, construction projects are often forced to adopt a generic approach to sustainability, which may not align with specific project goals or requirements.
                        </div>
                      </div>
                      <div className={styles.vectorParent1}>
                        <img
                          className={styles.frameChild4}
                          alt=""
                          src="/vector-13.svg"
                        />
                        <div className={styles.frameChild5} />
                        <div className={styles.stayAheadOf}>
                        Falling Behind on Environmental Regulations
                        </div>
                        <div className={styles.ourSoftwareSimplifies}>
                        Staying updated with and complying to the latest environmental regulations becomes a constant challenge without the comprehensive support provided by Luxa.
                        </div>
                      </div>
                    </div>
                    <div className={styles.messageParent}>
                      <img
                        className={styles.messageIcon}
                        alt=""
                        src="/vector-13.svg"
                      />
                      <div className={styles.frame} />
                      <div className={styles.buildingASustainable}>
                      Missed Opportunities in Building a Sustainable Future
                      </div>
                      <div className={styles.ourSoftwareSimplifies}>
                      Without the advantages offered by Luxa, construction projects miss critical opportunities to contribute positively to the environment, affecting long-term sustainability goals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
          
          <div className={styles.atGcsWe}>
           
            At Luxa, we don't just offer a service; we offer a transformative
            experience that maximizes your sustainability impact. Choose us to
            drive your projects forward with purpose and achieve certifications
            that truly make a difference.
          </div>
          <button className={styles.component2Inner}>
            <div className={styles.footerParent}>
              <div className={styles.footer} />
              <div className={styles.discoverTheValue}>Discover The Value</div>
            </div>
          </button>
        </div>
        <div className={styles.messageInputChild} />
      </div>
    </section>
  );
};

export default LineSection;
