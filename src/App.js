// import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
import AddTodo from "./myComponents/AddTodo";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import About from "./About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("onDelete Clicked" + todo);
    settodos(todos.filter((a) => a !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (tittle, desc) => {
    let sno;
    if (todos.length === 0) sno = 1;
    else sno = todos[todos.length - 1].S_no + 1;
    const mytodo = {
      S_no: sno,
      tittle: tittle,
      desc: desc,
    };
    settodos([...todos, mytodo]);
  };
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header tittle="My TodoList" searchBar={false} />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
