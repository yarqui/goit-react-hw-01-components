import styled from 'styled-components';
import { getRandomHexColor } from 'components/utilities/utilities';

export const Section = styled.section`
  margin: 10px auto;
  width: 250px;

  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 1px 1px 5px -2px rgba(101, 101, 101, 0.75);
`;

export const Title = styled.h2`
  padding: 15px;

  color: grey;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: white;
`;

export const Item = styled.li`
  width: 100%;
  padding: 5px;

  color: white;
  background: ${getRandomHexColor};

  list-style: none;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
`;

export const DataValue = styled.span`
  display: block;
  font-size: 12px;
`;
