const harsh =require("jsonwebtoken");

const generateToken = (id) => {
  return harsh.sign({ id }, process.env.SecretKey, {
    expiresIn: "7d",
  });
};

module.exports = generateToken;