const timestampToDateString = (timestamp) => {
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
module.exports = { timestampToDateString };
