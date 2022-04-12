export interface IRegisterRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNum: string;
  address1: string;
  address2: string;
}

export interface IAuthErrMsg {
  emailError?: string | null;
  passwordError?: string | null;
  phoneError?: string | null;
  addressError?: string | null;
}
