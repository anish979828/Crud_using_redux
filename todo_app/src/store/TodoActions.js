
export function addTodo(todo) {
    return { type: "ADD_TODO", payload: todo };
  }
  
  export function deleteTodo(id) {
    return { type: "DELETE_TODO", payload: id };
  }
  
  export function editTodo(id, updatedText) {
    return { type: "EDIT_TODO", payload: { id, updatedText } };
  }
  
  export function completeTodo(id) {
    return { type: "COMPLETE_TODO", payload: id };
  }
  
  export function setFilter(filter) {
    return { type: "SET_FILTER", payload: filter };
  }
  export function clearCompleted() {
    return { type: "CLEAR_COMPLETED" };
  };
  