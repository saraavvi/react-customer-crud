import React, { useContext, useEffect } from "react";
import InputField from "../Components/InputField";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { useHistory, Link } from "react-router-dom";

export default function CustomerEditPage(props) {
  const history = useHistory();
  const { formData } = useContext(CustomerListContext);
  //TODO: fixa så det går att mappa ut inpufields istället
  const customerId = props.match.params.id;
  function handleOnSubmit(e) {
    e.preventDefault();

    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("userToken");
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/home");
      });
  }
  console.log(history);
  return (
    <div>
      <h2>Edit Customer</h2>
      {formData && (
        <>
          {/* {console.log(customerDetails.name)} */}
          <form onSubmit={handleOnSubmit}>
            <InputField
              value={formData.name}
              name="name"
              label="Customer Name"
            />
            <InputField
              value={formData.email}
              name="email"
              label="Customer Email"
              type="email"
            />
            <InputField
              value={formData.organisationNr}
              name="organisationNr"
              label="Organisation Number"
              type="number"
            />
            <InputField
              value={formData.paymentTerm}
              name="paymentTerm"
              label="Payment Term"
              type="number"
            />
            <InputField
              value={formData.phoneNumber}
              name="phoneNumber"
              label="Phone Number"
              type="tel"
            />
            <InputField
              value={formData.reference}
              name="reference"
              label="Reference"
            />
            <InputField
              value={formData.vatNr}
              name="vatNr"
              label="Vat Number"
            />
            <InputField
              value={formData.website}
              name="website"
              label="Website"
              type="url"
            />

            <button type="submit">Update</button>
            <Link to={`/home/${customerId}`}>
              <button>Cancel</button>
            </Link>
          </form>
        </>
      )}
    </div>
  );
}
