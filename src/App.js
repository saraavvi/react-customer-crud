import React, { useState } from "react";
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
  const [customerList, setCustomerList] = useState([]);
  const [formData, setFormData] = useState({});
  const [adminData, setAdminData] = useState(null);
  return (
    <CustomerListContext.Provider
      value={{
        customerList,
        setCustomerList,
        formData,
        setFormData,
        adminData,
        setAdminData,
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
