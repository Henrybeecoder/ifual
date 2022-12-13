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
import { ReactNode, useState } from "react";
import useMediaQuery from "../../Custom hooks/useMediaQuery";

interface SideBarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

const SideBar = ({ open, setOpen }: SideBarProps) => {
  const [manage, setManage] = useState(false);

  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {!matches ? (
        <>
          {open && (
            <div className={styles.smContainer}>
              <div className={styles.logoSm}>
                <img alt='logo' src={logo} />
              </div>
              <div className={styles.navLinksContainer}>
                <NavLinkItem to='/admin/dashboard' heading='Overview'>
                  <SvgDashboard />
                </NavLinkItem>
                <div className='divider' />
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
                      to='/admin/manage-users'
                      heading='Manage Users'
                    />
                    <NavLinkItem
                      marginMd
                      to='/admin/manage-products'
                      heading='Manage Products'
                    />
                    <NavLinkItem
                      marginMd
                      to='/admin/manage-orders'
                      heading='Manage Orders'
                    />
                  </div>
                )}
                <div className='divider' />
                <NavLinkItem
                  to='/admin/complaints-log'
                  heading='Complaints Log'>
                  <SvgReport />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem to='/admin/activity-log' heading='Activity Log'>
                  <SvgNotification />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem to='/admin/settings' heading='Settings'>
                  <SvgSettings />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem to='/admin/log-out' heading='Log out'>
                  <SvgLogOut />
                </NavLinkItem>
                <div className='divider' />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.sideBarContainer}>
          <div className={styles.sidebarInner}>
            <img src={logo} />
            <div className={styles.navLinksContainer}>
              <NavLinkItem to='/admin/dashboard' heading='Overview'>
                <SvgDashboard />
              </NavLinkItem>
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
                    to='/admin/manage-users'
                    heading='Manage Users'
                  />
                  <NavLinkItem
                    marginMd
                    to='/admin/manage-products'
                    heading='Manage Products'
                  />
                  <NavLinkItem
                    marginMd
                    to='/admin/manage-orders'
                    heading='Manage Orders'
                  />
                </div>
              )}
              <NavLinkItem to='/admin/complaints-log' heading='Complaints Log'>
                <SvgReport />
              </NavLinkItem>
              <NavLinkItem to='/admin/activity-log' heading='Activity Log'>
                <SvgNotification />
              </NavLinkItem>
              <NavLinkItem to='/admin/settings' heading='Settings'>
                <SvgSettings />
              </NavLinkItem>
              <NavLinkItem to='/admin/log-out' heading='Log out'>
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

interface NavLinkProps {
  heading: string;
  to: string;
  children?: ReactNode;
  marginMd?: boolean;
}

const NavLinkItem = ({ heading, to, children, marginMd }: NavLinkProps) => {
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
