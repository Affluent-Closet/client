enum role {
  USER,
  ADMIN,
}
// export interface IUser {
//   createdAt: Date;
//   updatedAt: Date;
//   deletedAt: Date | null;
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   signupVerifyToken: string;
//   role: role;
//   address1: string;
//   address2: string;
//   phoneNumber: string;
//   profileImg: string;
// }

// refresh token 도입 후 타입
export interface ILoginResponse {
  name: string;
  email: string;
  password: string;
  role: role;
  address1: string;
  address2: string;
  phoneNumber: string;
  profileImg: string;
  socialType: ISocialType;
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterRequest {
  name: string;
  role: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  profileImg: string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
// export interface ILoginResponse {
//   user: IUser;
//   jwtString: string;
// }

export interface IAgreementItem {
  name: string;
  text: string;
  isChecked: boolean;
  isModal: boolean;
}

export interface IAgreementFormTypes {
  agreementList: IAgreementItem[];
  isAllChecked: boolean;
  onAllCheck: () => void;
  onChangeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IAuthToken {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface IAuthUserInfo extends IAuthToken {
  email: string;
  name: string;
  image: string;
}
