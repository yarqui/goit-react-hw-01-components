import user from 'user.json';
import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Location,
  Name,
  Tag,
} from './ProfileCard.styled';
import { Avatar } from 'components/Avatar/Avatar';
import { IMG_SIZE } from 'config/config.js';
import { Stats } from 'components/Stats/Stats';

const { avatar, username, tag, location, stats } = user;
const { followers, views, likes } = stats;

export const ProfileCard = () => {
  return (
    <ProfileWrap>
      <Description>
        <Avatar imgURL={avatar} name={username} imgWidth={IMG_SIZE} />

        <Name>{username}</Name>

        <Tag>@{tag}</Tag>

        <Location>{location}</Location>
      </Description>
      <Stats followers={followers} views={views} likes={likes} />
    </ProfileWrap>
  );
};

ProfileCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
};
