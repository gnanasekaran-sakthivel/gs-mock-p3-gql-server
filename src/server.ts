import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Import the ApolloServer class
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

// Import the two parts of a GraphQL schema
import { typeDefs, resolvers } from "./schemas/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    })
  );

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
