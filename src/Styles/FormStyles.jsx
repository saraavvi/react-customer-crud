import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`;

const StyledInput = styled.div`
  input {
    width: 100%;
    border: none;
  }
  label {
    margin: 0;
  }
`;

export { StyledForm, StyledInput };
