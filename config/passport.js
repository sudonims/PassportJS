const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = function(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({email: email}).then((user) => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }
        // Match password

        if(password===user.password){
            return done(null,user);
        } else {
            return done(null,false,{message:'Incorrect Password'});
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
