import styled from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  grid,
} from 'styled-system';

const Box = styled('div')(
  typography,
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  position,
  shadow,
  grid
);

export default Box;
