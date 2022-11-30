import { TodoType } from "types/todoTypes";
import { useEffect } from "react";
type PropsType = {
  todos: TodoType[];
};
const useUpdateLocalStorage = ({ todos }: PropsType) => {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
};
export default useUpdateLocalStorage;
