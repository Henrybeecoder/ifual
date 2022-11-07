import React from 'react'
import logo from "../../assets/logo.svg";
import dashboard from "../../assets/navbericon/dashboard.svg"
import styles from "./style.module.css"

export default function SideBar () {
    return (
        <div className={styles.container}>
    <img src={logo} alt="" />
    <div className={styles.LinkItem}>
        <div className={styles.item}>
            <img src={dashboard} alt=""/>
            <p>Dashboard</p>
        </div>
    </div>
        </div>
    )
}