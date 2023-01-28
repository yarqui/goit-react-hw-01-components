import user from 'user.json';
import { ProfileWrap, Address, Title, Link } from './ProfileCard.styled';
import { Avatar } from 'components/Avatar/Avatar';
import { IMG_SIZE } from 'config/config.js';
import { Stats } from 'components/Stats/Stats';

const { avatar, username, tag, location, stats } = user;
const { followers, views, likes } = stats;

export const ProfileCard = () => {
  return (
    <ProfileWrap>
      <Avatar imgURL={avatar} name={username} imgWidth={IMG_SIZE} />

      <Title>{username}</Title>

      <Link href="./">@{tag}</Link>

      <Address>{location}</Address>

      <Stats followers={followers} views={views} likes={likes} />
    </ProfileWrap>
  );
};
