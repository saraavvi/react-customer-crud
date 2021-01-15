import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: white;
  padding: 1rem;
`;

const StyledDetailTable = styled.table`
  margin-top: 1rem;
  border: 1px solid #eceef0;
  width: 100%;
  td {
    padding: 0.7rem;
    border: 1px solid #eceef0;
  }
`;

const StyledTable = styled(StyledDetailTable)`
  margin-top: 1rem;
  border: 1px solid #eceef0;
  width: 100%;
  td {
    padding: 0.7rem;
    border: 1px solid #eceef0;
  }
  tr:nth-child(odd) {
    background-color: #eceef048;
  }
  th {
    border: 1px solid #eceef0;
    background-color: white;
    padding: 0.7rem;
  }
  tr:hover {
    background-color: #eceef0;
    cursor: pointer;
  }
`;

export { StyledContainer, StyledTable, StyledDetailTable };
