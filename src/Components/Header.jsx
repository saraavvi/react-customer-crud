import React, { useContext } from "react";
import styled from "styled-components";
import { CustomerListContext } from "../contexts/CustomerListContext";

const StyledHeading = styled.div`
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  const { adminData, setAdminData, isLoggedIn } = useContext(
    CustomerListContext
  );
  console.log(adminData);
  console.log(isLoggedIn);
  let admin = null;
  if (localStorage.getItem("userData") !== null) {
    admin = JSON.parse(localStorage.getItem("userData"));
    console.log(admin);
  }

  return (
    <StyledHeading>
      <div>
        {/* {adminData && (
          <p>
            {adminData.firstName} {adminData.lastName}, {adminData.email}
          </p>
        )} */}
        {/* <p>
          {admin.firstName} {admin.lastName}, {admin.email}
        </p> */}
        {admin && (
          <p>
            {admin.firstName} {admin.lastName}, {admin.email}
          </p>
        )}
      </div>
      <div>
        <button>Log Out</button>
      </div>
    </StyledHeading>
  );
}
