import React, { useState } from "react";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "webb19@willandskill.se",
    password: "javascriptoramverk",
  });

  function handleOnChange(e) {
    console.log(e.target.name, e.target.value);
    const newData = { ...loginData, [e.target.name]: e.target.value };
    setLoginData(newData);
    console.log(loginData);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = {
      email: loginData.email,
      password: loginData.password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Email</label>
        <input
          value={loginData.email}
          onChange={handleOnChange}
          name="email"
        ></input>
        <label>Password</label>
        <input
          value={loginData.password}
          onChange={handleOnChange}
          name="password"
        ></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
