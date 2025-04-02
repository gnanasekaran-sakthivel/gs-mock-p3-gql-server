// Create the functions that fulfill the queries defined in `typeDefs.ts`
const resolvers = {
  Query: {
    users: async () => [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
      },
    ],
  },
};

export default resolvers;
