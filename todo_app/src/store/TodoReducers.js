import { combineReducers } from "redux";

function todos(
  state = JSON.parse(localStorage.getItem("todos")) || [],
  action
) 
{
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { text: action.payload, completed: false, id: Date.now() }
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.updatedText };
        }
        return todo;
      });

    case "COMPLETE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    case "Complete_All":
    return state.map((todo) => {
      return {...todo,completed:true}
    });
    default:
      return state;
  }
}

function filter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    case "Search_todo":
      return {type:"Search_todo",search:action.payload }
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  filter
});
