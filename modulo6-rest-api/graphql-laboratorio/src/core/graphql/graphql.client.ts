import { GraphQLClient } from 'graphql-request';

const url = 'https://rickandmortyapi.com/graphql';
export const graphaqlClient = new GraphQLClient(url);

const urlLocal = '/graphql';

export const graphaqlClientMock = new GraphQLClient(urlLocal);
