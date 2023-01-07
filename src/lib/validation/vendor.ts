import { object, string, ref, boolean } from "yup";

export const authSchema = {
  login: object().shape({
    emailAddress: string().email("enter email").required("enter email"),
    password: string().min(6, "password too short").max(40, "oop").required(),
  }),
  register: {
    acceptTAC: boolean().oneOf(
      [true],
      "To continue you must accept the terms and conditions"
    ),
    CompanyName: string().min(2, "too short").max(30, "").required(),
    PhoneNumber: string()
      .min(9, "too short")
      .max(14, "enter a valid phone number")
      .required(),
    EmailAddress: string().email("enter email").required("enter email"),
    CompanyAddress: string().min(5, "too short").max(50, "").required(),
    StateId: object().shape({
      value: string()
        .min(2, "select a valid state")
        .max(30, "select a valid state")
        .required("select a state"),
      label: string(),
    }),
    LgaId: string(),
    Password: string()
      .min(6, "too short")
      .max(30, "")
      .required("enter a password"),
    ConfirmPassword: string().oneOf(
      [ref("password"), null],
      "Passwords don't match"
    ),
  },
  kyc: {
    "KYCRequest.RepresentativeName1": string(),
    "KYCRequest.RepresentativeName2": string(),
    "KYCRequest.DateofRegistration": string(),
    "KYCRequest.CACRegistrationNumber": string(),
    "KYCRequest.OperationLocation": string(),
    "KYCRequest.AccountNumber": string(),
    "KYCRequest.AccountName": string(),
    "KYCRequest.BVN": string(),
    "KYCRequest.AcctPhoneNumber": string(),
  },
};
