import TodoItem from "./TodoItem";
import React, { useState } from "react";

export default function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div>
        <div class="container">
            <h1>Todo List</h1>
            <h2 class="count">{count}</h2>
        </div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        class="button"
        onClick={() => {
          setTasks([...tasks, newTask]);
          setNewTask("");
          setCount(count+1);
        }}
      >
        Add
      </button>
      <br />

    <div class="setup">
    {tasks.map((task, i) => (
        <div 
            class="row"
            key={i}
        >
            <div 
                class="taskName"
                onDoubleClick={() => {
                    const newTasks = tasks.filter((item, index) => index !== i);
                    setTasks(newTasks);
                    setCount(count-1);
                  }}
            >
                <TodoItem newTask={task} />
            </div>
          <div class="box">
            <button
              class="check"
              onClick={() => {
              const newTasks = tasks.filter((item, index) => index !== i);
              setTasks(newTasks);
              setCount(count-1);
            }}
            >
            Done
            </button>
          </div>        
        </div>
      ))}
    </div>
    </div>
  );
}
