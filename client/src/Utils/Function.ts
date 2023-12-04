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

  const [datePart, timePart, ampm] = dateTimeString.split(' ');

  const [day, month, year] = datePart.split('/');
  const [hour, minute, second] = timePart.split(':');

  const formattedDateTimeString = `${month}/${day}/${year} ${hour}:${minute}:${second} ${ampm}`;

  const date = new Date(formattedDateTimeString);

  // Check if the Date object is valid
  if (isNaN(date.getTime())) {
    return false;
  }

  return true;
};


export const dateStringToTimestamp = (dateString: string): number | null => {
  const dateParts = dateString.split(/[\/ :]/);

  if (dateParts.length !== 7) {
    // Invalid date string format
    console.error("Invalid date string format");
    return null;
  }

  const [day, month, year, hours, minutes, seconds, ampm] = dateParts;

  let hours24 = parseInt(hours, 10);
  if (ampm.toUpperCase() === "PM") {
    hours24 += 12;
  }

  const timestamp = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10),
    hours24,
    parseInt(minutes, 10),
    parseInt(seconds, 10)
  ).getTime();

  return timestamp;
};
export const timestampToDateString = (timestamp: number): string => {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  const hours = String(date.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  const dateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;

  return dateString;
};
