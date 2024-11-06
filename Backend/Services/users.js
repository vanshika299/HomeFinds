// const User=require("../models/users");

// async function getUsers(){
//       const users=await User.find({});
// };

// module.exports={getUsers};
const User = require("../models/users");

module.exports.getUsers=async ()=> {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}


 