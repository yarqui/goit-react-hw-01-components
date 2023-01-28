import { List, Item, Label, Quantity } from './Stats.styled';

export const Stats = ({ followers, views, likes }) => (
  <List>
    <Item key={followers}>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </Item>
    <Item key={views}>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </Item>
    <Item key={likes}>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </Item>
  </List>
);
