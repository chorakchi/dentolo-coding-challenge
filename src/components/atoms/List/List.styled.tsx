import styled, { css } from "styled-components";
import { ListProps } from "./List.interface";
import { Typography } from "..";

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0;

  max-height: 800px;
`;

export const ListItemStyled = styled(Typography)<ListProps>`
  padding-left: 2.3rem;
  position: relative;
  transition: all 200ms;
  margin: 1rem 0 0.2rem;
  max-height: 80px;

  ${({ invisible }) =>
    invisible &&
    css`
      margin: 0;
      overflow: hidden;
      max-height: 0;
    `};

  ${({ withHover }) =>
    withHover &&
    css`
      cursor: pointer;
      :hover {
        margin-left: 5px;
      }
    `};
  :after {
    content: "";
    background-image: url(https://s3.eu-central-1.amazonaws.com/dentolo-ui-elements/dist/img/icons/icon.green.blue-24x24.svg);
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
