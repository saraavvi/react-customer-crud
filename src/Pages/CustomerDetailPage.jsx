import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function CustomerDetailPage(props) {
  console.log(props);
  const customerId = props.match.params.id;
  const [customerDetails, setCustomerDetails] = useState(null);
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
        setCustomerDetails(data);
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

  return (
    <div>
      <h1>Customer Detail Page</h1>
      {customerDetails && (
        <>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{customerDetails.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{customerDetails.email}</td>
              </tr>
              <tr>
                <td>Organisation Number</td>
                <td>{customerDetails.organisationNr}</td>
              </tr>
              <tr>
                <td>Payment Term</td>
                <td>{customerDetails.paymentTerm}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{customerDetails.phoneNumber}</td>
              </tr>
              <tr>
                <td>Reference Number</td>
                <td>{customerDetails.reference}</td>
              </tr>
              <tr>
                <td>VAT Number</td>
                <td>{customerDetails.vatNr}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{customerDetails.email}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>{customerDetails.website}</td>
              </tr>
            </tbody>
          </table>
          <button>Edit Customer</button>
          <button onClick={deleteCustomer}>Delete Customer</button>
        </>
      )}
    </div>
  );
}
