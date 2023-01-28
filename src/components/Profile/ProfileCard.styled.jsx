import styled from 'styled-components';

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 250px;
  margin: 10px auto;

  color: grey;

  font-size: 14px;

  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 1px 1px 5px -2px rgba(101, 101, 101, 0.75);
`;

export const Address = styled.address`
  font-style: normal;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #3c3c3c;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
