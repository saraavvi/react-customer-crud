import React, { useContext } from "react";
import { CustomerListContext } from "../contexts/CustomerListContext";

export default function InputField({ name, label, type, value }) {
  const { formData, setFormData } = useContext(CustomerListContext);
  return (
    <>
      <label>{label}</label>
      <input
        type={type || "text"}
        value={value || ""}
        name={name}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
      />
    </>
  );
}
