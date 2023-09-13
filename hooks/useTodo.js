import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    const action = { type: 'ADD_TODO', payload: todo };

    dispatch(action);
  };

  const onRemoveTodo = (id) => {
    const action = { type: 'REMOVE_TODO', payload: id };

    dispatch(action);
  };

  const onToggleTodo = (id) => {
    const action = { type: 'TOGGLE_TODO', payload: id };

    dispatch(action);
  };

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => {
    if (!todo.done) return todo;
  }).length;

  return {
    todos,
    onNewTodo,
    onRemoveTodo,
    onToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};
