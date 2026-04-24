export interface IAuthUser {
  id: String;
  name: String;
  email: String;
}

export interface IUserInput {
  name?: string;
  email: string;
  password: string;
}
