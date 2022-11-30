import { CheckIcon, UncheckIcon } from "../SVG";
import styles from "./CheckBox.module.scss";
type PropsType = {
  checked?: boolean;
};
const CheckBox: React.FC<PropsType> = ({ checked }) => {
  return (
    <div className={styles.checkbox}>
      {checked ? <CheckIcon /> : <UncheckIcon />}
    </div>
  );
};
export default CheckBox;
