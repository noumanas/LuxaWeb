import type { NextPage } from "next";
import Group1 from "./Group1";
import styles from "./FrameComponent.module.css";
import Image from 'next/image'

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.wrapperGroup12160252422Parent}>
        <div className={styles.wrapperGroup12160252422}>
          <Image
            className={styles.group12160252422}
            loading="eager"
            alt=""
            src="/group-1216025242-21@2x.png"
          />
        </div>
        <div className={styles.environmentalImpactAssessmenParent}>
          <h1 className={styles.environmentalImpactAssessmen}>
            Environmental Impact Assessments for Any Project
          </h1>
          <div className={styles.exploreLuxasDetailed}>
            Explore Luxa's detailed analysis of the environmental footprint of
            your construction projects, ensuring adherence to sustainability
            standards and regulatory compliance at every stage.
          </div>
        </div>
      </div>
      <div className={styles.textParent}>
        <div className={styles.text} />
        <div className={styles.group}>
          <h1 className={styles.optimizeYourBusinessContainer}>
            <span>{`Optimize your business intelligence with trusted `}</span>
            <b className={styles.luxa}>LUXA</b>
          </h1>
          {/* <div className={styles.frame} /> */}
        </div>
      </div>
      <div className={styles.groupParent}>
        <Group1
          frame="/rectangle-62@2x.png"
          advancedSustainabilityAna="Advanced Sustainability Analytics"
          harnessDataDrivenSustaina="Harness data-driven sustainability insights to make informed decisions. Our advanced analytics empower you to optimize eco-friendly practices and enhance your environmental impact."
        />
        <Group1
          frame="/rectangle-73@2x.png"
          advancedSustainabilityAna="Effortless Team Collaboration"
          harnessDataDrivenSustaina="Collaborate effortlessly across teams for impactful sustainability projects. Our platform's integrated tools foster synergy, enabling architects, contractors, and stakeholders to work together seamlessly."
        />
        <Group1
          frame="/rectangle-74@2x.png"
          advancedSustainabilityAna="Extensive Data Integration"
          harnessDataDrivenSustaina="Expand your horizons with our diverse range of data connectors. Access over 500+ connectors to bridge the gap between data sources, from on-premises to cloud, enabling comprehensive data-driven decisions."
        />
      </div>
    </section>
  );
};

export default FrameComponent;
