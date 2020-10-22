import { css } from "emotion";

export const centerLayout = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1em;
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;
