import React from 'react';
import Box from 'components/Box';
import avatarPath from '../../../src/img/Hansel.png';
import { ReactComponent as Logo } from '../../img/Logo.svg';

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

        <Circle>
          <Avatar src={avatarPath} alt="avatar" />
        </Circle>

        <LogoWrap>
          <Logo />
        </LogoWrap>
      </CardWrap>
    </Box>
  );
};

export default TweetCard;
