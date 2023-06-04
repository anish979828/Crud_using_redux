import { Stack, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../store/TodoActions";


const TodoFilter = () => {

  const [isEdit,setIsEdit] = useState("");
  let dispatch = useDispatch();

  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleClearCompleted = (filter) => {
    dispatch(clearCompleted(filter));
  };

  return (
    <Stack direction="row" spacing={5} mt={2} sx = {
      {
        display:"flex",
        justifyContent:"space-between"
     }
    }>
      {
        ["ALL","COMPLETED","ACTIVE"].map((btn,i) => {
          return(
            <Button
            onClick = {() => {
              setIsEdit(i);
              handleSetFilter(btn)
            }}
            variant={isEdit === i ? "contained": "outlined"}
            >{btn}</Button>
          )
        })
      }
     
      <Button variant = "contained" onClick={() => handleClearCompleted()}>Clear Completed</Button>
    </Stack>
  );
};
export default TodoFilter;
