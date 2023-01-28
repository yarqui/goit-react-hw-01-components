import { List, Item, Span } from './Stats.styled';

export const Stats = ({ followers, views, likes }) => (
  <List>
    <Item key={followers}>
      <Span>Followers</Span>
      {followers}
    </Item>
    <Item key={views}>
      <Span>Views</Span>
      {views}
    </Item>
    <Item key={likes}>
      <Span>Likes</Span>
      {likes}
    </Item>
  </List>
);
