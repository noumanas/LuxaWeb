import type { NextPage } from "next";
import EngageStakeholdersContainer from "./EngageStakeholdersContainer";
import styles from "./SustainabilityForm.module.css";

const SustainabilityForm: NextPage = () => {
  return (
    <div className={styles.fAQsFrame}>
      <EngageStakeholdersContainer
        reportingAndDisclosuresTe="Leverage ESG data to streamline reporting and disclosures; engage with customers, employees, investors, and other stakeholders."
        sustainabilityGoalsText="Achieve Sustainability Goals"
        systemOfRecordText="Bring audit, risk, compliance, internal control, and ESG management into a single system of record."
        esgDataAndEvidenceText="Centralize all ESG data and evidence collection to work efficiently with internal and external auditors."
        propGap="35px"
        propMinHeight="unset"
        propHeight="108px"
      />
      <div className={styles.howToRegister}>
        <div className={styles.luxaLEEDSoftware}>
          <div className={styles.supportTeam}>
            <h1 className={styles.integratingSustainabilityIn}>
              Integrating Sustainability in New Construction
            </h1>
            <div className={styles.luxaSeamlesslyIntegrates}>
              Luxa seamlessly integrates sustainable practices into new
              construction projects by providing real-time data on energy
              efficiency, material sustainability, and emissions tracking. Its
              comprehensive tools guide you through the complex process of
              achieving green building certifications, ensuring every new
              construction project not only adheres to but also champions
              environmental and sustainability standards.
            </div>
          </div>
          <div className={styles.wrapperGreenBuilding1}>
            <img
              className={styles.greenBuilding1Icon}
              loading="eager"
              alt=""
              src="/greenbuilding-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.registerFirstProject}>
        <div className={styles.lEEDCertificationManageme}>
          <div className={styles.wrapper20211215113225Constru}>
            <img
              className={styles.constructionIndustryv1Icon}
              loading="eager"
              alt=""
              src="/20211215113225constructionindustryv-1@2x.png"
            />
          </div>
          <div className={styles.dataAnalyticsInsights}>
            <h1 className={styles.revolutionizingResidentialCo}>
              Revolutionizing Residential Construction Management
            </h1>
            <div className={styles.inResidentialConstruction}>
              In residential construction, from individual homes to expansive
              housing developments, Luxa streamlines project management by
              offering advanced tools for efficient planning, resource
              allocation, and sustainability integration. It simplifies complex
              tasks like compliance with carbon reduction goals, environmental
              regulations, and green certification processes, ensuring that each
              residential project not only meets the highest standards of
              quality and efficiency but also contributes positively to
              environmental sustainability.
            </div>
          </div>
        </div>
        <div className={styles.fAQsGroup}>
          <div className={styles.faqFrame}>
            <h1 className={styles.streamliningProjectLifecycle}>
              Streamlining Project Lifecycle from Groundbreaking to Ribbon
              Cutting
            </h1>
            <div className={styles.luxaEmpowersYour}>
              Luxa empowers your new construction projects with advanced tools
              from the very outset, guiding you seamlessly from initial planning
              and design through to the construction phase and up to the final
              inspection. It integrates key project elements, ensuring
              consistency, efficiency, and compliance every step of the way,
              culminating in a streamlined, successful project completion.
            </div>
          </div>
          <div className={styles.wrapperSigningCropped1}>
            <img
              className={styles.signingCropped1Icon}
              loading="eager"
              alt=""
              src="/signingcropped-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.contactAnExpertFrame}>
        <div className={styles.lineFrame}>
          <div className={styles.wrapperWarehouseForklift21}>
            <img
              className={styles.warehouseForklift21Icon}
              loading="eager"
              alt=""
              src="/warehouse-forklift2-1@2x.png"
            />
          </div>
          <div className={styles.doesLuxaLEEDWork}>
            <h1 className={styles.transformingCommercialConstr}>
              Transforming Commercial Construction Operations
            </h1>
            <div className={styles.luxaBringsUnparalleled}>
              Luxa brings unparalleled efficiency and precision to commercial
              construction projects, be it office buildings, retail spaces, or
              expansive industrial facilities. Our platform excels in
              coordinating complex tasks, ensuring compliance with regulations,
              and facilitating sustainable building practices, all while
              providing real-time insights for timely decision-making and
              project optimization.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.accessToDataAfterCompletio}>
        <div className={styles.connectUsConsultation}>
          <div className={styles.fullNameFrame}>
            <h1 className={styles.dataDrivenDecisionMaking}>
              Data-Driven Decision Making for Construction Excellence
            </h1>
            <div className={styles.inTheDynamic}>
              In the dynamic landscape of new construction, Luxa empowers
              project managers and stakeholders with crucial data analytics and
              insights, enabling them to make informed, strategic decisions that
              significantly enhance project efficiency and outcome. By
              harnessing the power of Luxa's real-time data analysis,
              construction teams can anticipate challenges, optimize resource
              allocation, and ensure project milestones are met with precision
              and within budget.
            </div>
          </div>
        </div>
        <div className={styles.wrapperMessageTypeFrame}>
          <img
            className={styles.messageTypeFrame}
            loading="eager"
            alt=""
            src="/1692776211544-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityForm;
