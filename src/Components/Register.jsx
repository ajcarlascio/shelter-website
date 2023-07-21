import { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-register">
      <h1>Register</h1>
      <form className="register" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" Full Name"
          id="name"
          name="name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder=" Email"
          id="email"
          name="email"
        />
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder=" Password"
          id="password"
          name="password"
        />
        <button className="registerbtn" type="submit">Create Account</button>
      </form>
      <button onClick={() => props.onToggle("Login")}>Go back, I already have an account </button>
    </div>
  );
};
