import styled from 'styled-components';

import backgroundVector from '~/assets/background-vector.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #161515;

  & > * {
    z-index: 5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url(${backgroundVector});
    background-size: cover;
  }
`;
