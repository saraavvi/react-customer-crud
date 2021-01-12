import React, { useEffect, useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";
import CustomerListItem from "../Components/CustomerListItem";

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
  return (
    <div>
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((item) => {
            // const data = { id: item.id, name: item.name, email: item.email };
            return <CustomerListItem key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
