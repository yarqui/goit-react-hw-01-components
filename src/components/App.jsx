import user from 'user.json';
import { Profile } from './Profile/Profile';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return <Profile username={tag} avatar={avatar}></Profile>;
};
