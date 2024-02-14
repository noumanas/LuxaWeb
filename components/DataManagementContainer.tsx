import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./DataManagementContainer.module.css";

type DataManagementContainerType = {
  featureDescription?: string;
  sustainabilityDataManagem?: string;
  dataManagementImageUrl?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
};

const DataManagementContainer: NextPage<DataManagementContainerType> = ({
  featureDescription,
  sustainabilityDataManagem,
  dataManagementImageUrl,
  propFlex,
  propAlignSelf,
  propPadding,
  propPadding1,
  propHeight,
}) => {
  const contentAreaStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propAlignSelf, propPadding]);

  const serviceSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const luxaHarnessesAdvancedStyle: CSSProperties = useMemo(() => {
    return {
      height: '100%',
    };
  }, [propHeight]);

  return (
    <div className={styles.contentArea} style={contentAreaStyle}>
      <div className={styles.serviceSection} style={serviceSectionStyle}>
        <div className={styles.projectRegistration}>
          <h1 className={styles.advancedDataManagement}>
            {featureDescription}
          </h1>
          <div
            className={styles.luxaHarnessesAdvanced}
            style={luxaHarnessesAdvancedStyle}
          >
            {sustainabilityDataManagem}
          </div>
        </div>
      </div>
      <div className={styles.wrapperGroup33401}>
        <img
          className={styles.wrapperGroup33401Child}
          loading="eager"
          alt=""
          src={dataManagementImageUrl}
        />
      </div>
    </div>
  );
};

export default DataManagementContainer;
