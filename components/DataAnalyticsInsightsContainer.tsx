import type { NextPage } from "next";
import styles from "./DataAnalyticsInsightsContainer.module.css";
import Image from 'next/image'

type wordTypeDefine = {
  dataforcard?:string
}
const DataAnalyticsInsightsContainer:  NextPage<wordTypeDefine> =({
  dataforcard
}) => {
  return (
    <section className={styles.dataAnalyticsInsights}>
      <div className={styles.environmentalImpactAssessmen}>
        <div className={styles.environmentalImpactAssessmenChild} />
        <div className={styles.gettingStartedWithLuxaEmisParent}>
          <h1 className={styles.gettingStartedWithContainer}>
            <span>{`Getting started with `}</span>
            <b className={styles.luxa}>{`LUXA `}</b>
            <span>{dataforcard}</span>
          </h1>
          {/* <div className={styles.footerFrame} /> */}
        </div>
        <div
          className={styles.contactUsToday}
        >{`Contact us today to discover how to seamlessly integrate Luxa’s emission management and reporting software into your projects. We will discuss how we can tailor our technology to meet your project's specific needs, ensuring efficiency, sustainability, and success every step of the way. `}</div>
        <div className={styles.ourStory}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.requestADemo}>Request a Demo</div>
          </button>
          <button className={styles.headerFrame}>
            <div className={styles.headerFrameChild} />
            <div className={styles.contactAnExpert}>Contact an expert</div>
          </button>
        </div>
        <div className={styles.environmentalImpactAssessmenInner}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <Image
                className={styles.group12160252371}
                loading="eager"
                alt=""
                src="/group-1216025237-1@2x.png"
              />
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <Image
                className={styles.group12160252361}
                loading="eager"
                alt=""
                src="/group-1216025236-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsInsightsContainer;
