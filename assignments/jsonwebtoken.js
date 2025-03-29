const jwt = require("jsonwebtoken");

const value = {
  name: "vivek",
  password: "222",
};

//creating a token using jwt
const token = jwt.sign(value, "secret");
console.log(token);
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidml2ZWsiLCJwYXNzd29yZCI6IjIyMiIsImlhdCI6MTc0MzE2MzIxMn0.dT4avSsR7CPuZ6UGbkwldkiZKU3962X3jlnOXO6h0vE
//this is token
//{
//   "name": "vivek",
//   "password": "222",
//   "iat": 1743163212
// } this is payload after decoding the token refrence {decoding using jwt.io}
//secret is the secret key used to create the token
