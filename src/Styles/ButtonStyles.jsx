import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  margin-top: 5px;
  display: block;
  background-color: #4b478e;
  border: none;
  border-radius: 2px;
  padding: 10px;
  color: white;
`;

const LargeButton = styled(PrimaryButton)`
  margin: 20px 5px 5px 5px;
  border: none;
  padding: 15px;
`;

const CancelButton = styled(PrimaryButton)`
  background-color: orange;
`;

export { LargeButton, PrimaryButton, CancelButton };
