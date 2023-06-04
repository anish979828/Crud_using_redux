import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import SingleTodo from "./SingleTodo";

const TodoList = () => {

  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
 

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    } else if (filter === "COMPLETED") {
      return todo.completed;
    } else if (filter === "ACTIVE") {
      return !todo.completed;
    } else if (filter === "CLEAR_COMPLETED") {
      return !todo.completed;
    }else if (filter.type === "Search_todo"){
      return todo.text.includes(filter.search);
    }
    return true;
  });


  return (
    <Stack spacing={2} mt={3}>
      {filteredTodos.map((todo) => {
        return <SingleTodo todo={ todo } key={todo.id} />;
      })}
    </Stack>
  );
};

export default TodoList;
