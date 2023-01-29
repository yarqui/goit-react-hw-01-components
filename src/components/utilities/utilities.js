import {
  List,
  Item,
  Label,
  DataValue,
} from 'components/Statistics/Statistics.styled';

export const renderList = objects => {
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
