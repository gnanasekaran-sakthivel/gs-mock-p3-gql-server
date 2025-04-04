import {
  User,
  Response,
  GetUserInput,
  RegisterUserInput,
  UpdateUserInput,
  DeleteUserInput,
  LoginInput,
} from "../types/types";

const users: User[] = []; // Temporary in-memory storage

export const resolvers = {
  Query: {
    getUser: (_: any, { id }: GetUserInput): Response => {
      const user = users.find((u) => u.id === id);
      return user
        ? { success: true, message: "User found", user }
        : { success: false, message: "User not found", user: null };
    },

    // New query for getting all users
    allUsers: async () => {
      return users;
    },

    hello: () => "Hello from Mock GraphQL Server for our Project#3...",
  },

  Mutation: {
    registerUser: (
      _: any,
      { name, email, password }: RegisterUserInput
    ): Response => {
      const id = users.length + 1;
      const newUser: User = { id, name, email, password };
      users.push(newUser);
      return {
        success: true,
        message: "User registered successfully",
        user: newUser,
      };
    },

    updateUser: (
      _: any,
      { id, name, email, password }: UpdateUserInput
    ): Response => {
      const user = users.find((u) => u.id === id);
      if (!user)
        return { success: false, message: "User not found", user: null };

      if (name) user.name = name;
      if (email) user.email = email;
      if (password) user.password = password;

      return { success: true, message: "User updated successfully", user };
    },

    deleteUser: (_: any, { id }: DeleteUserInput): Response => {
      const index = users.findIndex((u) => u.id === id);
      if (index === -1)
        return { success: false, message: "User not found", user: null };

      const deletedUser = users.splice(index, 1)[0];
      return {
        success: true,
        message: "User deleted successfully",
        user: deletedUser,
      };
    },

    login: (_: any, { email, password }: LoginInput): Response => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      return user
        ? { success: true, message: "Login successful", user }
        : { success: false, message: "Invalid email or password", user: null };
    },
  },
};
