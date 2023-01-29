import {
  List,
  Item,
  Label,
  DataValue,
} from 'components/Statistics/Statistics.styled';

import {
  FriendItem,
  FriendImg,
  FriendName,
  OnlineMark,
} from 'components/FriendList/FriendList.styled';

export const renderStatsList = objects => {
  return (
    <List>
      {objects.map(object => (
        <Item key={object.id}>
          <Label>{object.label}</Label>
          <DataValue>{object.percentage}</DataValue>
        </Item>
      ))}
    </List>
  );
};

export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const renderFriendList = objects => {
  return (
    <>
      {objects.map(object => (
        <FriendItem key={object.id}>
          <OnlineMark isOnline={object.isOnline}></OnlineMark>
          <FriendImg src={object.avatar} alt={object.name} width="48" />
          <FriendName>{object.name}</FriendName>
        </FriendItem>
      ))}
    </>
  );
};
