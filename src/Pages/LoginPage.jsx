import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
`;

const StyledButton = styled.button`
  display: block;
`;

export default function LoginPage() {
  const history = useHistory();
  console.log(history);
  const [loginData, setLoginData] = useState({
    email: "Sara.Viktorsson@yh.nackademin.se",
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
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("userToken", data.token);
        history.push("/home");
      });
  }
  return (
    <div>
      <StyledForm>
        <h1>LOGIN</h1>

        <form onSubmit={handleOnSubmit}>
          {/* <label>Email</label> */}

          <input
            value={loginData.email}
            onChange={handleOnChange}
            name="email"
            placeholder="email"
          ></input>

          <input
            value={loginData.password}
            onChange={handleOnChange}
            name="password"
            placeholder="password"
          ></input>

          <StyledButton type="submit">Log in</StyledButton>
        </form>
      </StyledForm>
    </div>
  );
}
