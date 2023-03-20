import { useState, useEffect } from 'react';
import users from 'db/users.json';
import TweetCard from 'components/TweetCard';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { constants } from 'constants/constants';
import { UsersTweetList, UsersTweetItem } from './UsersList.styled';

const UsersList = () => {
  const [existingFollows, setExistingFollows] = useLocalStorage(
    constants.LS_KEY
  );
  const [followers, setFollowers] = useState(existingFollows);

  useEffect(() => {
    setExistingFollows(followers);
  }, [followers, setExistingFollows]);

  return (
    <UsersTweetList>
      {users.map(user => (
        <UsersTweetItem key={user.id}>
          <TweetCard user={user} setFollowers={setFollowers} />
        </UsersTweetItem>
      ))}
    </UsersTweetList>
  );
};
export default UsersList;
