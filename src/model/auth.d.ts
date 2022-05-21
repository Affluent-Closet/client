enum role {
  USER,
  ADMIN,
}
export interface IUser {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: string;
  name: string;
  email: string;
  password: string;
  signupVerifyToken: string;
  role: role;
  address1: string;
  address2: string;
  phoneNumber: string;
  profileImg: string;
}

export interface IRequestRegister {
  name: string;
  role: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  profileImg: string;
}
export interface ILoginData {
  email: string;
  password: string;
}
export interface IResponseLogin {
  user: IUser;
  jwtString: string;
}

export interface IAuthErrMsg {
  emailError?: string | null;
  passwordError?: string | null;
  phoneError?: string | null;
  addressError?: string | null;
}
