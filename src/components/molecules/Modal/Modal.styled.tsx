import styled, { css } from "styled-components";

export const ModalBackdropStyled = styled.div<{ hidden: boolean }>`
  @keyframes fade-in-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out-animation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: fade-in-animation 0.2s forwards;
  backdrop-filter: saturate(180%) blur(2px);

  ${({ hidden }) =>
    hidden &&
    css`
      animation: fade-out-animation 0.5s forwards;
    `}

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
  background: #00326499;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyled = styled.div<{ hidden: boolean }>`
  @keyframes zoom-in-animation {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes zoom-out-animation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }

  animation: zoom-in-animation 0.2s;

  ${({ hidden }) =>
    hidden &&
    css`
      animation: zoom-out-animation 0.2s;
    `}
  padding: 16px;
  max-width: 80%;
  background-color: white;
  box-shadow: 0 0.063rem 0.188rem rgba(0, 0, 0, 0.2),
    0 0.125rem 0.125rem rgba(0, 0, 0, 0.12), 0 0 0.125rem rgba(0, 0, 0, 0.14);
`;
