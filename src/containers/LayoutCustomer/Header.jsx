import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import {
  SvgBellOutline,
  SvgCartOutline,
  SvgHamburger,
  SvgSearchIcon,
} from "../../assets/Svgs";
import profile from "../../assets/image/bitch.png";
import { useState } from "react";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState(false);

  const toLogin = () => {
    navigate({ pathname: "/login", search: "type=customer" });
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
        <div className={styles.mobileMenu}>
          <SvgHamburger />
        </div>
        <div className={`${styles.flexHeader} ${styles.hiddenMobile}`}>
          <div className={styles.searchBar}>
            <input placeholder='Enter Keyword' />
            <div className={styles.searchIcon}>
              <SvgSearchIcon />
            </div>
          </div>
          {!user ? (
            <Button primary text='login' width='150px' onClick={toLogin} />
          ) : (
            <div className={styles.flexIcons}>
              <button>
                <SvgBellOutline />
              </button>
              <button onClick={toCart}>
                <SvgCartOutline style={{ margin: "0 10px 0 10px" }} />
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

const ProfileModal = ({ user, open }) => {
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
            <button>View Profile</button>
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
