import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;

  svg {
    cursor: pointer;
    transition: all 0.4s;
  }

  svg:hover {
    transform: scale(1.05);
  }

  a + a {
    margin-left: 16px;
  }

  @media (max-width: 600px) {
    & {
      display: none;
    }
  }
`;
