import type { NextPage } from "next";
import styles from "./comingsoon.module.css";
import { useEffect, useState } from "react";
import InvisibleFrame from "../../components/InvisibleFrame";
const ServicesLEEDCertificationM: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
    }, []);
  return (
    <div>

    <InvisibleFrame />
  </div>
  );
};

export default ServicesLEEDCertificationM;
