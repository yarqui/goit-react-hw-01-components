import styled from 'styled-components';

export const ListOfFriends = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-top: 5px;
  padding: 15px;

  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 1px 1px 5px -2px rgba(101, 101, 101, 0.75);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;

  border-radius: 50%;

  background: ${({ isOnline }) => {
    return isOnline ? 'green' : 'grey';
  }};
`;

export const FriendImg = styled.img`
  display: inline;
`;

export const FriendName = styled.p`
  font-weight: 700;
`;
