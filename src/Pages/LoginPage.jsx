import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";

const StyledForm = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
`;

const StyledButton = styled.button`
  display: block;
`;

export default function LoginPage() {
  const { adminData, setAdminData } = useContext(CustomerListContext);
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
        getUser();
        history.push("/home");
      });
  }
  function getUser() {
    const token = localStorage.getItem("userToken");
    fetch("https://frebi.willandskill.eu/api/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAdminData(data));
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
