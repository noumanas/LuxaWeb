import React, { useState } from 'react';
import Styles from "./VideoModal.module.css"
interface VideoModalProps {
    videoUrl: string;
    onClose: () => void;
  }
  
  const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
    return (
      <div className={Styles.modaloverlay}>
        <div className={Styles.modal}>
        <iframe width="650" height="315" src={videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default VideoModal;
