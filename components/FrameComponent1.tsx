import type { NextPage } from "next";
import styles from "./FrameComponent1.module.css";
import VideoModal from '../components/VideoModal';
import { useState } from "react";
const FrameComponent1: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.visualizeYourOngoingProjectWrapper}>
          <h1 className={styles.visualizeYourOngoing}>
            Visualize Your Ongoing Projects and Certification Progress
          </h1>
        </div>
        <div className={styles.getABirdsEye}>
          Get a bird's-eye view of all your ongoing projects neatly organized
          for easy navigation. Dive into each project's details and milestones
          with just a click. Stay in control and informed as you manage multiple
          projects simultaneously.
        </div>
      </div>
      <div className={styles.contactAnExpertButton}>
        <div className={styles.nAMEInputField}>
          {/* <img
            className={styles.nAMEInputFieldChild}
            loading="eager"
            alt=""
            src="/group-33387.svg"
          /> */}
         
          <div className={styles.messageTextArea}>
            {/* <img
              className={styles.messageTextAreaChild}
              alt=""
              src="/rectangle-4@2x.png"
            /> */}
             <img
              className={styles.iconlybulkplay}
              loading="eager"
              alt=""
              src="/iconlybulkplay.svg"
            />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <VideoModal videoUrl="https://www.youtube.com/watch?v=L0OVc-slFX8" onClose={()=>handleCloseModal()} />
      )}
      <div className={styles.frameWrapper}>
        <button className={styles.rectangleParent} onClick={handleOpenModal}>
          <div className={styles.frameChild} />
          <div className={styles.getADemo}>Get a Demo</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
