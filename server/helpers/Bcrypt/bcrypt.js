const bcrypt = require("bcrypt");
const saltRounds = 10;

const Encrypt = async (string) => {
  try {
    const hashedPassword = await bcrypt.hash(string, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error; // You can handle the error as needed or simply rethrow it.
  }
};
module.exports = Encrypt;
