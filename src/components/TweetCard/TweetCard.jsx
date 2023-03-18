import React from 'react';
import Box from 'components/Box';

import {
  CardWrap,
  TopBg,
  MiddleLine,
  TextWrap,
  TweetsText,
  FollowBtn,
  FollowBtnText,
  //   InnerWrap,
  //   BackgroundWrap,
  //   RectangleWrap,
  //   AvatarCircleWrap,
} from './TweetCard.styled';

const TweetCard = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <CardWrap>
        <TopBg />
        <MiddleLine />
        <TextWrap>
          <TweetsText>777 tweets</TweetsText>
          <TweetsText>100,500 Followers</TweetsText>
        </TextWrap>

        <FollowBtn type="button">
          <FollowBtnText>Follow</FollowBtnText>
        </FollowBtn>
      </CardWrap>
    </Box>
  );
};

export default TweetCard;
