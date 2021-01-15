import React, { useContext, useEffect } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { StyledInput } from "../Styles/FormStyles";

export default function InputField({ name, label, type, value }) {
  const { currentCustomer, setCurrentCustomer } = useContext(
    CustomerListContext
  );
  function vatValidate() {}
  useEffect(() => {
    console.log(currentCustomer);
  }, []);
  return (
    //om name är vatNr ska fältet valideras
    <StyledInput>
      <label>{label}</label>
      <input
        type={type || "text"}
        value={value}
        name={name}
        onChange={(e) => {
          setCurrentCustomer({
            ...currentCustomer,
            [e.target.name]: e.target.value,
          });
          console.log(currentCustomer);
        }}
        required
      />
    </StyledInput>
  );
}
