import { css } from "emotion";

export const container = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2em;
  @media screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
  }
`;
