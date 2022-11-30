import { TodoType } from "types/todoTypes";
// const arrayMove = (arr: TodoType[], id: TodoType["id"]) => {
//   const temp = [...arr];
//   let fromIndex = 0;
//   const element = temp.find((e, i) => {
//     if (e.id === id) {
//       fromIndex = i;
//       return true;
//     }
//     return false;
//   });
//   if (element) {
//     temp.splice(fromIndex, 1);
//     temp.splice(0, 0, element);
//   }
//   return temp;
// };
export const addTusk = (state: TodoType[], label: TodoType["label"]) => {
  return [...state, { id: state.length + label, label, checked: false }];
};
export const updateTusk = (state: TodoType[], tusk: TodoType) => {
  const result = state.map((e) => {
    if (e.id === tusk.id) {
      return { ...e, ...tusk };
    }
    return e;
  });
  //   if (state.length > 1 && tusk.checked === true) {
  //     return arrayMove(result, tusk.id);
  //   }
  return result;
};
export const deleteTusk = (state: TodoType[], id: TodoType["id"]) => {
  return state.filter((e) => e.id !== id);
};
