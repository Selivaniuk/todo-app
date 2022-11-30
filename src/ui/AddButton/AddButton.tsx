import { PlusIcon } from "../SVG";
import styles from "./AddButton.module.scss";

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement>;
const AddButton: React.FC<PropsType> = (props) => {
  return (
    <button className={styles.button} {...props}>
      <PlusIcon className={styles.plus} />
      {/* <span>+</span> */}
    </button>
  );
};
export default AddButton;
