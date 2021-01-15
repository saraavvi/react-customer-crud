import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { CustomerListContext } from "../contexts/CustomerListContext";
import styled from "styled-components";
import { StyledContainer, StyledDetailTable } from "../Styles/TableStyles";
import {
  PrimaryButton,
  DeleteButton,
  EditButton,
} from "../Styles/ButtonStyles";

export default function CustomerDetailPage(props) {
  const {
    customerList,
    currentCustomer,
    setCurrentCustomer,
    setCustomerList,
    getCustomers,
  } = useContext(CustomerListContext);

  const customerId = props.match.params.id;

  //med hjälp av id kan man loopa igenom customlist array och matcha mot rätt id där?
  //så behöver man inte fetcha igen.

  //   useEffect(() => {
  //     console.log("detailpage lodaded", currentCustomer);
  //     const customerDetails = customerList.filter((item) => {
  //       return item.id == customerId;
  //     });

  //     setCurrentCustomer(customerDetails[0]);
  //   }, []);

  const history = useHistory();

  //if current customer is not in context, fetch the current customer from backend
  useEffect(() => {
    // if (currentCustomer === null) {
    console.log("fetch");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentCustomer(data);
      });
    // } else {
    //   console.log("current customer:", currentCustomer);
    //   console.log("customer list:", customerList);
    //   const customerDetails = customerList.filter((item) => {
    //     return item.id == customerId;
    //   });
    //   console.log(customerDetails[0]);
    //   setCurrentCustomer(customerDetails[0]);
    // }
  }, []);

  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const token = localStorage.getItem("userToken");

  //ta bort den deletade från customerList också
  function deleteCustomer() {
    // updateList();
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => {
      history.push("/home");
      getCustomers();
    });
  }

  //   function updateList() {
  //     const newList = customerList.filter((item) => {
  //       return item.id != customerId;
  //     });
  //     console.log(newList);
  //     setCustomerList(newList);
  //   }
  // här skiver jag ut när jag har formdata MEN det är gammal formdata, skriv ut när NY formdata hämtats
  return (
    <div>
      <h1>Customer details</h1>
      {currentCustomer && (
        <StyledContainer>
          <StyledDetailTable>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{currentCustomer.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{currentCustomer.email}</td>
              </tr>
              <tr>
                <td>Organisation Number</td>
                <td>{currentCustomer.organisationNr}</td>
              </tr>
              <tr>
                <td>Payment Term</td>
                <td>{currentCustomer.paymentTerm}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{currentCustomer.phoneNumber}</td>
              </tr>
              <tr>
                <td>Reference</td>
                <td>{currentCustomer.reference}</td>
              </tr>
              <tr>
                <td>VAT Number</td>
                <td>{currentCustomer.vatNr}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{currentCustomer.email}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{currentCustomer.website}</td>
              </tr>
            </tbody>
          </StyledDetailTable>
          <Link to={`/home/${customerId}/edit`}>
            <EditButton>Edit Customer</EditButton>
          </Link>
          <DeleteButton onClick={deleteCustomer}>Delete Customer</DeleteButton>
          <Link to="/home">
            <PrimaryButton>Back to list</PrimaryButton>
          </Link>
        </StyledContainer>
      )}
    </div>
  );
}
//editknappen är en länk som skickat med props customerdetails till editpage
