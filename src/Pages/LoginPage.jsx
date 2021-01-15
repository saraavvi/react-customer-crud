import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { LargeButton } from "../Styles/ButtonStyles";
const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;
const StyledBox = styled.div`
  background-color: white;
  border-radius: 3px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  text-align: center;
`;
const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// const StyledButton = styled.button`
//   display: block;
//   font-size: 1rem;
//   margin: 20px 5px 5px 5px;
//   background-color: #4b478e;
//   border: none;
//   border-radius: 2px;
//   padding: 15px;
//   color: white;
// `;

const StyledField = styled.input`
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid lightgrey;
`;

export default function LoginPage() {
  const { setUserData } = useContext(CustomerListContext);
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "Sara.Viktorsson@yh.nackademin.se",
    password: "javascriptoramverk",
  });

  function handleOnChange(e) {
    const newData = { ...loginData, [e.target.name]: e.target.value };
    setLoginData(newData);
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
        localStorage.setItem("userToken", data.token);
        getUser();
        if (data.token) history.push("/home");
        else window.alert("invalid email or password");
        // history.push("/home");
      })
      .catch((err) => console.error(err));
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
      .then((data) => {
        setUserData(data);
      });
  }
  return (
    <StyledContainer>
      <StyledBox>
        <h1>Log in</h1>

        <StyledLoginForm onSubmit={handleOnSubmit}>
          <StyledField
            value={loginData.email}
            onChange={handleOnChange}
            name="email"
            placeholder="Email address"
          ></StyledField>

          <StyledField
            value={loginData.password}
            onChange={handleOnChange}
            name="password"
            placeholder="Password"
          ></StyledField>
          <LargeButton type="submit">LOG IN</LargeButton>
        </StyledLoginForm>
      </StyledBox>
    </StyledContainer>
  );
}
