import {
  List,
  Item,
  Label,
  DataValue,
} from 'components/Statistics/Statistics.styled';

export const renderStatsList = objects => {
  return (
    <List>
      {objects.map(({ id, label, percentage }) => (
        <Item key={id}>
          <Label>{label}</Label>
          <DataValue>{percentage}</DataValue>
        </Item>
      ))}
    </List>
  );
};

export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
