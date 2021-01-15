import React, { useEffect, useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";
import CustomerListItem from "../Components/CustomerListItem";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Styles/ButtonStyles";
import { StyledContainer, StyledTable } from "../Styles/TableStyles";

export default function CustomerListPage() {
  const {
    customerList,
    setCustomerList,
    setCurrentCustomer,
    getCustomers,
  } = useContext(CustomerListContext);

  // function getCustomers() {
  //   const url = "https://frebi.willandskill.eu/api/v1/customers/";
  //   const token = localStorage.getItem("userToken");
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCustomerList(data.results);
  //     });
  // }
  useEffect(() => {
    //if customerList is not in context -> fetch it.
    if (customerList === null) {
      console.log("fetched");
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
              {console.log(customerList)}
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
