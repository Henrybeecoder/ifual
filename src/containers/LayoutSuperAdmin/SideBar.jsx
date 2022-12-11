import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import {
  SvgArrowDown,
  SvgArrowUp,
  SvgDashboard,
  SvgLogOut,
  SvgNotification,
  SvgOrderStatus,
  SvgReport,
  SvgSettings,
} from "../../assets/Svgs";
import { useState } from "react";
import useMediaQuery from "../../Custom hooks/useMediaQuery";

const SideBar = () => {
  const [manage, setManage] = useState(false);

  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {matches && (
        <div className={styles.sideBarContainer}>
          <div className={styles.sidebarInner}>
            <img src={logo} />
            <div className={styles.navLinksContainer}>
              <NavLinkItem to='/super-admin/dashboard' heading='Overview'>
                <SvgDashboard />
              </NavLinkItem>
              {/* <NavLinkItem to='/super-admin/manage' heading='Manage'>
            <SvgOrderStatus />
          </NavLinkItem> */}
              <button
                className={`${styles.flexLink} ${manage && styles.active}`}
                onClick={() => setManage((state) => !state)}>
                <SvgOrderStatus />
                <h3>Manage</h3>
                {manage ? <SvgArrowUp /> : <SvgArrowDown />}
              </button>
              {manage && (
                <div className={styles.manageDropdown}>
                  <NavLinkItem
                    marginMd
                    to='/super-admin/manage-users'
                    heading='Manage Users'
                  />
                  <NavLinkItem
                    marginMd
                    to='/super-admin/manage-products'
                    heading='Manage Products'
                  />
                  <NavLinkItem
                    marginMd
                    to='/super-admin/manage-orders'
                    heading='Manage Orders'
                  />
                </div>
              )}
              <NavLinkItem
                to='/super-admin/complaints-log'
                heading='Complaints Log'>
                <SvgReport />
              </NavLinkItem>
              <NavLinkItem
                to='/super-admin/activity-log'
                heading='Activity Log'>
                <SvgNotification />
              </NavLinkItem>
              <NavLinkItem to='/super-admin/settings' heading='Settings'>
                <SvgSettings />
              </NavLinkItem>
              <NavLinkItem to='/super-admin/log-out' heading='Log out'>
                <SvgLogOut />
              </NavLinkItem>
            </div>
            <div className={styles.footer}>
              <p>2022 iFuel. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavLinkItem = ({ heading, to, children, marginMd }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <div
          className={`${styles.flexLink} ${
            marginMd ? styles.marginMd : styles.marginLg
          } ${isActive && styles.active}`}>
          {children}
          <h3>{heading}</h3>
        </div>
      )}
    </NavLink>
  );
};

export default SideBar;
