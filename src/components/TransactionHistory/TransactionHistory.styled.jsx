import styled from 'styled-components';

export const Table = styled.table`
  margin: 10px auto;
  width: 750px;

  table-layout: fixed;
  border-spacing: 1px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px -2px rgba(101, 101, 101, 0.75);
`;

export const Thead = styled.thead`
  height: 50px;
  width: 250px;
  padding: 15px;

  text-transform: uppercase;
  font-size: 12px;

  color: white;
  background: #1db1c1;
`;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  border: 1px solid black;

  &:nth-child(odd) {
    background: #e7edf0;
  }
`;

export const TableCell = styled.td`
  height: 50px;
  width: 250px;
  text-align: center;
`;
