let dbConnection = require('../db/dbConnection');

async function getUserByEmail(email) {
try{
  const conn = await dbConnection();
  let users = await conn.query(`SELECT * FROM users WHERE email="${email}"`);
  if(users.length=!0) {
      return (JSON.stringify(users[0]));
      }
  else{
    return {status: false, error: 'Cannot get email'}
  }  
}catch(error){
  return new Error(error);
}
}

async function logIn(email, password){
  try{
     const conn = await dbConnection();
     const user =  JSON.parse( await getUserByEmail(email) );
      if(user.password===password){
        return {status: true, id: user.id}
      }
      else{
        return {status: false}
      }
  }catch(eror){
    return new Error(error);
  }
}
module.exports = {getUserByEmail, logIn}