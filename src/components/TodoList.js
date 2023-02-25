import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      alert('Error!Please, try again.');
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const completeTodo = id => {
    console.log("id ", id)
    let updateTodos = todos.map(todo => {
      // {
      //   id: 1,
      //   text: 'test',
      // }
      // console.log(!todo.isComplete) null , undefined
      // const test = null;

      // if(!test) {
      //   console.log('jijjji')
      // }

      // !null = true;
      // !undefined = true
      // !false = true;

      // !true= false;

      // !!null = false
      // !'' = true;


      // console.log(!todo.isComplete)
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });

    setTodos(updateTodos);
    // TODO: Tomorrow we will start from here.
    // FIXME: help me here.
  };

  return (
    <div>
      <h1>What's the Plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo} 
      />
    </div>
  );
}

export default TodoList
