const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;


const UserModel = require('../models/user-model');


passport.serializeUser((userFromDb, next) => {
    next(null, userFromDb._id);
});

passport.deserializeUser((idFromSession, next) => {
    UserModel.findById(
      idFromSession,

      (err, userFromDb) => {
          if (err) {
            next(err);
            return;
          }

          next(null, userFromDb);
      }
    );
});

passport.use(new LocalStrategy(
  {
    usernameField: 'loginEmail',
    passwordField: 'loginPassword'
  },
  (apiEmail, apiPassword, next) => {
      UserModel.findOne(
        { email: apiEmail },
        (err, userFromDb) => {
            if (err) {
              next(err);
              return;
            }

            if (!userFromDb) {
              next(null, false, { message: 'InValid EMAIL please try AGAIN' });
              return;
            }

            if (!bcrypt.compareSync(apiPassword, userFromDb.encryptedPassword)) {
              next(null, false, { message: 'Invalid Password.' });
              return;
            }

            next(null, userFromDb);
        }
      );
  }
));