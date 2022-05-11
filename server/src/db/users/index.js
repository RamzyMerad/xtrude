const pg = require("./../");

const get = async()=>{
try {
  const users= await pg.select().table("users");
  return users;
} catch (error) {
  return 400;
}
};

const create = async(user)=>{
  try {
     await pg("users").insert([user]);
     return 200;
  } catch (error) {
    return 400;
  }
  
};
const update = (user)=>{};
const archive = (user)=>{};


module.exports= {
  get,
  create,
  update,
  archive
}


