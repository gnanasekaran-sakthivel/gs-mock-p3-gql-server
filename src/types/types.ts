export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Response {
  success: boolean;
  message: string;
  user?: User | null;
}

// Query Input Types
export interface GetUserInput {
  id: number;
}

// Mutation Input Types
export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserInput {
  id: number;
  name?: string;
  email?: string;
  password?: string;
}

export interface DeleteUserInput {
  id: number;
}

export interface LoginInput {
  email: string;
  password: string;
}
