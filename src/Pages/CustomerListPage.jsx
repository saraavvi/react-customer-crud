import React, { useEffect, useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";
import CustomerListItem from "../Components/CustomerListItem";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Styles/ButtonStyles";
import { StyledContainer, StyledTable } from "../Styles/TableStyles";

export default function CustomerListPage() {
  const { customerList, setCurrentCustomer, getCustomers } = useContext(
    CustomerListContext
  );

  useEffect(() => {
    //if customerList is not in context -> fetch it.
    if (customerList === null) {
      getCustomers();
    }
  }, []);

  function createCustomer() {
    setCurrentCustomer({});
  }
  return (
    <>
      <h1>Customers</h1>
      <StyledContainer>
        <Link to="/home/create">
          <PrimaryButton onClick={createCustomer}>Add customer</PrimaryButton>
        </Link>
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          {customerList && (
            <tbody>
              {customerList.map((item) => {
                return <CustomerListItem key={item.id} item={item} />;
              })}
            </tbody>
          )}
        </StyledTable>
      </StyledContainer>
    </>
  );
}
