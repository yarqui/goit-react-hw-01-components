import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #f4f4f4;
`;

export const Item = styled.li`
  padding: 15px;
  width: 100%;

  text-align: center;

  /* color: grey; */

  list-style: none;
  font-size: 12px;
  line-height: 1.3;
  border: 1px solid #e5e5e5;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  font-weight: 600;
  color: #3c3c3c;
  /* justify-content: center; */
  /* align-items: center; */
`;
