import React from 'react';
import './App.css';
import TodoList from './Todo/TodoList';
import Context from './Context'

function App() {
    const [todos, setTodos] = React.useState(
        [
            { id: 1, completed: false, title: 'Купить хлеб' },
            { id: 2, completed: false, title: 'Купить кровать' },
            { id: 3, completed: false, title: 'Купить колбасу' }
        ]
    );

    function toogleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }))
    }

    function removeTodo(id){
      setTodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <Context.Provider value={{removeTodo}}>
      <div className="App">
        <div className="wrapper">
          <h1>React tutorial</h1>
                {todos.length ? <TodoList todos={todos} onToggle={toogleTodo}/> : <p>No todos</p>}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
