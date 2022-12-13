import { SvgEdit } from "../../../assets/Svgs";
import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import Switch from "../../../Components/Radix/Switch";
import RadioGroup from "../../../Components/Radix/RadioGroup";
import { SelectTemp } from "../../../Components/InputTemp";
import { useState } from "react";
import useMediaQuery from "../../../Custom hooks/useMediaQuery";

const Settings = () => {
  const matches = useMediaQuery("(min-width: 800px)");
  const [edit, setEdit] = useState(false);

  const timeOptions = matches
    ? [
        { value: "minute", label: "Minutes" },
        { value: "hours", label: "Hours" },
        { value: "days", label: "Days" },
      ]
    : [
        { value: "minute", label: "Min" },
        { value: "hours", label: "Hrs" },
        { value: "days", label: "Days" },
      ];

  return (
    <LayoutSuperAdmin>
      <div className={styles.header}>
        <h3>SETTINGS</h3>
        <button onClick={() => setEdit((state) => !state)}>
          <h2>EDIT</h2>
          <SvgEdit />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <h3>View Onboarding:</h3>
          <div>
            <div className={styles.flex}>
              <p>Activate Response Countdown</p>
              <Switch defaultChecked />
            </div>
            <div className={styles.radioGroup}>
              <RadioGroup
                className={styles.rglabel}
                defaultValue='minute'
                options={timeOptions}
              />
            </div>
            <div className={styles.flex}>
              <p>Set Response Time:</p>
              <SelectTemp width='120px' placeholder='120' />
            </div>
          </div>
        </div>
        <div className='divider' />
        <div className={styles.sectionContainer}>
          <h3>iFuel Charges:</h3>
          <div>
            <RadioGroup
              vertical
              defaultValue='amt-per-litre'
              options={[
                { value: "amt-per-litre", label: "Charge amount per Litre" },
                {
                  value: "perc-per-litre",
                  label: "Charge percentage per litre",
                },
                {
                  value: "perc-total-sum",
                  label: "Charge percentage of total sum",
                },
              ]}
            />
          </div>
        </div>
        <div className='divider' />
        <div className={styles.sectionContainer}>
          <h3>Manage Order:</h3>
          <div>
            <div className={styles.flex}>
              <p>Remap Cancelled Orders</p>
              <Switch />
            </div>
            <div className={styles.opacityDisabled}>
              <div className={styles.radioGroup}>
                <RadioGroup defaultValue='hours' options={timeOptions} />
              </div>
              <div className={styles.flex}>
                <p>Set Time after Cancellation:</p>
                <SelectTemp width='120px' placeholder='240' />
              </div>
            </div>
          </div>
        </div>
        {edit && (
          <>
            <div className='divider' />
            <div className={styles.flexBtns}>
              <button className={styles.cancel}>Cancel</button>
              <button className={styles.saveChanges}>Save Changes</button>
            </div>
          </>
        )}
      </div>
    </LayoutSuperAdmin>
  );
};

export default Settings;
