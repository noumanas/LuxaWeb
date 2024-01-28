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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className={styles.itWasPopularised}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem IpsumLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <p className={styles.itHasSurvived}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions.
              </p>
              <p className={styles.loremIpsumIsSimply1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
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
