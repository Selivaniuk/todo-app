import styles from "./Input.module.scss";
type PropsType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  value?: string;
  onChange?: (v: string) => void;
};
const Input: React.FC<PropsType> = ({ onChange, ...props }) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={(e) => onChange?.(e.target.value)}
      {...props}
    />
  );
};

export default Input;
