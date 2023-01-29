import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';

import { Profile } from './Profile/Profile';
import { Container } from './Container/Container';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

const { avatar, username, tag, location, stats } = user;
const { followers, views, likes } = stats;

export const App = () => {
  return (
    <Container>
      <Profile
        image={avatar}
        name={username}
        tag={tag}
        location={location}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </Container>
  );
};
