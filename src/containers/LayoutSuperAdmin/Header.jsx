import styles from "./style.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import {
  SearchIconWBorder,
  SvgArrowLeft,
  SvgBellOutline,
  SvgCartOutline,
  SvgHamburger,
  SvgSearchIcon,
} from "../../assets/Svgs";
import profile from "../../assets/image/bitch.png";
import { useState } from "react";

const Header = ({ user, backBtn, onClickBackBtn }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState(false);

  const toLogin = () => {
    navigate("/login");
  };

  const toggleProfileModal = () => {
    setOpen((state) => !state);
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.flexHeader}>
          {backBtn && (
            <button className={styles.btnBack} onClick={onClickBackBtn}>
              <SvgArrowLeft />
              <p>Back</p>
            </button>
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
              <Button primary text='login' width='150px' onClick={toLogin} />
            </div>
          ) : (
            <div className={styles.flexIcons}>
              <button>
                <SvgBellOutline />
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