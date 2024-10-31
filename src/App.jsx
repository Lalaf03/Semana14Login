import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import { UserContext } from "./context/UserPovider";
import "./App.css";
import Navbar from "./components/navbar";
import RequiredAuth from "./components/RequiredAuth";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
