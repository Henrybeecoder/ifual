import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import styles from "./style.module.css";

const RadioGroup = ({
  options,
  defaultValue,
  value,
  vertical,
  onValueChange,
}) => {
  return (
    <Root
      className={`${styles.RadioGroupRoot} ${vertical && styles.flexColumn}`}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}>
      {options?.map((option) => (
        <div className={styles.radioGroupFlex}>
          <Item
            className={styles.RadioGroupItem}
            value={option.value}
            id={option.label}>
            <Indicator className={styles.RadioGroupIndicator} />
          </Item>
          <label htmlFor={option.label}>{option.label}</label>
        </div>
      ))}
    </Root>
  );
};

export default RadioGroup;
