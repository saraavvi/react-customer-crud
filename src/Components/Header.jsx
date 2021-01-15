import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../Styles/ButtonStyles";

const StyledHeading = styled.div`
  width: 100%;
  height: 70px;
  color: white;
  background-color: #4b478e;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
`;
const UserText = styled.div`
  font-size: 2rem;
`;

export default function Header() {
  const history = useHistory();
  const { userData, setUserData, getUser } = useContext(CustomerListContext);

  function logOut() {
    history.push("/");
    localStorage.removeItem("userToken");
    setUserData(null);
  }
  // istället för att ksirva get me funktionen här igen, skicka med den ifrån login so prop
  useEffect(() => {
    if (userData === null) {
      getUser();
    }
  }, []);

  //ändra så att:
  // vill kolla om det finns en GILTIG token och isåfall skriv ut adminuppgifter och logout button
  return (
    <StyledHeading>
      <UserText>CRUD</UserText>
      {userData && (
        <>
          <div>
            {userData.firstName} {userData.lastName} {userData.email}
          </div>
          <div>
            <PrimaryButton onClick={logOut}>Log Out</PrimaryButton>
          </div>
        </>
      )}
    </StyledHeading>
  );
}
