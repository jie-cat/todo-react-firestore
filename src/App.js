import React, { useState, useEffect } from "react";
// react-icons
import { IoMdAdd } from "react-icons/io";
// Components
import Todo from "./components/Todo";
// Firebase
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const style = {
  bg: `h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-5`,
  container: `bg-slate-100 max-w-xl m-auto rounded-lg p-5`,
  heading: `text-4xl text-center py-2 font-bold`,
  form: `flex justify-between`,
  input: `w-full px-2 py-5 outline-none text-xl`,
  button: `p-4 bg-pink-500 ml-3 text-slate-100`,
  count: `text-center`,
};

function App() {
  // 存todos資料
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // Firebase CRUD
  // Create todo to firebase
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please input valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from Firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todosArr);
    });

    return () => unsubscribe();
  }, []);

  // Update todo in Firebase
  const toggleComplete = async (todo) => {
    let task = doc(db, "todos", todo.id);
    await updateDoc(task, {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className={style.input}
            placeholder="Add Todo"
          />
          <button className={style.button}>
            <IoMdAdd size={30} />
          </button>
        </form>
        <ul>
          {todo.map((item, index) => {
            return (
              <Todo
                task={item}
                key={index}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            );
          })}
        </ul>

        {todo.length < 1 ? null : (
          <p className={style.count}>{`You have ${todo.length} todo.`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
