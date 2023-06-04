import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { Stack,Button, Container, Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";
import Header from "./components/TodoHeader";

export default function App() {

  const dispatch = useDispatch() 

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>

    <Header />
    <Container >
      <Stack >
        <TodoForm />
        <Stack direction="row" mt={2} spacing={4}>
        <Typography variant="h6">
          {todos.filter((todo) => !todo.completed).length} todo(s)to be done!
        </Typography>
        {
          todos.length > 0 &&   <Button variant="contained" onClick = {() => dispatch({type:"Complete_All"})}>Mark All</Button>
        }
        </Stack>
        <TodoList />
        {
          todos.length > 0 && <TodoFilter />
        }
      </Stack>
    </Container>
    </>
  );
}

