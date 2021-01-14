import React, { useContext } from "react";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { useHistory } from "react-router-dom";
import { PrimaryButton, CancelButton } from "../Styles/ButtonStyles";

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
const AdminText = styled.div`
  font-size: 2rem;
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
      <AdminText>Admin</AdminText>
      {adminData && (
        <>
          <div>
            {adminData.firstName} {adminData.lastName}, {adminData.email}
          </div>
          <div>
            <PrimaryButton onClick={logOut}>
              <box-icon
                name="right-arrow-circle"
                type="solid"
                color="#fdfdfd"
              ></box-icon>
              Log Out
            </PrimaryButton>
          </div>
        </>
      )}
    </StyledHeading>
  );
}
