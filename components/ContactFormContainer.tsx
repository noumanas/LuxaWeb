import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import React, { useState } from "react";
import {contactApiHandelr} from "../api-helpers/api-helpers"
import styles from "./ContactFormContainer.module.css";
import Image from 'next/image'

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    const payload ={
      name,
      email, 
      phone, 
      message
    }
     // Call the contact API handler function
     contactApiHandelr(payload)
     .then((res) => {
       console.log("API response:", res);
       // Reset form after successful submission
       setName("");
       setEmail("");
       setPhone("");
       setMessage("");
     })
     .catch((error) => {
       console.error("API error:", error);
       // Handle error here (e.g., display error message to user)
     });
    // Reset the form after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
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
              src={imageSize ||"../shared/lib/get-img-props"}
              style={groupRequestaDemoStyle}
            />
            <h1 className={styles.contactUsFor}>{contactMessage}</h1>
          </div>
        </div>
        <div className={styles.mainform}>
          <form className={styles.nameFieldFrame} onSubmit={handleFormSubmit}>
            <div className={styles.nameFieldFrameChild} />
            <div className={styles.emailFieldFrame}>
              <div className={styles.messageFieldFrame}>
                <div className={styles.name}>NAME:</div>
              </div>
              <input
                value={name}
                className={styles.emailFieldFrameItem}
                placeholder="Full Name"
                type="text"
                onChange={(e) => setName(e.target.value)}

              />
              {/* <Image
                className={styles.emailFieldFrameChild}
                alt=""
                src="/line-48.svg"
              /> */}
            </div>
            <div className={styles.emailFieldFrame}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>EMAIL:</div>
              </div>
              <input
                className={styles.emailFieldFrameItem}
                placeholder="Your Email Address "
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}


              />
              <img
                className={styles.emailFieldFrameInner}
                alt=""
                src="/line-48.svg"
              />
            </div>
            <div className={styles.emailFieldFrame}>
              <div className={styles.phoneWrapper}>
                <div className={styles.phone}>PHONE:</div>
              </div>
              <input
                className={styles.emailFieldFrameItem}
                placeholder="Your Contact Number"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}


              />
              <img className={styles.lineIcon} alt="" src="/line-48.svg" />
            </div>
            <div className={styles.emailFieldFrame}>
              <div className={styles.messageWrapper}>
                <div className={styles.message}>Message:</div>
              </div>
              <input
                className={styles.emailFieldFrameItem}
                placeholder="Any Specific Message Type Here ...."
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}


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
        src={renovationImageUrl||'../shared/lib/get-img-props'}
      />
    </section>
  );
};

export default ContactFormContainer;

