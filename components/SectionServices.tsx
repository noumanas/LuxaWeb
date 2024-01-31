import type { NextPage } from "next";
import styles from "./SectionServices.module.css";
import Mheader from "./mainheader";
const SectionServices: NextPage = () => {
  return (
    <section className={styles.companyInner}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-75.png" />
        {/* <header className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.colorLogoNoBackgroundWrapper}>
            <img
              className={styles.colorLogoNoBackground}
              loading="eager"
              alt=""
              src="/color-logo--no-background@2x.png"
            />
          </div>
          <div className={styles.calloutText}>
            <div className={styles.fRAME}>
              <div className={styles.services}>Services</div>
              <div className={styles.fRAME1}>
                <img
                  className={styles.stroke3Icon}
                  alt=""
                  src="/stroke-2.svg"
                />
              </div>
            </div>
            <div className={styles.email}>
              <div className={styles.pricing}>Pricing</div>
            </div>
            <div className={styles.fRAME2}>
              <div className={styles.resources}>Resources</div>
              <div className={styles.stroke2Wrapper}>
                <img
                  className={styles.stroke2Icon}
                  alt=""
                  src="/stroke-2.svg"
                />
              </div>
            </div>
            <b className={styles.company}>Company</b>
            <div className={styles.fRAME3}>
              <div className={styles.knowledgeCenter}>knowledge center</div>
              <div className={styles.stroke2Container}>
                <img
                  className={styles.stroke2Icon1}
                  alt=""
                  src="/stroke-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.services1}>
            <div className={styles.login}>Login</div>
            <button className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <img
                className={styles.iconlyboldarrowRight}
                alt=""
                src="/iconlyboldarrow--right.svg"
              />
              <div className={styles.requestADemo}>Request a demo</div>
            </button>
          </div>
        </header> */}
        <Mheader activeLink={""}/>
        <div className={styles.contactUs}>
          <div className={styles.partners}>
            <h1 className={styles.meetLuxaBuilding}>
              Meet Luxa: Building a Sustainable Future
            </h1>
            <div className={styles.dedicatedToTransforming}>
              Dedicated to transforming the construction industry with
              innovative technology, Luxa is at the forefront of integrating
              sustainability and efficiency into every project
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
