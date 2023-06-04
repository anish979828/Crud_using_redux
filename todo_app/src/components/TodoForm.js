import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/TodoActions";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      if (inputText.trim() !== "") {
        dispatch(addTodo(inputText));
        setInputText("");
      }
    }
  };

  return (

    <TextField
      sx={{
        marginTop:"10px",
        background: "white"
      }}
      id="filled-basic"
      variant="filled"
      label="What needs to be done ?"
      value={inputText}
      onKeyUp={handleAddTodo}
      onChange={(e) => {
        setInputText(e.target.value);
      }}
    />
  );
};
export default TodoForm;
