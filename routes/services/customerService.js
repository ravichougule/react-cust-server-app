const jwt = require("jsonwebtoken");
const {loginDao, regDao} = require("../dao/customerDao");

async function loginService(data) {
  let result = await loginDao(data);
  if (result) {
    const token = await jwt.sign(data, "appToken");
    result = {
      data: {
        ...result,
        token,
      },
    };
  } else
    result = {
      data: { message: "Invalide Credentials" },
    };
  return result;
}

async function regService(data){
  console.log("Service")
  let result = await regDao(data);
  return result;
}

module.exports = {
  loginService,
  regService
};
