import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const PORT = 3000;
const app = express();
app.use(express.json());

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});

graphqlServer.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
  console.log(
    `GraphQL server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
  );
});
