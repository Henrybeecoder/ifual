import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import profile from "../../assets/image/profile2.png";
import { useState } from "react";
import { ReactComponent as NotificationSvg } from "../../assets/navbericon/notification-outline.svg";
import { ReactComponent as CartSvg } from "../../assets/navbericon/cart-outline.svg";
import { ReactComponent as HamburgerSvg } from "../../assets/navbericon/cart-outline.svg";
import { ReactComponent as SvgSearchIcon } from "../../assets/navbericon/mobileSearch.svg";
import { ReactComponent as SearchIconWBorder } from "../../assets/navbericon/cart-outline.svg";

const Header = ({ user }: any) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toCart = () => {
    navigate("/cart");
  };

  const toLogin = () => {
    navigate("/login");
  };

  return (
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
                <span className={`${isActive && styles.active}`}>Support</span>
              )}
            </NavLink>
          </div>
        )}
      </div>

      <div className={`${styles.flexHeader}`}>
        <div className={styles.mobile}>
          <button>
            <SearchIconWBorder width={48} />
          </button>
          {!user ? (
            <button>
              <HamburgerSvg width={48} />
            </button>
          ) : (
            <>
              <button>
                <NotificationSvg width={48} />
              </button>
              <button onClick={toCart} className={styles.btnCart}>
                <CartSvg width={48} />
              </button>
              <img src={profile} onClick={() => setOpen((state) => !state)} />
            </>
          )}
        </div>
        <div className={styles.lg}>
          <div className={`${styles.searchBar}`}>
            <input placeholder='Enter Keyword' />
            <SvgSearchIcon className={styles.searchIcon} />
          </div>
          {!user ? (
            <Button
              variant='primary'
              text='login'
              width='150px'
              onClick={toLogin}
            />
          ) : (
            <>
              <button>
                <NotificationSvg width={52} />
              </button>
              <button onClick={toCart} className={styles.btnCart}>
                <CartSvg width={52} />
              </button>
              <img src={profile} onClick={() => setOpen((state) => !state)} />
            </>
          )}
        </div>
        <ProfileModal user={user} open={open} />
      </div>
    </div>
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
