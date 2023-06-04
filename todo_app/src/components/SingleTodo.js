import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, completeTodo } from "../store/TodoActions";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { Stack, Typography, Box, Checkbox, TextField } from "@mui/material";
import { useState } from "react";

const SingleTodo = (props) => {
  let { todo } = props;

  const [updatedTitle,setUpdatedTitle] = useState(todo.text);
  const [isEdit,setIsEdit] = useState(false);


  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, updatedText) => {
    dispatch(editTodo(id, updatedText));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <>
    {
      isEdit ? <TextField
      onInput = {(e) => {
        setUpdatedTitle(e.target.value)
      }} 
      value = { updatedTitle }
      onKeyUp = {(e) => {
        if(e.keyCode === 13){
          handleEditTodo(todo.id,e.target.value);
          setIsEdit(!isEdit);
        }
      }}
       /> :
      <Box
        sx={{
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          "&:hover": {
            cursor: "pointer"
          },
          p: 2,
          border: "1px dashed grey"
        }}
      >
        <Checkbox
          checked={todo.completed}
          onClick={() => handleCompleteTodo(todo.id)}
        />
        <Typography
          sx={{
            textDecoration: todo.completed ? "line-through" : "",
            color: todo.completed ? "gray" : ""
          }}
          variant="h5"
        >
          {todo.text}
        </Typography>
        <Stack spacing={3}>
          <Edit
            onClick={() =>
              setIsEdit(!isEdit)
            }
          />
          <DeleteIcon onClick={() => handleDeleteTodo(todo.id)} />
        </Stack>
      </Box>
    }
      
    </>
  );
};
export default SingleTodo;
