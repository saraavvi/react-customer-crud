import React, { useContext } from "react";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { history, useHistory } from "react-router-dom";

const StyledHeading = styled.div`
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const history = useHistory();
  const { adminData, setAdminData } = useContext(CustomerListContext);
  console.log(adminData);
  //   let admin = null;
  //   if (localStorage.getItem("userData") !== null) {
  //     admin = JSON.parse(localStorage.getItem("userData"));
  //     console.log(admin);
  //   }
  function logOut() {
    console.log("logged out");
    /*skickas tillbaka till log in sida
    ta bort token från local storage
    rensa adminData
    */
    history.push("/");
    localStorage.removeItem("userToken");
    setAdminData(null);
  }

  return (
    <StyledHeading>
      <div>
        {adminData && (
          <p>
            {adminData.firstName} {adminData.lastName}, {adminData.email}
          </p>
        )}
      </div>
      <div>
        <button onClick={logOut}>Log Out</button>
      </div>
    </StyledHeading>
  );
}
