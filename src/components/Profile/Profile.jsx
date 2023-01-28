import PropTypes from 'prop-types';
import { IMG_SIZE } from 'config/config.js';
import {
  ProfileWrap,
  Description,
  Image,
  Name,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  image,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileWrap>
      <Description>
        <Image src={image} alt={name} width={IMG_SIZE} />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
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
    </ProfileWrap>
  );
};

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
