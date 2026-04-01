import { useState } from "react";
import "../styles/todo.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Add Task
  const addTask = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (task.trim() === "") return;

      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false,
        createdAt: new Date()
      };

      setTodos([newTodo, ...todos]);
      setTask("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Filter Todos
  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="todo-container">
      <div className="todo-card">
        <div className="todo-header">
          <h1 className="todo-title">📝 My Tasks</h1>
          <p className="todo-subtitle">Stay organized and productive</p>
        </div>

        {/* Input Section */}
        <div className="input-section">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyPress={addTask}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button onClick={addTask} className="btn-add">+ Add</button>
        </div>

        {/* Stats */}
        {todos.length > 0 && (
          <div className="stats">
            <div className="stat-item">
              <span className="stat-label">Total:</span>
              <span className="stat-value">{todos.length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Active:</span>
              <span className="stat-value">{activeCount}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Completed:</span>
              <span className="stat-value">{completedCount}</span>
            </div>
          </div>
        )}

        {/* Filters */}
        {todos.length > 0 && (
          <div className="filter-section">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "active" ? "active" : ""}`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`filter-btn ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
        )}

        {/* Todo List */}
        {todos.length === 0 ? (
          <div className="empty-state">
            <p className="empty-text">🎉 No tasks yet!</p>
            <p className="empty-subtext">Add a task to get started</p>
          </div>
        ) : filteredTodos.length === 0 ? (
          <div className="empty-state">
            <p className="empty-text">✨ All caught up!</p>
            <p className="empty-subtext">No {filter} tasks</p>
          </div>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <button
                  className={`checkbox ${todo.completed ? "checked" : ""}`}
                  onClick={() => toggleComplete(todo.id)}
                  aria-label="Toggle task"
                >
                  {todo.completed ? "✓" : ""}
                </button>
                <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
                  {todo.text}
                </span>
                <button
                  className="btn-delete"
                  onClick={() => deleteTask(todo.id)}
                  aria-label="Delete task"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;