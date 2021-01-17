import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  margin: 5px 2px;
  background-color: #4b478e;
  border: none;
  border-radius: 2px;
  padding: 10px;
  color: white;
`;

const LargeButton = styled(PrimaryButton)`
  margin: 20px 5px 5px 5px;
  padding: 20px;
`;

const CancelButton = styled(PrimaryButton)`
  background-color: orange;
`;

const DeleteButton = styled(PrimaryButton)`
  background-color: red;
`;

const EditButton = styled(PrimaryButton)`
  background-color: seagreen;
`;

export { LargeButton, PrimaryButton, CancelButton, DeleteButton, EditButton };
