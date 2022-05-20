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

export interface IRegisterRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
}

export interface IAuthErrMsg {
  emailError?: string | null;
  passwordError?: string | null;
  phoneError?: string | null;
  addressError?: string | null;
}

export interface ILoginData {
  email: string;
  password: string;
}
export interface IResponseLogin {
  user: IUser;
  jwtString: string;
}
