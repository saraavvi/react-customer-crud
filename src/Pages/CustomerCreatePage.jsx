import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import InputField from "../Components/InputField";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { StyledForm } from "../Styles/FormStyles";
import { PrimaryButton, CancelButton } from "../Styles/ButtonStyles";

export default function CustomerCreatePage() {
  const history = useHistory();
  const {
    currentCustomer,
    setCustomerList,
    customerList,
    getCustomers,
  } = useContext(CustomerListContext);

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("userToken");
    //post new customer
    fetch(url, {
      method: "POST",
      body: JSON.stringify(currentCustomer),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //det jag gör nu är att: lägga till data i backend.
        //och spara samma datt i context.
        // ska jag istället hämta all data från backend och spare DENNA i context istället?
        // const newItem = [data];
        // const newList = customerList.concat(newItem);
        // setCustomerList(newList);
        getCustomers();
        history.push("/home");
      });
  }
  return (
    <div>
      <StyledForm onSubmit={handleOnSubmit}>
        <h1>Create new customer</h1>
        <InputField name="name" label="Customer Name" />
        <InputField name="email" label="Customer Email" type="email" />
        <InputField
          name="organisationNr"
          label="Organisation Number"
          type="number"
        />
        <InputField name="paymentTerm" label="Payment Term" type="number" />
        <InputField name="phoneNumber" label="Phone Number" type="tel" />
        <InputField name="reference" label="Reference" />
        <InputField name="vatNr" label="Vat Number" />
        <InputField name="website" label="Website" type="url" />

        <PrimaryButton type="submit">Create Customer</PrimaryButton>
        <Link to="/home">
          <CancelButton>Cancel</CancelButton>
        </Link>
      </StyledForm>
    </div>
  );
}
