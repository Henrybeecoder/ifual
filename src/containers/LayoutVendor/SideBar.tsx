import { Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import NavLinkItem from "@components/NavLinkItem";
import useMediaQuery from "src/Custom hooks/useMediaQuery";
import styles from "./style.module.css";
import logo from "../../assets/logo.svg";
import { ReactComponent as DashboardSvg } from "../../assets/navbericon/dashboard.svg";
import { ReactComponent as ProductListSvg } from "../../assets/navbericon/productList.svg";
import { ReactComponent as OrderStatusSvg } from "../../assets/navbericon/orderStatus.svg";
import { ReactComponent as NotificationSvg } from "../../assets/navbericon/notification.svg";
import { ReactComponent as ReportSvg } from "../../assets/navbericon/report.svg";
import { ReactComponent as LogoutSvg } from "../../assets/navbericon/logOut.svg";

interface SideBarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  //   baseUrl: "admin" | "super-admin";
}

const SideBar = ({ open, setOpen }: SideBarProps) => {
  const matches = useMediaQuery("(min-width: 800px)");
  return (
    <>
      {!matches ? (
        <Root open={open} onOpenChange={setOpen}>
          <Portal>
            <Overlay className={"overlay"} />
            <Content className={"sideBarContainer"}>
              <div className={styles.logoSm}>
                <img alt='logo' src={logo} />
              </div>
              <div className={styles.navLinksContainer}>
                <NavLinkItem
                  marginMd
                  to={`/vendor/dashboard`}
                  heading='Dashboard'>
                  <DashboardSvg />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem
                  marginMd
                  to={`/vendor/product-list`}
                  heading='Product List'>
                  <ProductListSvg />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem
                  marginMd
                  to={`/vendor/order-status`}
                  heading='Order Status'>
                  <OrderStatusSvg />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem
                  marginMd
                  to={`/vendor/notification`}
                  heading='Notification'>
                  <NotificationSvg />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem marginMd to={`/vendor/report`} heading='Report'>
                  <ReportSvg />
                </NavLinkItem>
                <div className='divider' />
                <NavLinkItem marginMd to={`/vendor/log-out`} heading='Log out'>
                  <LogoutSvg />
                </NavLinkItem>
                <div className='divider' />
              </div>
            </Content>
          </Portal>
        </Root>
      ) : (
        <div className={styles.sideBarContainer}>
          <div className={styles.sidebarInner}>
            <img src={logo} />
            <div className={styles.navLinksContainer}>
              <NavLinkItem to={`/vendor/dashboard`} heading='Dashboard'>
                <DashboardSvg />
              </NavLinkItem>
              <NavLinkItem to={`/vendor/product-list`} heading='Product List'>
                <ProductListSvg />
              </NavLinkItem>
              <NavLinkItem to={`/vendor/order-status`} heading='Order Status'>
                <OrderStatusSvg />
              </NavLinkItem>
              <NavLinkItem to={`/vendor/notification`} heading='Notification'>
                <NotificationSvg />
              </NavLinkItem>
              <NavLinkItem to={`/vendor/report`} heading='Report'>
                <ReportSvg />
              </NavLinkItem>
              <NavLinkItem to={`/vendor/log-out`} heading='Log out'>
                <LogoutSvg />
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

export default SideBar;
