import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ContactFormContainer.module.css";

type ContactFormContainerType = {
  imageSize?: string;
  contactMessage?: string;
  renovationImageUrl?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinHeight?: CSSProperties["minHeight"];
  propBottom?: CSSProperties["bottom"];
};

const ContactFormContainer: NextPage<ContactFormContainerType> = ({
  imageSize,
  contactMessage,
  renovationImageUrl,
  propPadding,
  propMinHeight,
  propBottom,
}) => {
  const registrationFormStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      minHeight: propMinHeight,
    };
  }, [propPadding, propMinHeight]);

  const groupRequestaDemoStyle: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <section className={styles.fAQNodes}>
      <div className={styles.fAQNodesChild} />
      <div className={styles.fAQNodes1}>
        <div className={styles.registrationForm} style={registrationFormStyle}>
          <div className={styles.registrationFormChild} />
          <div className={styles.frameRegistrationForm}>
            <img
              className={styles.groupRequestaDemo}
              loading="eager"
              alt=""
              src={imageSize}
              style={groupRequestaDemoStyle}
            />
            <h1 className={styles.contactUsFor}>{contactMessage}</h1>
          </div>
        </div>
        <div className={styles.mainform}>
          <form className={styles.nameFieldFrame}>
            <div className={styles.nameFieldFrameChild} />
            <div className={styles.emailFieldFrame}>
              <div className={styles.messageFieldFrame}>
                <div className={styles.name}>NAME:</div>
              </div>
              <input
                className={styles.lineFrameContactUs}
                placeholder="Full Name"
                type="text"
              />
              <img
                className={styles.emailFieldFrameChild}
                alt=""
                src="/line-48.svg"
              />
            </div>
            <div className={styles.emailFieldFrame1}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>EMAIL:</div>
              </div>
              <input
                className={styles.emailFieldFrameItem}
                placeholder="Your Email Address "
                type="text"
              />
              <img
                className={styles.emailFieldFrameInner}
                alt=""
                src="/line-48.svg"
              />
            </div>
            <div className={styles.emailFieldFrame2}>
              <div className={styles.phoneWrapper}>
                <div className={styles.phone}>PHONE:</div>
              </div>
              <input
                className={styles.frameInput}
                placeholder="Your Contact Number"
                type="text"
              />
              <img className={styles.lineIcon} alt="" src="/line-48.svg" />
            </div>
            <div className={styles.emailFieldFrame3}>
              <div className={styles.messageWrapper}>
                <div className={styles.message}>Message:</div>
              </div>
              <input
                className={styles.emailFieldFrameChild1}
                placeholder="Any Specific Message Type Here ...."
                type="text"
              />
              <img
                className={styles.emailFieldFrameChild2}
                alt=""
                src="/line-48.svg"
              />
            </div>
            <div className={styles.frameFAQs}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.submit}>Submit</div>
              </button>
            </div>
          </form>
        </div>
        <img
          className={styles.frameGettingStarted}
          loading="eager"
          alt=""
          src="/polygon-11.svg"
        />
      </div>
      <img
        className={styles.polygonBackgroundIcon}
        loading="eager"
        alt=""
        src={renovationImageUrl}
      />
    </section>
  );
};

export default ContactFormContainer;
