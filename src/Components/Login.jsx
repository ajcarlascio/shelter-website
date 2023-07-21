import { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
      <div className="auth">
        <h1>Login</h1>
        <form className="login" onSubmit={handleSubmit}>
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
          <button className="loginbtn" type="submit">Login</button>
        </form>
        <button onClick={() => props.onToggle('Register')}>If you need an account, please register here.</button>
      </div>
    );
}