import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import InputField from "../Components/InputField";
import { CustomerListContext } from "../contexts/CustomerListContext";

export default function CustomerCreatePage() {
  const history = useHistory();
  const { formData, setFormData } = useContext(CustomerListContext);
  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("userToken");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/home");
      });
  }
  return (
    <div>
      <h2>Create a new customer</h2>
      <form onSubmit={handleOnSubmit}>
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

        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
}
