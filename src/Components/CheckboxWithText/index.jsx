import styles from "./style.module.css";
const CheckBoxWithText = ({ checked, setChecked, text }) => {
  return (
    <div className={styles.container}>
      <CheckBox checked={checked} />
      <p>{text}</p>
    </div>
  );
};

const CheckBox = ({ checked, setChecked }) => {
  return <div className={styles.checkboxContainer}>{checked && <div />}</div>;
};

export default CheckBoxWithText;
