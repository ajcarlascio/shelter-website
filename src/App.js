import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentForm, setForm] = useState("Login");

  const toggleForm = (formName) => {
    setForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "Login" ? <Login onToggle={toggleForm} /> : <Register onToggle={toggleForm}/>}
    </div>
  );
}

export default App;
