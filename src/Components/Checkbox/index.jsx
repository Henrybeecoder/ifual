import styles from "./style.module.css";
const SvgCheckboxtick = (props) => (
  <svg
    width={16}
    height={12}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      d='m14.964 1.357-9.576 9.576-4.352-4.352'
      stroke='#36B44A'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Checkbox = ({ checked, setChecked }) => {
  return (
    <div className={styles.container} onClick={setChecked}>
      {checked && <SvgCheckboxtick />}
    </div>
  );
};

export default Checkbox;
