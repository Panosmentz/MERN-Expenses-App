const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 15,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 15,
  },
  password: {
    type: String,
    min: 5,
    max: 15,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  //mongoose version of middleware - pre hook. This is where the entered password is hashed with bcrypt
  if (!this.isModified("password"))
    //check if password is modified already.
    return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    //10-> how strong the encryption - salt rounds
    // (err, passwordHash) callback function
    if (err) return next(err);
    this.password = passwordHash; //overwrite password with the hashed one
    next(); //exit
  });
});

//this is a Method to check the plain text version of the password that we receive from the client to the hashed version within the database
//bcrypt.compare does this. First argument is the password from the client, the second one is the hashed password and the third a callback function

UserSchema.methods.comparePassword = function (password, cb) {
  //cb=callback function
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this); //this = User
    }
  });
};

module.exports = mongoose.model("User", UserSchema);
