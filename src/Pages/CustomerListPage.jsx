import React, { useEffect, useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";
import CustomerListItem from "../Components/CustomerListItem";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../Styles/ButtonStyles";

const StyledContainer = styled.div`
  background-color: white;
  padding: 1rem;
`;

const StyledTable = styled.table`
  margin-top: 1rem;
  border: 1px solid #eceef0;
  width: 100%;
  td {
    padding: 0.7rem;
    border: 1px solid #eceef0;
  }
  tr:nth-child(odd) {
    background-color: #eceef048;
  }
  th {
    border: 1px solid #eceef0;
    background-color: white;
    padding: 0.7rem;
  }
  tr:hover {
    background-color: #eceef0;
    cursor: pointer;
  }
`;

export default function CustomerListPage() {
  const { customerList, setCustomerList } = useContext(CustomerListContext);
  function getCustomers() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("userToken");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setCustomerList(data.results);
      });
  }
  useEffect(() => {
    getCustomers();
  }, []);
  //if there is a token: display List page, otherwise display a message

  return (
    <>
      <h1>Customers</h1>
      <StyledContainer>
        <Link to="/home/create">
          <PrimaryButton>Add customer</PrimaryButton>
        </Link>
        {localStorage.getItem("userToken") !== null ? (
          <StyledTable>
            <thead>
              <tr>
                <th>
                  Name
                  <box-icon name="sort-alt-2"></box-icon>
                </th>
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
        ) : (
          <p>You need to be logged in</p>
        )}
      </StyledContainer>
    </>
  );
}
