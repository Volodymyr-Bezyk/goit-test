import styled from 'styled-components';
import topBgPath from '../../../src/img/topBg.png';
import midLinePath from '../../../src/img/midLine.png';
import circlePath from '../../../src/img/circle.png';

export const CardWrap = styled.article`
  position: relative;
  padding: 28px 36px 36px;
  width: 380px;
  height: 460px;

  background-image: ${p => p.theme.gradients.card};
  box-shadow: ${p => p.theme.shadows.card};
  border-radius: ${p => p.theme.radii.card};
`;

export const TopBg = styled.div`
  margin-bottom: 88px;
  width: 308px;
  height: 168px;

  background-image: url(${topBgPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MiddleLine = styled.div`
  position: absolute;
  left: 0;
  top: 214px;

  width: 380px;
  height: 8px;

  background-image: url(${midLinePath});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TextWrap = styled.div`
  margin-bottom: 26px;
`;

export const TweetsText = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[6]}px;
  line-height: 1.2;
  color: ${p => p.theme.colors.main};
  text-transform: uppercase;
  text-align: center;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FollowBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  background-color: ${p => p.theme.colors.main};
  box-shadow: ${p => p.theme.shadows.btn};
  border-radius: ${p => p.theme.radii.btn};
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
`;
export const FollowBtnText = styled.span`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.23;
  color: ${p => p.theme.colors.btnText};
  text-transform: uppercase;
  text-align: center;

  transition: ${p => p.theme.transitions.bgColor};
`;

export const Circle = styled.div`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);

  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${circlePath});
  background-size: cover;
  background-position: center;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.bg};
`;

export const Avatar = styled.img`
  display: block;
  width: 62px;
  height: 62px;
  border-radius: ${p => p.theme.radii.round};
  overflow: hidden;
`;
