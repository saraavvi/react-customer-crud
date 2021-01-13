import React, { useContext } from "react";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { useHistory } from "react-router-dom";

const StyledHeading = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const history = useHistory();
  const { adminData, setAdminData } = useContext(CustomerListContext);
  console.log(adminData);

  function logOut() {
    history.push("/");
    localStorage.removeItem("userToken");
    setAdminData(null);
  }
  //ändra så att:
  // vill kolla om det finns en GILTIG token och isåfall skriv ut adminuppgifter och logout button
  return (
    <StyledHeading>
      <div>
        <div>NÅNTING</div>
        {adminData && (
          <p>
            {adminData.firstName} {adminData.lastName}, {adminData.email}
          </p>
        )}
      </div>
      <div>
        {/* {localStorage.getItem("userToken")} */}
        <button onClick={logOut}>Log Out</button>
      </div>
    </StyledHeading>
  );
}
