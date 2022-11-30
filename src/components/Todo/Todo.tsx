import classNames from "classnames";
import { TodoType } from "types/todoTypes";
import CheckBox from "ui/CheckBox/CheckBox";
import { DeleteIcon } from "ui/SVG";
import styles from "./Todo.module.scss";

type PropsType = {
  todo: TodoType;
  updateTodo: (todo: TodoType) => void;
  deleteTodo: (id: TodoType["id"]) => void;
};
const Todo: React.FC<PropsType> = ({ todo, updateTodo, deleteTodo }) => {
  const { id, label, checked } = todo;
  const handleToDoClick = () => {
    updateTodo({ ...todo, checked: !checked });
  };
  const handleDeleteToDo = () => {
    deleteTodo(id);
  };
  return (
    <div className={classNames([styles.todo, { [styles.checked]: checked }])}>
      <div className={styles.checkAndLabel} onClick={handleToDoClick}>
        <CheckBox checked={checked} />
        <span className={styles.label}>{label}</span>
      </div>
      <DeleteIcon className={styles.delete} onClick={handleDeleteToDo} />
    </div>
  );
};
export default Todo;
