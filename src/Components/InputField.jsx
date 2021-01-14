import React, { useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";
import { StyledInput } from "../Styles/FormStyles";

export default function InputField({ name, label, type, value }) {
  const { formData, setFormData } = useContext(CustomerListContext);
  return (
    <StyledInput>
      <label>{label}</label>
      <input
        type={type || "text"}
        value={value}
        name={name}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
      />
    </StyledInput>
  );
}
