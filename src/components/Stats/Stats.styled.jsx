import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #f4f4f4;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  text-align: center;
  padding: 15px;
  width: 100%;

  list-style: none;
  font-size: 12px;
  line-height: 1.3;
  border: 1px solid #e5e5e5;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #3c3c3c;
`;
