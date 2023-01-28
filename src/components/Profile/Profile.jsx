import user from 'user.json';
import { Avatar } from 'components/Avatar/Avatar';

console.log('user.avatar:', user.avatar);
export const Profile = () => {
  return (
    <div>
      <Avatar imgURL={user.avatar} alt={user.username} />
      <h2>{user.username}</h2>
      <p></p>
      <address></address>
      <div></div>
    </div>
  );
};
