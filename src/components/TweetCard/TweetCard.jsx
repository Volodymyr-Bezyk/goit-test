import React from 'react';
import { useState } from 'react';
import Box from 'components/Box';
// import avatarPath from '../../../src/img/Hansel.png';
import { ReactComponent as Logo } from '../../img/Logo.svg';
import { amountFormatter } from 'utils/amountFormatter';
// import { saveFollowersToLocaleStorage } from 'utils/saveFollowersToLocalStorage';

import {
  CardWrap,
  TopBg,
  MiddleLine,
  TextWrap,
  TweetsText,
  FollowBtn,
  FollowBtnText,
  Circle,
  Avatar,
  LogoWrap,
} from './TweetCard.styled';

const TweetCard = ({
  user: { id, name, avatar, tweets, followers },
  setFollowers,
}) => {
  const [following, setFollowing] = useState(false);

  const handleFollowing = e => {
    setFollowers(prevFollowers => {
      const idx = prevFollowers.findIndex(
        prevFollower => prevFollower.id === id
      );

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
    });

    setFollowing(prevS => !prevS);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CardWrap>
        <TopBg />
        <MiddleLine />

        <TextWrap>
          <TweetsText>{tweets} tweets</TweetsText>
          <TweetsText>
            {following
              ? amountFormatter(parseInt(followers) + 1)
              : amountFormatter(parseInt(followers))}
            Followers
          </TweetsText>
        </TextWrap>

        <FollowBtn
          type="button"
          onClick={handleFollowing}
          following={following}
        >
          <FollowBtnText>{following ? 'Following' : 'Follow'}</FollowBtnText>
        </FollowBtn>

        <Circle>
          <Avatar src={avatar} alt="avatar" />
        </Circle>

        <LogoWrap>
          <Logo />
        </LogoWrap>
      </CardWrap>
    </Box>
  );
};

export default TweetCard;
