import React, { useContext } from "react";
import InputField from "../Components/InputField";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { useHistory, Link } from "react-router-dom";
import { StyledForm } from "../Styles/FormStyles";
import { PrimaryButton, CancelButton } from "../Styles/ButtonStyles";

export default function CustomerEditPage(props) {
  const history = useHistory();
  const { currentCustomer, getCustomers } = useContext(CustomerListContext);

  const customerId = props.match.params.id;

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("userToken");
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(currentCustomer),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getCustomers();
        history.push("/home");
      });
  }

  return (
    <div>
      {currentCustomer && (
        <>
          <StyledForm onSubmit={handleOnSubmit}>
            <h1>Edit Customer</h1>
            <InputField
              value={currentCustomer.name}
              name="name"
              label="Customer Name"
            />
            <InputField
              value={currentCustomer.email}
              name="email"
              label="Customer Email"
              type="email"
            />
            <InputField
              value={currentCustomer.organisationNr}
              name="organisationNr"
              label="Organisation Number"
              type="number"
            />
            <InputField
              value={currentCustomer.paymentTerm}
              name="paymentTerm"
              label="Payment Term"
              type="number"
            />
            <InputField
              value={currentCustomer.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              type="tel"
            />
            <InputField
              value={currentCustomer.reference}
              name="reference"
              label="Reference"
            />
            <InputField
              value={currentCustomer.vatNr}
              name="vatNr"
              label="Vat Number"
            />
            <InputField
              value={currentCustomer.website}
              name="website"
              label="Website"
              type="url"
            />

            <PrimaryButton type="submit">Update</PrimaryButton>
            <Link to={`/home/${customerId}`}>
              <CancelButton>Cancel</CancelButton>
            </Link>
          </StyledForm>
        </>
      )}
    </div>
  );
}
