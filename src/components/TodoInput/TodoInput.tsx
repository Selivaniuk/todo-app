import { useState } from "react";
import classNames from "classnames";
import { TodoType } from "types/todoTypes";
import { AddButton, Input } from "ui";
import styles from "./TodoInput.module.scss";

type InputValue = {
  value: string;
  focused: boolean;
};
const defaultInputValue: InputValue = {
  value: "",
  focused: false,
};
type PropsType = {
  addTodo: (label: TodoType["label"]) => void;
};
const TodoInput: React.FC<PropsType> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState<InputValue>(defaultInputValue);

  const onChangeText = (value: string) => {
    if (value.length < 50) setInputValue((prev) => ({ ...prev, value }));
  };
  const onFocus = (focused: boolean) => {
    setInputValue((prev) => ({ ...prev, focused }));
  };

  const handleClick = () => {
    if (inputValue.value.replace(/ /g, "").length > 0) {
      addTodo(inputValue.value);
    }
    setInputValue((prev) => ({ ...prev, value: defaultInputValue["value"] }));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div
      className={classNames([
        styles.inputContainer,
        { [styles.focused]: inputValue.focused },
      ])}
    >
      <AddButton onClick={handleClick} />
      <Input
        placeholder="Новая задача..."
        value={inputValue.value}
        onChange={onChangeText}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default TodoInput;
