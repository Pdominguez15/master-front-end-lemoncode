import { css } from "emotion";

export const container = css`
  width: 35%;
  margin-top: 4em;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

export const cards = css`
  background-color: #dddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`;

export const card = css`
  display: flex;
  max-width: 230px;
  min-width: 150px;
  padding: 0.5em;
`;

export const title = css`
  text-align: center;
`;

export const titleSpan = css`
  font-size: 16px;
`;

export const cartTitle = css`
  color: #3f51b5;
  font-weight: bold;
  text-align: center;
`;
