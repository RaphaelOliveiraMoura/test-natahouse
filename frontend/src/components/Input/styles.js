import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 12px 42px 12px 22px;
    border-radius: 8px;
    border: 0;
    background: #c4c4c4;
    color: #333;
  }

  input:focus ~ svg {
    transform: translateY(-50%) rotate(90deg);
  }

  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s;
  }
`;
