import styled from 'styled-components';

import BackgroundContainer from '~/components/BackgroundContainer';

export const Container = styled(BackgroundContainer)`
  padding: 46px 12px;

  .content {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`;
