import { useState } from "react";
import Todo from "components/Todo/Todo";
import TodoInput from "components/TodoInput/TodoInput";
import TodoStatus from "components/TodoStatus/TodoStatus";
import useUpdateLocalStorage from "hocks/useUpdateLocalStorage";
import { TodoType } from "types/todoTypes";
import { addTusk, deleteTusk, updateTusk } from "utilities/utils";
import styles from "./App.module.scss";

const localStorageTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(localStorageTodos);
  useUpdateLocalStorage({ todos });
  const addTodo = (label: TodoType["label"]) => {
    const newTodos = addTusk(todos, label);
    setTodos(newTodos);
  };
  const updateTodo = (todo: TodoType) => {
    const newTodos = updateTusk(todos, todo);
    setTodos(newTodos);
  };
  const deleteTodo = (id: TodoType["id"]) => {
    const newTodos = deleteTusk(todos, id);
    setTodos(newTodos);
  };

  return (
    <div className={styles.app}>
      <h1>To-Do List</h1>
      <TodoStatus todos={todos} />
      <TodoInput addTodo={addTodo} />
      <div className={styles.todos}>
        {[...todos].reverse().map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
