import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import CustomerListPage from "./Pages/CustomerListPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/customers">
          <CustomerListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
