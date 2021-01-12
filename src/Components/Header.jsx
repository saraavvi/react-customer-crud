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
  const { adminData, setAdminData } = useContext(CustomerListContext);
  console.log(adminData);
  return (
    <StyledHeading>
      <div>
        Logged in as: {adminData.firstName} {adminData.lastName},{" "}
        {adminData.email}{" "}
      </div>
      <div>
        <button>Log Out</button>
      </div>
    </StyledHeading>
  );
}
