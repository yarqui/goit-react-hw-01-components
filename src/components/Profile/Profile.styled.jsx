import styled from 'styled-components';

export const ProfileWrap = styled.div`
  margin: 10px auto;
  width: 250px;

  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 1px 1px 5px -2px rgba(101, 101, 101, 0.75);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;
  margin: 10px auto;

  color: grey;

  font-size: 14px;
`;

export const Image = styled.img`
  margin-top: 15px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #3c3c3c;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
`;

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

export const Label = styled.span`
  color: grey;
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #3c3c3c;
`;
