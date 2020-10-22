import { css } from "emotion";

export const container = css`
  width: 65%;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

export const cards = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 1em;
  row-gap: 1em;
  margin-top: 2em;

  @media screen and (min-width: 890px) {
    border-right: 1px solid black;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const card = css`
  max-width: 200px;
  min-width: 150px;
`;

export const title = css`
  text-align: center;
  word-break: break-word;
`;

export const articleTitle = css`
  color: #3f51b5;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 480px) {
    margin-bottom: 0.5em;
  }
`;

export const category = css`
  color: #3f51b5;
`;

export const link = css`
  font-size: 1.1rem;
  color: #ce6a3b;
  text-decoration: none;
  margin-left: 1em;

  &:hover {
    text-decoration: underline;
  }
`;
