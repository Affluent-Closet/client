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
