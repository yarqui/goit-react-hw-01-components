// import user from 'user.json';
import { ProfileCard } from './Profile/ProfileCard';

// const { /*username,*/ tag, /*location,*/ avatar /*stats*/ } = user;

export const App = ({ children }) => {
  return <ProfileCard>{children}</ProfileCard>;
};
