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
