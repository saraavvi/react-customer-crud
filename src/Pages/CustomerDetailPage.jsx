import React, { useEffect, useState } from "react";

export default function CustomerDetailPage(props) {
  console.log(props);
  const customerId = props.match.params.id;
  const [customerDetails, setCustomerDetails] = useState(null);

  useEffect(() => {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("userToken");
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
          <button>Delete Customer</button>
        </>
      )}
    </div>
  );
}
