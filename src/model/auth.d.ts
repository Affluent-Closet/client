export interface IRegisterRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNum: string;
  detailAddress: string;
}

export interface IAuthErrMsg {
  emailError?: string | null;
  passwordError?: string | null;
  phoneError?: string | null;
  addressError?: string | null;
}
