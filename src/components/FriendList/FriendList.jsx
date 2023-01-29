import PropTypes from 'prop-types';
import { renderFriendList } from 'components/utilities/utilities';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return <List>{renderFriendList(friends)}</List>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
