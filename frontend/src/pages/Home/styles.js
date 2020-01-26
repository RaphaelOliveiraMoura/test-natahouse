import styled from 'styled-components';

import Carousel from '~/components/Carousel';
import BackgroundContainer from '~/components/BackgroundContainer';

export const Container = styled(BackgroundContainer)`
  padding: 46px 12px;

  .content {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .image-container {
    background: #00000075;
    border-radius: 8px;
    padding: 24px;

    img {
      width: 200px;
    }
  }

  .search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    h1 {
      color: #fff;
      text-align: right;
      max-width: 600px;
      font-weight: normal;
    }

    & > div {
      margin-top: 12px;
      width: 400px;
    }
  }

  @media (max-width: 850px) {
    & {
      height: auto;
    }

    .header {
      flex-direction: column;
      align-items: center;
    }

    .search-container {
      align-items: center;

      h1 {
        margin-top: 16px;
        text-align: center;
      }

      & > div {
        width: 200px;
      }
    }
  }
`;

export const StarshipsList = styled(Carousel)`
  margin-top: 64px;
`;
