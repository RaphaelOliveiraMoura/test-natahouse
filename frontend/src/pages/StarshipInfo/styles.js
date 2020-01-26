import styled from 'styled-components';

import BackgroundContainer from '~/components/BackgroundContainer';

export const Container = styled(BackgroundContainer)`
  padding: 46px 12px;

  &::before {
    transform: rotate(180deg);
  }

  .card {
    background: #000;
    width: 100%;
    max-width: 800px;
    height: 100%;
    border-radius: 16px;
    padding: 26px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
  }

  .card h1 {
    color: #fff;
    font-weight: lighter;
    margin: 16px;
    font-size: 42px;
    animation: fade 0.8s forwards;
  }

  .card svg {
    cursor: pointer;
    position: absolute;
    right: 32px;
    top: 32px;
    transition: all 0.4s;
  }

  .card svg:hover {
    transform: translateX(-4px);
  }

  .card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow: hidden;

    p {
      color: #fff;
      font-size: 16px;
      animation: left-to-rigth 0.8s;
      animation-fill-mode: forwards;
      transform: translateX(-1000px);
    }

    p + p {
      margin-top: 16px;
    }

    p:nth-child(1) {
      animation-delay: 0.1s;
    }

    p:nth-child(2) {
      animation-delay: 0.4s;
    }

    p:nth-child(3) {
      animation-delay: 0.8s;
    }

    p:nth-child(4) {
      animation-delay: 1.2s;
    }

    p:nth-child(5) {
      animation-delay: 1.6s;
    }

    img {
      width: 200px;
      animation: shake 0.6s forwards;
    }
  }

  .card-footer {
    width: 100%;
    animation: bottom-to-top 0.6s forwards;

    p {
      color: #bbb;
      max-width: 400px;
      font-size: 12px;
      margin-top: 16px;
    }
  }

  .calculate-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
    overflow: hidden;

    & > div {
      width: 500px;
    }

    p {
      max-width: 200px;
      margin-left: 26px;
      font-size: 16px;
      animation: rigth-to-left 0.4s forwards;
    }
  }

  @media (max-width: 660px) {
    & {
      height: auto;
    }

    .card-body {
      flex-direction: column-reverse;

      img {
        margin-bottom: 12px;
      }
    }

    .calculate-container {
      flex-direction: column;
      align-items: flex-start;

      p {
        max-width: 100%;
        margin-left: 0;
      }
    }
  }

  @keyframes left-to-rigth {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes rigth-to-left {
    0% {
      transform: translateX(500px);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes bottom-to-top {
    0% {
      transform: translateY(500px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes shake {
    0% {
      transform: skew(0deg, 2deg) rotate(0deg) scale(1);
      opacity: 0;
    }

    50% {
      transform: translateX(-4px) skew(2deg, 0deg) rotate(-4deg) scale(1.05);
    }

    100% {
      transform: skew(0deg, 0deg) rotate(0deg) scale(1);
      opacity: 1;
    }
  }
`;
