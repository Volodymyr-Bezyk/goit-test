export const checkUserFollowing = (existingFollows, id) => {
  const follow = existingFollows.find(
    existingFollow => existingFollow.id.toString() === id.toString()
  );
  if (!follow) {
    return false;
  }
  return follow.following;
};
