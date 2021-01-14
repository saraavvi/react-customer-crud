import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { CustomerListContext } from "../contexts/CustomerListContext";

export default function CustomerDetailPage(props) {
  console.log(props);
  const {
    customerDetails,
    setCustomerDetails,
    formData,
    setFormData,
  } = useContext(CustomerListContext);

  const customerId = props.match.params.id;
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const token = localStorage.getItem("userToken");
  const history = useHistory();

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData(data);
      });
  }, []);

  function deleteCustomer() {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(history.push("/home"));
  }
  //   function editCustomer() {
  //     setFormData(customerDetails);
  //   }

  return (
    <div>
      <h1>Customer Detail Page</h1>
      {formData && (
        <>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{formData.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <td>Organisation Number</td>
                <td>{formData.organisationNr}</td>
              </tr>
              <tr>
                <td>Payment Term</td>
                <td>{formData.paymentTerm}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{formData.phoneNumber}</td>
              </tr>
              <tr>
                <td>Reference</td>
                <td>{formData.reference}</td>
              </tr>
              <tr>
                <td>VAT Number</td>
                <td>{formData.vatNr}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{formData.website}</td>
              </tr>
            </tbody>
          </table>
          <Link to={`/home/${customerId}/edit`}>
            <button>Edit Customer</button>
          </Link>
          <button onClick={deleteCustomer}>Delete Customer</button>
          <Link to="/home">Back to list</Link>
        </>
      )}
    </div>
  );
}
//editknappen är en länk som skickat med props customerdetails till editpage
