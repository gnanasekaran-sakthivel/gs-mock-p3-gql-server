import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
  }

  type Response {
    success: Boolean!
    message: String!
    user: User
  }

  type Query {
    getUser(id: Int!): Response
    getAllUsers: [User!]!
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!): Response
    updateUser(
      id: Int!
      name: String
      email: String
      password: String
    ): Response
    deleteUser(id: Int!): Response
    login(email: String!, password: String!): Response
  }
`;
