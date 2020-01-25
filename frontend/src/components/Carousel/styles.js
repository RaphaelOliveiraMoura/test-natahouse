import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    cursor: pointer;
  }

  .card {
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 16px;
    border-radius: 12px;
    flex: 1;
    position: relative;
    overflow: hidden;
    border: 1px solid #490808;
    cursor: pointer;
    box-shadow: 1px 2px 1px 2px #0a080861;
  }

  .card:hover {
    animation: skew-animation 0.4s;
  }

  @keyframes skew-animation {
    0% {
      transform: skew(0deg, 2deg) rotate(0deg);
    }

    50% {
      transform: skew(2deg, 0deg) rotate(4deg);
    }

    100% {
      transform: skew(0deg, 2deg) rotate(0deg);
    }
  }

  .card .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background: #c4c4c4;
    padding: 16px;
  }

  .card h1 {
    margin-top: 12px;
    font-size: 18px;
    font-weight: lighter;
  }

  .card .card-body > svg {
    align-self: flex-end;
    opacity: 0;
    transform: translateX(-80px);
    transition: transform 0.8s;
  }

  .card:hover .card-body > svg {
    opacity: 1;
    transform: translateX(0px);
  }

  .card footer {
    background: #000000;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;

    p {
      color: #fff;
    }
  }
`;
