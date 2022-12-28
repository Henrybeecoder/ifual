import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import {
  SearchIconWBorder,
  SvgBellOutline,
  SvgCartOutline,
  SvgHamburger,
  SvgSearchIcon,
} from "../../assets/Svgs";
import profile from "../../assets/image/profile2.png";
import { useState } from "react";
import { ReactComponent as NotificationSvg } from "../../assets/navbericon/notification-outline.svg";
import { ReactComponent as CartSvg } from "../../assets/navbericon/cart-outline.svg";

const Header = ({ user }: any) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toLogin = () => {
    navigate("/login");
  };

  const toggleProfileModal = () => {
    setOpen((state) => !state);
  };

  const toCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.flexHeader}>
          <img src={logo} />
          {!user && (
            <div className={styles.linksContainer}>
              <NavLink to='/' style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <span className={`${isActive && styles.active}`}>Home</span>
                )}
              </NavLink>
              <NavLink to='/support' style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <span className={`${isActive && styles.active}`}>
                    Support
                  </span>
                )}
              </NavLink>
            </div>
          )}
        </div>

        <div className={`${styles.flexHeader}`}>
          {/* <div /> */}
          <div className={styles.mobileMenu}>
            <SearchIconWBorder />
            {!user && (
              <button>
                <SvgHamburger />
              </button>
            )}
          </div>
          <div className={`${styles.searchBar} ${styles.hiddenMobile}`}>
            <input placeholder='Enter Keyword' />
            <div className={styles.searchIcon}>
              <SvgSearchIcon />
            </div>
          </div>
          {!user ? (
            <div className={styles.hiddenMobile}>
              <Button
                variant='primary'
                text='login'
                width='150px'
                onClick={toLogin}
              />
            </div>
          ) : (
            <div className={styles.flexIcons}>
              <button>
                <NotificationSvg />
              </button>
              <button onClick={toCart} className={styles.btnCart}>
                <CartSvg />
              </button>
              <img src={profile} onClick={toggleProfileModal} />
              <ProfileModal user={user} open={open} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ProfileModal = ({ user, open }: { user: any; open: boolean }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      {open && (
        <div className={styles.modalContainer}>
          <div className={styles.profileContainer}>
            <img src={profile} />
            <div className={styles.profileText}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <div className='divider' />
          <div className={styles.profileLinksContainer}>
            <button onClick={() => navigate("/customer/profile")}>
              View Profile
            </button>
            <button>View Orders</button>
            <button>Track Order</button>
            <button>Support</button>
          </div>
          <div className='divider' />
          <div className={styles.logoutContainer}>
            <button onClick={logout}>logout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;