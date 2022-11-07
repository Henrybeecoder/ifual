import React, { useState } from 'react'
import SideBar from '../../Components/SideBar'
import styles from "./style.module.css"
import useMediaQuery from "../../Custom hooks/useMediaQuery";
import logo from "../../assets/logo.svg";
import dashboard from "../../assets/navbericon/dashboard.svg"
import dashboardActive from "../../assets/navbericon/dashboardactive.svg"
import productList from "../../assets/navbericon/productList.svg"
import orderStatus from "../../assets/navbericon/orderStatus.svg"
import notification from "../../assets/navbericon/notification.svg"
import report from "../../assets/navbericon/report.svg"
import logOut from "../../assets/navbericon/logOut.svg"
import mobileSearch from "../../assets/navbericon/searchIcon.svg"
import hamburger from "../../assets/navbericon/hamburger.svg"
import searchIcon from "../../assets/navbericon/mobileSearch.svg"
import notificatonBar from "../../assets/navbericon/notificationBar.svg"
import boxBar from "../../assets/navbericon/boxBar.svg"
import profile from "../../assets/image/profile.jpg"


export default function PageContainer(props) {
    const matches = useMediaQuery('(min-width: 800px)')
    const [openHamburger, setOpenHamburger] = useState(false)
    const toggleHamburger = () => {
        setOpenHamburger(!openHamburger)
    }
    return (
        <div className={styles.container}>
            {!matches && openHamburger && (
                <div className={styles.mobilesidebar}>
                    <img src={logo} alt="" className={styles.logo} />
                    <div className={styles.LinkItem}>
                        <div className={`${props.active === "dashboard" ? styles.active : styles.item}`}>
                            {props.active === "dashboard" ? (<img src={dashboardActive} alt="" />) : (<img src={dashboard} alt="" />)}
                            <p>Dashboard</p>
                        </div>
                        <div className={styles.item}>
                            <img src={productList} alt="" />
                            <p>Product List</p>
                        </div>
                        <div className={styles.item}>
                            <img src={orderStatus} alt="" />
                            <p>Order Status</p>
                        </div>
                        <div className={styles.item}>
                            <img src={notification} alt="" />
                            <p>Notification</p>
                        </div>
                        <div className={styles.item}>
                            <img src={report} alt="" />
                            <p>Report</p>
                        </div>
                        <div className={styles.item}>
                            <img src={logOut} alt="" />
                            <p>Log out</p>
                        </div>
                    </div>
                </div>
            )}
            {!matches && (
                <div className={styles.header}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconHolder}>
                            <img src={mobileSearch} alt="" />
                        </div>
                        <div className={styles.iconHolder} onClick={toggleHamburger}>
                            <img src={hamburger} alt="" />
                        </div>
                    </div>
                </div>
            )}
            {matches && (
                <div className={styles.sidebar}>
                    <img src={logo} alt="" className={styles.logo} />
                    <div className={styles.LinkItem}>
                        <div className={`${props.active === "dashboard" ? styles.active : styles.item}`}>
                            {props.active === "dashboard" ? (<img src={dashboardActive} alt="" />) : (<img src={dashboard} alt="" />)}
                            <p>Dashboard</p>
                        </div>
                        <div className={styles.item}>
                            <img src={productList} alt="" />
                            <p>Product List</p>
                        </div>
                        <div className={styles.item}>
                            <img src={orderStatus} alt="" />
                            <p>Order Status</p>
                        </div>
                        <div className={styles.item}>
                            <img src={notification} alt="" />
                            <p>Notification</p>
                        </div>
                        <div className={styles.item}>
                            <img src={report} alt="" />
                            <p>Report</p>
                        </div>
                        <div className={styles.item}>
                            <img src={logOut} alt="" />
                            <p>Log out</p>
                        </div>
                    </div>
                </div>)}
            <div className={styles.body}>

                {matches && (
                    <div className={styles.header}>
                        <div className={styles.searchbar}>
                            <input placeholder='Enter keyword'/>
                            <img src={searchIcon} alt="" />
                        </div>
                        <img src={notificatonBar} alt="" />
                        <img src={boxBar} alt="" />
                        <img src={profile} alt="" className={styles.profile}/>
                    </div>
                )}
                <div >
                    {props.children}
                </div>
            </div>
        </div>

    )
}