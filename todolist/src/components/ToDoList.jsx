import React from "react";
import { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [todos, setToDos] = useState([]);

  const addToDo = () => {
    const value = document.getElementById("erste").value;
    const todo = {
      text: value,
      done: false,
    };
    console.log(value);
    setToDos((prev) => [...prev, todo]);
  };

  const change = (key) => {
    const newArr = [...todos];
    newArr[key].done = !newArr[key].done;
    setToDos(newArr);
    console.log(key);
  };

  return (
    <div>
      <h1>ToDos</h1>
      <input id="erste" type="text" placeholder="Was gibts?" />
      <button onClick={addToDo}>+</button>
      {todos.map((item, key) => (
        <ToDo
          key={key}
          index={key}
          text={item.text}
          done={item.done}
          change={change}
        />
      ))}
    </div>
  );
};

export default ToDoList;
