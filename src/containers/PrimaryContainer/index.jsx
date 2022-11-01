import React from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import droplet from "../../assets/svg/droplet.svg"

export default function PrimaryContainer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerPart}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
        </div>
        {props.children}
      </div>
      {props.droplet && ( <div className={styles.dropletFlex}>
            <img src={droplet} alt=""/>
            <img src={droplet} alt=""/>
            <img src={droplet} alt=""/>
        </div>)}
     
        <div className={styles.footer}>
            <p>&#169;2022 iFuel. All rights reserved.</p>
        </div>
    </div>
  );
}
