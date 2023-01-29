import {
  ListOfFriends,
  Status,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListOfFriends>
      <Status isOnline={isOnline}></Status>
      <FriendImg src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </ListOfFriends>
  );
};
