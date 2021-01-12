import React, { useEffect, useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";

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
      <h2>Customer List Page</h2>
      {customerList.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}
