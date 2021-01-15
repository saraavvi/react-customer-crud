import React from "react";
import { useHistory } from "react-router-dom";

export default function CustomerListItem({ item }) {
  const history = useHistory();

  function handleOnClick() {
    history.push(`/home/${item.id}/`);
  }
  return (
    <tr onClick={handleOnClick}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phoneNumber}</td>
    </tr>
  );
}
