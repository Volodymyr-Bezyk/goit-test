import React from 'react';
import { useState } from 'react';
import Box from 'components/Box';
import avatarPath from '../../../src/img/Hansel.png';
import { ReactComponent as Logo } from '../../img/Logo.svg';
import { amountFormatter } from 'utils/amountFormatter';
import { saveFollowingsToLocalStorage } from 'utils/saveFollowingsToLocalStorage';
import { checkUserFollowing } from 'utils/checkUserFollowing';

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
  existingFollows,
}) => {
  const [following, setFollowing] = useState(() =>
    checkUserFollowing(existingFollows, id)
  );

  const handleFollowing = e => {
    setFollowers(prevFollowers =>
      saveFollowingsToLocalStorage(prevFollowers, id, following)
    );
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
          <Avatar src={avatar || avatarPath} alt="avatar" />
        </Circle>

        <LogoWrap>
          <Logo />
        </LogoWrap>
      </CardWrap>
    </Box>
  );
};

export default TweetCard;
