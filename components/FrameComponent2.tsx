import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";
import Mheader from "./mainheader";

type FrameComponent2Type = {
  stroke3?: string;
  stroke2?: string;
  yourSustainabilityCommand?: string;
  gainUnparalleledInsightsI?: string;

  /** Style props */
  frameSectionPadding?: CSSProperties["padding"];
  frameDivGap?: CSSProperties["gap"];
  servicesColor?: CSSProperties["color"];
  servicesFontWeight?: CSSProperties["fontWeight"];
  frameDivGap1?: CSSProperties["gap"];
  resourcesColor?: CSSProperties["color"];
  resourcesFontWeight?: CSSProperties["fontWeight"];
  advancedAnalyticsGap?: CSSProperties["gap"];
  footerGap?: CSSProperties["gap"];
  yourSustainabilityCommandHeight?: CSSProperties["height"];
  gainUnparalleledInsightsHeight?: CSSProperties["height"];
  linkedInIconWidth?: CSSProperties["width"];
  linkedInIconHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  stroke3,
  stroke2,
  yourSustainabilityCommand,
  gainUnparalleledInsightsI,
  frameSectionPadding,
  frameDivGap,
  servicesColor,
  servicesFontWeight,
  frameDivGap1,
  resourcesColor,
  resourcesFontWeight,
  advancedAnalyticsGap,
  footerGap,
  yourSustainabilityCommandHeight,
  gainUnparalleledInsightsHeight,
  linkedInIconWidth,
  linkedInIconHeight,
  rectangleDivWidth,
  rectangleDivHeight,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameSectionPadding,
    };
  }, [frameSectionPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const servicesStyle: CSSProperties = useMemo(() => {
    return {
      color: servicesColor,
      fontWeight: servicesFontWeight,
    };
  }, [servicesColor, servicesFontWeight]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap1,
    };
  }, [frameDivGap1]);

  const resourcesStyle: CSSProperties = useMemo(() => {
    return {
      color: resourcesColor,
      fontWeight: resourcesFontWeight,
    };
  }, [resourcesColor, resourcesFontWeight]);

  const advancedAnalyticsStyle: CSSProperties = useMemo(() => {
    return {
      gap: advancedAnalyticsGap,
    };
  }, [advancedAnalyticsGap]);

  const footerStyle: CSSProperties = useMemo(() => {
    return {
      gap: footerGap,
    };
  }, [footerGap]);

  const yourSustainabilityCommandStyle: CSSProperties = useMemo(() => {
    return {
      height: yourSustainabilityCommandHeight,
    };
  }, [yourSustainabilityCommandHeight]);

  const gainUnparalleledInsightsStyle: CSSProperties = useMemo(() => {
    return {
      height: gainUnparalleledInsightsHeight,
    };
  }, [gainUnparalleledInsightsHeight]);

  const linkedInIconStyle: CSSProperties = useMemo(() => {
    return {
      width: linkedInIconWidth,
      height: linkedInIconHeight,
    };
  }, [linkedInIconWidth, linkedInIconHeight]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [rectangleDivWidth, rectangleDivHeight]);

  return (
    <section className={styles.servicesMainInner} style={frameSectionStyle}>
      <div className={styles.rectangleParent} style={frameDiv3Style}>
        <div className={styles.frameChild} />
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
          <div className={styles.frameParent}>
            <div className={styles.servicesParent}>
              <b className={styles.services} style={servicesStyle}>
                Services
              </b>
              <div className={styles.stroke3Wrapper}>
                <img className={styles.stroke3Icon} alt="" src={stroke3} />
              </div>
            </div>
            <div className={styles.pricing}>Pricing</div>
            <div className={styles.resourcesParent} style={frameDiv4Style}>
              <div className={styles.resources} style={resourcesStyle}>
                Resources
              </div>
              <div className={styles.stroke2Wrapper}>
                <img className={styles.stroke2Icon} alt="" src={stroke2} />
              </div>
            </div>
            <div className={styles.company}>Company</div>
            <div className={styles.knowledgeCenterParent}>
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
          <div className={styles.loginParent}>
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
        <Mheader/>
        <div
          className={styles.advancedAnalytics}
          style={advancedAnalyticsStyle}
        >
          <div className={styles.footer} style={footerStyle}>
            <h1
              className={styles.yourSustainabilityCommand}
              style={yourSustainabilityCommandStyle}
            >
              {yourSustainabilityCommand}
            </h1>
            <div
              className={styles.gainUnparalleledInsights}
              style={gainUnparalleledInsightsStyle}
            >
              {gainUnparalleledInsightsI}
            </div>
          </div>
          <div className={styles.linkedInIcon} style={linkedInIconStyle}>
            <div
              className={styles.linkedInIconChild}
              style={rectangleDiv1Style}
            />
            <div className={styles.scroll}>Scroll</div>
            <img
              className={styles.linkedInIconItem}
              loading="eager"
              alt=""
              src="/arrow-7.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
