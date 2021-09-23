import styled, { css } from "styled-components";
import { TextFieldProps } from "./TextField.interface";

export const TextFieldStyled = styled.input<TextFieldProps>`
  color: #003264;
  background-color: #fff;
  border: 0.125rem solid #a5add8;
  font-family: "Circular TT", Arial;
  font-weight: 300;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: auto;
  margin: 0;
  :disabled {
    opacity: 0.3;
    cursor: default;
    background-color: #f6fbfe;
  }
  :focus {
    outline: none;
    -webkit-box-shadow: 0 0 0.25rem 0.0625rem #32ff96;
    box-shadow: 0 0 0.25rem 0.0625rem #32ff96;
  }
  :hover {
    border-color: #224e7a;
  }
  ${({ variant }) =>
    variant === "primary" &&
    css`
      color: #32ff96;
      background-color: #003264;
      border: 0.125rem solid #003264;
      font-family: "Circular TT", Arial;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      :hover:after {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        background-color: rgba(223, 241, 253, 0.15);
      }
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      color: #003264;
      background-color: white;
      border: 0.125rem solid #003264;
      font-family: "Circular TT", Arial;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      position: relative;
    `}
    ${({ extent }) => {
    switch (extent) {
      case "lg":
        return css`
          /* h1 */
          font-size: 1.5rem;
          line-height: 2.1rem;
          -webkit-border-radius: 0.125rem;
          border-radius: 0.125rem;
          padding: 0.8438rem 1.71rem;
        `;
      case "md":
        /* h2 */
        return css`
          font-size: 1.25rem;
          line-height: 1.55rem;
          -webkit-border-radius: 0.125rem;
          border-radius: 0.125rem;
          padding: 0.625rem 1.37rem;
        `;
      case "sm":
        /* h3 */
        return css`
          font-size: 1rem;
          line-height: 1.3rem;
          -webkit-border-radius: 0.125rem;
          border-radius: 0.125rem;
          padding: 0.25rem 0.375rem;
        `;
      default:
        return css`
          font-size: 16px;
        `;
    }
  }}
`;

// .btn-outline:hover {
// color:#274e77;
// border-color:#274e77;
// }
