const typeDefs = `
  # Define which fields are accessible from the Class model
  type User {
    id: ID!
    name: String
    email: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
  }
`;

export default typeDefs;
