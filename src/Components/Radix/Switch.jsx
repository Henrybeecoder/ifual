import { Root, Thumb } from "@radix-ui/react-switch";
import styles from "./style.module.css";

const Switch = ({ defaultChecked }) => {
  return (
    <Root className={styles.SwitchRoot} defaultChecked={defaultChecked}>
      <Thumb className={styles.SwitchThumb} />
    </Root>
  );
};

export default Switch;
