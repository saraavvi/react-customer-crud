import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import CustomerListPage from "./Pages/CustomerListPage";
// import Navigation from "./Components/Navigation";
import CustomerCreatePage from "./Pages/CustomerCreatePage";
import { CustomerListContext } from "./contexts/CustomerListContext";
import CustomerDetailPage from "./Pages/CustomerDetailPage";
import Header from "./Components/Header";
import CustomerEditPage from "./Pages/CustomerEditPage";
import "boxicons";

function App() {
  const [customerList, setCustomerList] = useState(null);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [userData, setUserData] = useState(null);

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
        setCustomerList(data.results);
      });
  }
  function getUser() {
    const token = localStorage.getItem("userToken");
    fetch("https://frebi.willandskill.eu/api/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }

  // useEffect(() => {
  //   if (localStorage.getItem("userToken")) {
  //     getCustomers();
  //   }
  // }, []);

  return (
    <CustomerListContext.Provider
      value={{
        customerList,
        setCustomerList,
        currentCustomer,
        setCurrentCustomer,
        userData,
        setUserData,
        getCustomers,
        getUser,
      }}
    >
      <div className="container-fluid ml-0">
        <div className="row">
          <Header className="col-12" />
        </div>
        <div className="row">
          {/* <Navigation className="col-4 " /> */}
          <div className="col-12">
            <Switch>
              <Route path="/home/create">
                <CustomerCreatePage />
              </Route>

              <Route path="/home/:id/edit" component={CustomerEditPage} />

              <Route path="/home/:id" component={CustomerDetailPage} />

              <Route path="/home">
                <CustomerListPage />
              </Route>

              <Route path="/">
                <LoginPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </CustomerListContext.Provider>
  );
}

export default App;
