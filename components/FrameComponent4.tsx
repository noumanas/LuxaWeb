import type { NextPage } from "next";
import styles from "./FrameComponent4.module.css";
import { useState } from "react";
import Image from 'next/image'
import Link from "next/link";


const FrameComponent4: NextPage = () => {
   const [arrowActive, setarrowActive] = useState(false)
   const [arrowActive1, setarrowActive1] = useState(false)
   const [arrowActive2, setarrowActive2] = useState(false)
   const [arrowActive3, setarrowActive3] = useState(false)


  return (
    <div className={styles.frameParent}>

      <div className={styles.rectangleContainer}  onMouseLeave={()=>setarrowActive(false)} onMouseEnter={()=>setarrowActive(true)}>
      <Link href="/resources">
         <Image
          className={styles.rectangleIcon}
          loading="eager"
          alt=""
          src="/rectangle-70@2x.png"
          width={240}
          height={332}
        />
      </Link>
   
          <div className={styles.retrofits}>New Construction
          {arrowActive ===true && (
          <img
            className={styles.hoverarrow}
            loading="eager"
            alt=""
            src="/Arrowconttraction.png"
          />
          )}
        </div>
        
        
       
      </div>
      
      {/* <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/rectangle-70@2x.png"
        />
         <div className={styles.retrofits}>New Construction</div> */}
        {/* <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.newConstruction}>New Construction</div>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameInner} alt="" src="/arrow-4.svg" />
          </div>
        </div> */}
      {/* </div> */}
      <div className={styles.rectangleContainer} onMouseLeave={()=>setarrowActive1(false)} onMouseEnter={()=>setarrowActive1(true)}>
      <Link href="/resources/retrofit-and-renovation">
        <Image
            className={styles.rectangleIcon}
            loading="eager"
            alt=""
            src="/rectangle-631@2x.png"
            width={240}
            height={332}
          />
      </Link>
        
        <div className={styles.retrofits}>Retrofits
        {arrowActive1 ===true && (
          <img
          className={styles.hoverarrow}
          loading="eager"
          alt=""
          src="/Arrowconttraction.png"
        />
        )}
        </div>

      </div>
      <div className={styles.frameDiv} onMouseLeave={()=>setarrowActive2(false)} onMouseEnter={()=>setarrowActive2(true)}>
      <Link href="/resources/retrofit-and-renovation">

        <Image
          className={styles.frameChild1}
          loading="eager"
          alt=""
          src="/rectangle-641@2x.png"
          width={240}
          height={332}
        />
          </Link>
        <div className={styles.retrofits}>Renovations 
        {arrowActive2===true && (
           <img
           className={styles.hoverarrow}
           loading="eager"
           alt=""
           src="/Arrowconttraction.png"
         />
        )}
       </div>
     
      </div>

      <div className={styles.rectangleParent1} onMouseLeave={()=>setarrowActive3(false)} onMouseEnter={()=>setarrowActive3(true)}>
        <Link href="/resources/infrastructure">


        <Image
          className={styles.frameChild2}
          loading="eager"
          alt=""
          src="/rectangle-65@2x.png"
          width={240}
          height={332}
        />
        </Link>

        <div className={styles.retrofits}>Infrastructure
        {arrowActive3 === true && (
          <img
          className={styles.hoverarrow}
          loading="eager"
          alt=""
          src="/Arrowconttraction.png"
        />
        )}
        </div>
        
      </div>

     
    </div>
  );
};

export default FrameComponent4;
