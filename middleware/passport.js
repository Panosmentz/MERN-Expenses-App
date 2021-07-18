const passport = require("passport"); //import passportJS
const LocalStrategy = require("passport-local").Strategy; //import passport-local .strategy
const JwtStrategy = require("passport-jwt").Strategy; //import jwt
require("dotenv").config({ path: "../config/config.env" });
const User = require("../models/User");

const cookieExtractor = (req) => {
  //request object - this function extracts the jwt token from the request
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"]; //set the cookie as access_token
  }
  return token;
};

//middleware for authorization, set the jwt strategy for the app
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor, //function to extract the jwt token from the request
      secretOrKey: process.env.SECRET_OR_KEY, //key used to sign the token/verify that it's legitimate
    }, //verify callback
    (payload, done) => {
      //payload = data set within the jwt token
      User.findById({ _id: payload.sub }, (err, user) => {
        //sub=subject from jwt. We search by id which is usually sub in the payload
        if (err) return done(err, false);
        if (user) return done(null, user);
        //passport attaches the user to req.user(has _id, email,password)
        //returns the user if there is one
        else return done(null, false); //no user found with that primary key
      });
    }
  )
);

//middleware for authentication - local strategy using email and password
//passport default usernameField is username!!
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      //localStrategy takes a verified callback with email and password from the client side. Done is a function that gets invoked when we're done
      User.findOne({ email: email }, (err, user) => {
        //check if user exists in the database
        //something went wrong with database
        if (err) return done(err);
        //if user does not exist in database
        if (!user)
          return done(null, false, {
            email: "Email not found",
          });

        //found the user - check if password is correct
        //comparePassword is a method in models/User
        user.comparePassword(password, done);
      });
    }
  )
);
