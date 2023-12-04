import { jwtDecode } from "jwt-decode";

interface decode {
  exp: number;
  iat: number;
  id: string;
  name: string;
}
export const JWTDecode = (token: string) => {
  const decode: decode = jwtDecode(token);
  return decode;
};
export const isValidDateTime = (dateTimeString: string): boolean => {
  const dateTimeRegex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2} (AM|PM)$/;

  if (!dateTimeRegex.test(dateTimeString)) {
    return false;
  }

  const date = new Date(dateTimeString);

  // Check if the Date object is valid
  if (isNaN(date.getTime())) {
    return false;
  }

  return true;
};
