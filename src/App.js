import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import CustomerListPage from "./Pages/CustomerListPage";
import Navigation from "./Components/Navigation";
import CustomerCreatePage from "./Pages/CustomerCreatePage";
import { CustomerListContext } from "./contexts/CustomerListContext";
import CustomerDetailPage from "./Pages/CustomerDetailPage";

function App() {
  const [customerList, setCustomerList] = useState([]);
  const [formData, setFormData] = useState({});
  return (
    <div className="container ml-0">
      <div className="row">
        <Navigation className="col-4 " />
        <div className="col-8">
          <CustomerListContext.Provider
            value={{ customerList, setCustomerList, formData, setFormData }}
          >
            <Switch>
              <Route path="/home/:id" component={CustomerDetailPage} />
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/home/create">
                <CustomerCreatePage />
              </Route>
              <Route path="/home">
                <CustomerListPage />
              </Route>
            </Switch>
          </CustomerListContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
