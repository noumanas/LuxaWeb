import type { NextPage } from "next";
import styles from "./SectionCard.module.css";

const SectionCard: NextPage = () => {
  return (
    <section className={styles.iconGroupParent}>
      <div className={styles.iconGroup}>
        <div className={styles.clickableButton}>
          <div className={styles.wrapperRectangle33}>
            <img
              className={styles.wrapperRectangle33Child}
              loading="eager"
              alt=""
              src="/rectangle-33@2x.png"
            />
          </div>
          <div className={styles.whoWeAreParent}>
            <h1 className={styles.whoWeAre}>Who We Are?</h1>
            <div className={styles.loremIpsumIsSimplyContainer}>
              <p className={styles.loremIpsumIsSimply}>
              At Luxa, we are pioneers at the intersection of technology and sustainability in the construction industry. Founded by a team of passionate innovators, engineers, and environmental advocates, we are dedicated to transforming how the world builds. Our mission is to empower construction professionals, architects, and engineers with cutting-edge software solutions that make sustainable building practices not just an aspiration but a reality.

We believe that a greener future is built on the foundations of today’s projects. That’s why Luxa offers comprehensive tools for managing green certifications and tracking carbon emissions, simplifying the complex journey toward sustainability. Our platform is designed to support projects of all sizes, from small residential builds to large commercial developments, ensuring that every project has the potential to contribute positively to our planet.

In everything we do, we strive to be more than just a software provider. We aim to be a partner in sustainability, helping our clients navigate the evolving landscape of environmental regulations and green building standards. With Luxa, achieving sustainability isn’t just easier; it’s a shared journey toward a more sustainable and responsible construction industry.

Who we are is defined by the change we seek to create: a world where every construction project is an opportunity for environmental stewardship. Join us in building that world.
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.ourValuesParent}>
          <h1 className={styles.ourValues}>Our Values</h1>
          <div className={styles.circleGroupParent}>
            <div className={styles.circleGroup}>
              <img
                className={styles.gcsLogoSymbol}
                loading="eager"
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
              <img
                className={styles.gcsLogoSymbol1}
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
              <img
                className={styles.gcsLogoSymbol2}
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
              <img
                className={styles.gcsLogoSymbol3}
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
              <img
                className={styles.gcsLogoSymbol4}
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
              <img
                className={styles.gcsLogoSymbol5}
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
              <img
                className={styles.gcsLogoSymbol6}
                alt=""
                src="/gcs-logo-symbol@2x.png"
              />
            </div>
            <div className={styles.sustainabilityFirstInnovatioContainer}>
              <p className={styles.sustainabilityFirst}>Sustainability First</p>
              <p className={styles.innovationAndExcellence}>
                Innovation and Excellence
              </p>
              <p className={styles.customerCentricApproach}>
                Customer-Centric Approach
              </p>
              <p className={styles.integrityAndTransparency}>
                Integrity and Transparency
              </p>
              <p className={styles.collaborationAndTeamwork}>
                Collaboration and teamwork
              </p>
              <p className={styles.empowermentThroughEducation}>
                Empowerment Through Education
              </p>
              <p className={styles.adaptabilityAndReslience}>
                Adaptability and Reslience
              </p>
            </div>
          </div>
          <div className={styles.luxasCommittedTo}>
            Luxa's committed to not just being a software provider but a
            responsible, forward-thinking player in the construction industry,
            dedicated to impacting the sector and the environment positively.
          </div>
        </div>
        <div className={styles.wrapperFrameGroupLine}>
          <img
            className={styles.frameGroupLine}
            loading="eager"
            alt=""
            src="/rectangle-79@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
