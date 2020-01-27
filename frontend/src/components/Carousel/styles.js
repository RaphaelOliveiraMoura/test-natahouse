import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  svg {
    cursor: pointer;
  }

  .list-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    min-height: 280px;
    filter: ${props => (props.isLoading ? 'blur(2px)' : '')};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0004;
    z-index: 10;
    transition: all 0.2s;
    transform: ${props =>
      props.isLoading ? 'translateX(0)' : 'translateX(-1000px)'};
  }

  .list-container::after {
    content: '';
    position: absolute;
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #eb314c;
    border-color: #eb314c transparent #eb314c transparent;
    animation: dual-ring 1.2s linear infinite;
    z-index: 9999;
    display: ${props => (props.isLoading ? 'block' : 'none')};
  }

  .reload {
    transition: all 0.4s;
  }

  .reload:hover {
    transform: rotate(180deg);
  }

  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Card = styled.div`
  height: 200px;
  width: 150px;
  display: ${props => (props.listShow ? 'flex' : 'none')};
  flex-direction: column;
  margin: 16px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    animation: skew-animation 0.4s;
  }

  & .card-container {
    animation: appears 2s;
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    border: 1px solid #490808;
    box-shadow: 1px 2px 1px 2px #0a080861;
    position: relative;
    transition: all 0.4s;
  }

  @keyframes skew-animation {
    0% {
      transform: skew(0deg, 2deg) rotate(0deg) scale(1);
    }

    50% {
      transform: skew(2deg, 0deg) rotate(4deg) scale(1.05);
    }

    100% {
      transform: skew(0deg, 2deg) rotate(0deg) scale(1);
    }
  }

  @keyframes appears {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  & .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    background: #c4c4c4;
    padding: 16px;
  }

  & h1 {
    margin-top: 12px;
    font-size: 18px;
    font-weight: lighter;
  }

  & .card-body > svg {
    align-self: flex-end;
    opacity: 0;
    transform: translateX(-80px);
    transition: transform 0.8s;
  }

  &:hover .card-body > svg {
    opacity: 1;
    transform: translateX(0px);
  }

  & footer {
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
