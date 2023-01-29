import styled from 'styled-components';

export const List = styled.ul`
  margin: 10px auto;
  width: 250px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 5px;
  padding: 15px;

  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 1px 1px 5px -2px rgba(101, 101, 101, 0.75);
`;

export const FriendImg = styled.img`
  display: inline;
`;

export const FriendName = styled.p`
  font-weight: 700;
`;

export const OnlineMark = styled.span`
  width: 15px;
  height: 15px;

  background: red;

  border-radius: 50%;
`;
