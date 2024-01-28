import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./EnvironmentImpactAssessment.module.css";

type EnvironmentImpactAssessmentType = {
  weAreHereToHelpYouGrowYou?: string;
  messageLabel?: string;
  line48?: string;
  line49?: string;
  line50?: string;
  line51?: string;
  polygon1?: string;
  socialMediaIconsFrame?: string;

  /** Style props */
  contactUsFramePadding?: CSSProperties["padding"];
  contactUsFrameGap?: CSSProperties["gap"];
  fullNameLabelWidth?: CSSProperties["width"];
  fullNameLabelMinHeight?: CSSProperties["minHeight"];
  fullNameLabelPadding?: CSSProperties["padding"];
  weAreHereWidth?: CSSProperties["width"];
  weAreHereAlignSelf?: CSSProperties["alignSelf"];
  weAreHereHeight?: CSSProperties["height"];
  nAMEDisplay?: CSSProperties["display"];
  eMAILDisplay?: CSSProperties["display"];
  pHONEDisplay?: CSSProperties["display"];
  messageDisplay?: CSSProperties["display"];
};

const EnvironmentImpactAssessment: NextPage<
  EnvironmentImpactAssessmentType
> = ({
  weAreHereToHelpYouGrowYou,
  messageLabel,
  line48,
  line49,
  line50,
  line51,
  polygon1,
  socialMediaIconsFrame,
  contactUsFramePadding,
  contactUsFrameGap,
  fullNameLabelWidth,
  fullNameLabelMinHeight,
  fullNameLabelPadding,
  weAreHereWidth,
  weAreHereAlignSelf,
  weAreHereHeight,
  nAMEDisplay,
  eMAILDisplay,
  pHONEDisplay,
  messageDisplay,
}) => {
  const contactUsFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: contactUsFramePadding,
      gap: contactUsFrameGap,
    };
  }, [contactUsFramePadding, contactUsFrameGap]);

  const fullNameLabelStyle: CSSProperties = useMemo(() => {
    return {
      width: fullNameLabelWidth,
      minHeight: fullNameLabelMinHeight,
      padding: fullNameLabelPadding,
    };
  }, [fullNameLabelWidth, fullNameLabelMinHeight, fullNameLabelPadding]);

  const weAreHereStyle: CSSProperties = useMemo(() => {
    return {
      width: weAreHereWidth,
      alignSelf: weAreHereAlignSelf,
      height: weAreHereHeight,
    };
  }, [weAreHereWidth, weAreHereAlignSelf, weAreHereHeight]);

  const nAMEStyle: CSSProperties = useMemo(() => {
    return {
      display: nAMEDisplay,
    };
  }, [nAMEDisplay]);

  const eMAILStyle: CSSProperties = useMemo(() => {
    return {
      display: eMAILDisplay,
    };
  }, [eMAILDisplay]);

  const pHONEStyle: CSSProperties = useMemo(() => {
    return {
      display: pHONEDisplay,
    };
  }, [pHONEDisplay]);

  const messageStyle: CSSProperties = useMemo(() => {
    return {
      display: messageDisplay,
    };
  }, [messageDisplay]);

  return (
    <section className={styles.environmentImpactAssessment}>
      <div className={styles.environmentImpactAssessmentChild} />
      <div className={styles.nameInputField}>
        <div className={styles.contactUsFrame} style={contactUsFrameStyle}>
          <div className={styles.contactUsFrameChild} />
          <div className={styles.fullNameLabel} style={fullNameLabelStyle}>
            <h1 className={styles.weAreHere} style={weAreHereStyle}>
              {weAreHereToHelpYouGrowYou}
            </h1>
          </div>
          <img
            className={styles.messageLabelIcon}
            loading="eager"
            alt=""
            src={messageLabel}
          />
        </div>
        <form className={styles.submitButton}>
          <div className={styles.submitButtonChild} />
          <div className={styles.partnershipsFrame}>
            <div className={styles.contactUsSection}>
              <div className={styles.name} style={nAMEStyle}>
                NAME:
              </div>
            </div>
            <input
              className={styles.privacyPolicyLink}
              placeholder="Full Name"
              type="text"
            />
            <img
              className={styles.partnershipsFrameChild}
              alt=""
              src={line48}
            />
          </div>
          <div className={styles.partnershipsFrame1}>
            <div className={styles.emailWrapper}>
              <div className={styles.email} style={eMAILStyle}>
                EMAIL:
              </div>
            </div>
            <input
              className={styles.partnershipsFrameItem}
              placeholder="Your Email Address "
              type="text"
            />
            <img
              className={styles.partnershipsFrameInner}
              alt=""
              src={line49}
            />
          </div>
          <div className={styles.partnershipsFrame2}>
            <div className={styles.phoneWrapper}>
              <div className={styles.phone} style={pHONEStyle}>
                PHONE:
              </div>
            </div>
            <input
              className={styles.frameInput}
              placeholder="Your Contact Number"
              type="text"
            />
            <img className={styles.lineIcon} alt="" src={line50} />
          </div>
          <div className={styles.partnershipsFrame3}>
            <div className={styles.messageWrapper}>
              <div className={styles.message} style={messageStyle}>
                Message:
              </div>
            </div>
            <input
              className={styles.partnershipsFrameChild1}
              placeholder="Any Specific Message Type Here ...."
              type="text"
            />
            <img
              className={styles.partnershipsFrameChild2}
              alt=""
              src={line51}
            />
          </div>
          <div className={styles.footerFrame}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.submit}>Submit</div>
            </button>
          </div>
        </form>
        <img
          className={styles.nameInputFieldChild}
          loading="eager"
          alt=""
          src={polygon1}
        />
      </div>
      <img
        className={styles.socialMediaIconsFrame}
        loading="eager"
        alt=""
        src={socialMediaIconsFrame}
      />
    </section>
  );
};

export default EnvironmentImpactAssessment;
