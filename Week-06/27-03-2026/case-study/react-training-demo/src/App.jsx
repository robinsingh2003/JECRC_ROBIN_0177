// import Header from './component/header';
// import Card from './component/card';
// import Userprofile from './component/Userprofile';
// import TodoForm from './component/TodoForm';
// import TodoItem from './component/Todoitem';
// import TodoStats from './component/Todostats';

// function App() {

//   const projects = [
//     { id: 1, title: 'Project 1', content: 'This is project 1', icon: '🚀', isfeatured: true },
//     { id: 2, title: 'Project 2', content: 'This is project 2', icon: '💻' },
//     { id: 3, title: 'Project 3', content: 'This is project 3', icon: '📱' },
//   ];

//   const handleEdit = () => {
//     alert("Edit profile clicked!");
//   };

//   return (
//     <div>

//       {/* 🔹 Header */}
//       <Header 
//         title="My Portfolio" 
//         subtitle="Welcome to my projects!" 
//       />

//       {/* 🔹 User Profile Section */}
//       <div style={{ marginTop: '20px' }}>
//         <Userprofile 
//           name="Saurav choduu"
//           age={25}
//           email="sauravchoduuuu@gmail.com"
//           isActive={false}
//           hobbies={["Coding", "Gaming", "Reading"]}
//           onEdit={handleEdit}
//         />
//       </div>

//       {/* 🔹 Projects Section */}
//       <h2 style={{ textAlign: 'center', marginTop: '30px' }}>
//         My Projects
//       </h2>

//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap'
//       }}>
//         {projects.map(project => (
//           <Card key={project.id} {...project} />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoItem from './component/Todoitem';
import TodoStats from './component/Todostats';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Props', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Component Communication', completed: false }
  ]);
  
  // Add new todo - receives data from child (TodoForm)
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };
  
  // Toggle todo status - receives data from child (TodoItem)
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  // Delete todo - receives data from child (TodoItem)
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 Todo App - Communication Patterns</h1>
      <p style={{ color: '#666' }}>
        <strong>Patterns shown:</strong><br/>
        • Parent → Child: Props passed to TodoForm, TodoItem, TodoStats<br/>
        • Child → Parent: Callbacks (addTodo, toggleTodo, deleteTodo)<br/>
        • Sibling Communication: TodoForm updates state, TodoStats displays it
      </p>
      
      {/* Child to Parent: TodoForm sends data UP via onAddTodo */}
      <TodoForm onAddTodo={addTodo} />
      
      {/* Parent to Child: Stats receives todos via props */}
      <TodoStats todos={todos} />
      
      {/* Parent to Child: TodoItem receives data and callbacks */}
      <div>
        <h3>Your Tasks</h3>
        {todos.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;