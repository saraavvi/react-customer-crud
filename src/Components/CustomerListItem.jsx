import React from "react";
import { Link } from "react-router-dom";

export default function CustomerListItem({ item }) {
  return (
    <tr>
      <td>
        <Link to={`/home/${item.id}/`}>{item.name}</Link>
      </td>
      <td>{item.email}</td>
    </tr>
  );
}
