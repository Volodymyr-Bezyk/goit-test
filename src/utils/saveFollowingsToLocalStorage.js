export const saveFollowingsToLocalStorage = (prevFollowers, id, following) => {
  const idx = prevFollowers.findIndex(prevFollower => prevFollower.id === id);

  if (idx === -1) {
    return [...prevFollowers, { id, following: !following }];
  } else {
    const updatedFollowers = prevFollowers.map(follower => {
      if (follower.id !== id) {
        return follower;
      }
      return { id, following: !following };
    });
    return updatedFollowers;
  }
};
