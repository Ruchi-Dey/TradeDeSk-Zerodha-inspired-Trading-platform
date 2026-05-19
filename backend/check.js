require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./Models/UserModel");

mongoose.connect(process.env.MONGO_URL).then(async () => {
   await User.deleteOne({email: "ruchidey2003@gmail.com"});
   console.log("User deleted");
   process.exit(0);
});
