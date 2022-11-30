import { TodoType } from "types/todoTypes";
import styles from "./TodoStatus.module.scss";

const getEmojiByPercent = (percent: number) => {
  if (percent === 100) return "🥳";
  if (percent > 80) return "😎";
  if (percent > 60) return "😃";
  if (percent > 40) return "🤨";
  if (percent > 20) return "🙁";
  return "☹️";
};
const TodoStatus: React.FC<{ todos: TodoType[] }> = ({ todos }) => {
  const checkedTodos = todos.filter((e) => e.checked);
  if (todos.length === 0)
    return (
      <div className={styles.status}>
        <p>Задач нет 😞</p>
      </div>
    );
  const percentage = (checkedTodos.length * 100) / todos.length;
  return (
    <div className={styles.status}>
      <p>
        {`${checkedTodos.length}/${todos.length} Выполнено ${getEmojiByPercent(
          percentage
        )}`}
      </p>
    </div>
  );
};
export default TodoStatus;
