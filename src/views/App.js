import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/mycomponent";
import ListTodos from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./example/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodos />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:userid" element={<DetailUser />} />
          </Routes>
        </header>
      </div>
      <DetailUser />
    </BrowserRouter>
  );
}

export default App;
