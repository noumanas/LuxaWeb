import type { NextPage } from "next";
import styles from "./ContactUsFormContainer.module.css";
import Footer from "./Footer";
import ContactFormContainer from "./ContactFormContainer";

const ContactUsFormContainer: NextPage = () => {
  return (
    <section className={styles.contactUsForm}>
      <ContactFormContainer
        imageSize="/frame1.svg"
        contactMessage="Connect with Us for a Project Consultation"
        renovationImageUrl="/frame-11@2x.png"
        propPadding="109px var(--padding-60xl)"
        propMinHeight="458px"
        propBottom="-74px"
      />
      <Footer/>
    </section>
  );
};

export default ContactUsFormContainer;
