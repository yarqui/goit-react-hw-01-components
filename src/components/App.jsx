import user from 'user.json';

import { Profile } from './Profile/Profile';

const { avatar, username, tag, location, stats } = user;
const { followers, views, likes } = stats;

export const App = () => {
  return (
    <Profile
      image={avatar}
      name={username}
      tag={tag}
      location={location}
      followers={followers}
      views={views}
      likes={likes}
    />
  );
};
