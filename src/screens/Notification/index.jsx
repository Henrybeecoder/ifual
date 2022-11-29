import { useState } from "react";
import PageContainer from "../../containers/PageContainer";
import styles from "./style.module.css";
import right from "../../assets/svg/right.svg";
import left from "../../assets/svg/left.svg";
import filter from "../../assets/svg/filter.svg";
import noneSelected from "../../assets/svg/noneSelected.svg";
import { limitText } from "../../Custom hooks/helpers";
import Modal from "../../Components/Modals";
import modalCheck from "../../assets/svg/modalCheck.svg";
import useMediaQuery from "../../Custom hooks/useMediaQuery";
import { ChevronLeft } from "@material-ui/icons";
import Checkbox from "../../Components/Checkbox";

const notificationList = [
  {
    id: "1",
    heading: "Order Received from customer at Oregun Ikeja",
    body: "A customer, Badu Badmus has ordered for delivery of 100l diesel to be delivered at Oregun Ikeja.",
    question: "Are you available to pick up this order ticket?",
    timeAgo: "2h",
    opened: true,
  },
  {
    id: "2",
    heading: "Order Received from customer at Oregun Ikeja",
    body: "A customer, Badu Badmus has ordered for delivery of 100l diesel to be delivered at Oregun Ikeja.",
    question: "Are you available to pick up this order ticket?",
    timeAgo: "3h",
    opened: false,
  },
  {
    id: "3",
    heading: "Order Received from customer at Oregun Ikeja",
    body: `A customer, Badu Badmus has ordered for delivery of 100l diesel to be delivered at Oregun Ikeja.`,
    question: "Are you available to pick up this order ticket?",
    timeAgo: "7h",
    opened: false,
  },
  {
    id: "4",
    heading: "Order Received from customer at Oregun Ikeja",
    body: "A customer, Badu Badmus has ordered for delivery of 100l diesel to be delivered at Oregun Ikeja.",
    question: "Are you available to pick up this order ticket?",
    timeAgo: "1h",
    opened: false,
  },
];

const Notification = () => {
  const [filterSet, setFilter] = useState(false);
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState({ open: false, option: "" });
  const [orderAcceptedModal, setOrderAcceptedModal] = useState(false);
  const [orderDeclinedModal, setOrderDeclinedModal] = useState(false);

  const selectedContent = notificationList.find(
    (notification) => notification.id === selected
  );

  const declineOrder = () => {
    setModal({ open: true, option: "decline" });
  };

  const acceptOrder = () => {
    setModal({ open: true, option: "accept" });
  };

  const closeAcceptOrDeclineModal = () => {
    setModal({ open: false, option: "" });
  };
  const confirmAcceptOrder = () => {
    setModal({ open: false, option: "" });
    setOrderAcceptedModal(true);
  };

  const confirmAcceptOrderClose = () => {
    setOrderAcceptedModal(false);
  };

  const confirmDeclineOrder = () => {
    setModal({ open: false, option: "" });
    setOrderDeclinedModal(true);
  };

  const confirmDeclineOrderClose = () => {
    setOrderDeclinedModal(false);
  };

  const removeSelected = () => {
    setSelected(null);
  };

  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <PageContainer active='notification'>
      <Modal
        openModal={modal.open}
        closeModal={closeAcceptOrDeclineModal}
        width={"720px"}>
        <div className={styles.modalContainer}>
          <div>
            {modal.option === "decline" ? (
              <>
                <h2 className={styles.modalHeader}>Decline Order</h2>
                <p className={styles.modalOption}>
                  You are about to decline the order for{" "}
                  <span className={styles.spanGreen}>200l</span> of Diesel at{" "}
                  <span className={styles.spanGreen}>N34,500</span> from 234
                  Ventures at Ikoyi, Lagos
                </p>
                <p className={styles.clickToConfirm}>Kindly click to confirm</p>
                <div className={styles.flexCenter}>
                  <button
                    className={styles.btnCancelDecline}
                    onClick={closeAcceptOrDeclineModal}>
                    Cancel
                  </button>

                  <button
                    className={styles.btnDecline}
                    onClick={confirmDeclineOrder}>
                    Decline
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className={styles.modalHeader}>Accept Order</h2>
                <p className={styles.modalOption}>
                  You are about to accept the order for{" "}
                  <span className={styles.spanGreen}>200l</span> of Diesel at
                  <span className={styles.spanGreen}>N34,500</span> from 234
                  Ventures at Ikoyi, Lagos
                </p>
                <p className={styles.clickToConfirm}>Kindly click to confirm</p>
                <div className={styles.flexCenter}>
                  <button
                    className={styles.btnCancelAccept}
                    onClick={closeAcceptOrDeclineModal}>
                    Cancel
                  </button>
                  <button
                    className={styles.btnAccept}
                    onClick={confirmAcceptOrder}>
                    Confirm
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
      <Modal
        openModal={orderDeclinedModal}
        // closeModal={confirmDeclineOrderClose}
        width={"505px"}>
        <div className={styles.orderDeclined}>
          <div className={styles.orderDeclinedContent}>
            <h2>Why Are you declining this order?</h2>
            <div className={styles.divider} />
            <div className={styles.checkBoxWithTextContainer}>
              <CheckBoxWithText
                checked={false}
                text='I don’t deliver to this location'
              />
              <CheckBoxWithText
                checked={false}
                text='I don’t have order quantity'
              />
              <CheckBoxWithText
                checked={false}
                text='It will take a long time to deliver'
              />
              <CheckBoxWithText
                checked={false}
                text='Customer’s delivery location is not accessible'
              />
              <CheckBoxWithText
                checked={false}
                text='I don’t trust this customer'
              />
              <CheckBoxWithText
                checked={false}
                text='I would just like to pass'
              />
              <CheckBoxWithText
                checked={false}
                text='There is a difference in price now'
              />
              <CheckBoxWithText checked={false} text='Other' />
            </div>
            <div className={styles.divider} />
            <div className={styles.flexCenter}>
              <button
                className={styles.btnSkip}
                onClick={confirmDeclineOrderClose}>
                Skip
              </button>
              <button
                className={styles.btnSubmit}
                onClick={confirmDeclineOrderClose}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        width='720px'
        openModal={orderAcceptedModal}
        closeModal={confirmAcceptOrderClose}>
        <div className={styles.orderAccepted}>
          <div className={styles.orderAcceptedContent}>
            <h2>Order Accepted</h2>
            <img src={modalCheck} />
          </div>
        </div>
      </Modal>

      {/* {filterSet && (
        <div className={styles.filterContainer}>
          <div className={styles.filterHeader}>
            <p>Filter</p>
          </div>
          <div className={styles.filterContent}>
            <p>Delivered</p>
            <p>Pending</p>
            <p>Cancelled</p>
            <p>Newest to Oldest</p>
            <p>Oldest to Newest</p>
          </div>
        </div>
      )}
       */}
      <div className={styles.pageContainer}>
        {!selected ? (
          <button className={styles.breadCrumb}>
            <ChevronLeft />
            <p>Back</p>
          </button>
        ) : (
          <button className={styles.breadCrumb} onClick={removeSelected}>
            <ChevronLeft />
            <p>Back to Notifications</p>
          </button>
        )}
        <div className={styles.pageHeader}>
          <h1>Notifications</h1>
          <div className={styles.pagerHeaderContainer}>
            <div className={styles.paginations}>
              <p>1 - 4 of 4</p>
              <div className={styles.holders}>
                <img src={left} alt='' />
                <img src={right} alt='' />
              </div>
            </div>
            <div
              className={styles.filter}
              onClick={() => setFilter(!filterSet)}>
              <h2>Filter</h2>
              <img src={filter} alt='' />
            </div>
          </div>
        </div>
        <div className={styles.notificationsContainer}>
          <div
            className={styles.notificationsList}
            style={{ display: !matches && selected ? "none" : "unset" }}>
            {notificationList?.map((notification, index) => (
              <div>
                <div
                  key={notification.id}
                  className={styles.notificationContainer}
                  style={{
                    backgroundColor:
                      selected === notification.id ? "#F2F6F2" : "transparent",
                  }}
                  onClick={() => setSelected(notification.id)}>
                  <div>
                    <div
                      className={styles.badge}
                      style={{
                        backgroundColor: !notification.opened
                          ? "#D4D8D5"
                          : "#36B44A",
                      }}
                    />
                  </div>
                  <div className={styles.textContents}>
                    <div className={styles.flexBetween}>
                      <h2>{notification.heading}</h2>
                      <p className={styles.timeAgo}>{notification.timeAgo}</p>
                    </div>
                    <p>{limitText(notification.body, 82)}</p>
                  </div>
                </div>
                <div
                  className={styles.divider}
                  style={{
                    display:
                      index + 1 === notificationList.length ? "none" : "block",
                  }}
                />
              </div>
            ))}
          </div>
          <div
            className={styles.selectedContainer}
            style={{ display: !matches && !selected ? "none" : "unset" }}>
            {!selectedContent ? (
              <div className={styles.noneSelected}>
                <div className={styles.noneSelectedContent}>
                  <img src={noneSelected} />
                  <p>Click to read notifications</p>
                </div>
              </div>
            ) : (
              <div className={styles.selectedNotificationContainer}>
                <div className={styles.flexBetween}>
                  <h2>
                    {matches
                      ? selectedContent.heading
                      : limitText(selectedContent.heading, 30)}
                  </h2>
                  <p className={styles.timeAgo}>{selectedContent.timeAgo}</p>
                </div>
                <p>{selectedContent.body}</p>
                <p>{selectedContent.question}</p>
                <div className={styles.flexCenter}>
                  <button className={styles.btnNo} onClick={declineOrder}>
                    No
                  </button>
                  <button className={styles.btnYes} onClick={acceptOrder}>
                    Yes I am
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

const CheckBoxWithText = ({ checked, setChecked, text }) => {
  return (
    <div className={styles.checkboxFlex}>
      <Checkbox checked={checked} />
      <p>{text}</p>
    </div>
  );
};

export default Notification;
