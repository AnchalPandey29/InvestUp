const { Schema, model } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const contactSchema = new Schema({
    name: { type: String },
    email: String,
    message:{type:String},
  });

/*  contactSchema.pre("save", function (next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    console.log("Password was not modified");
    return next();
  } */
 
  // generate a salt
  bcrypt.genSalt(SALT, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
//});

/* contactSchema.methods.comparePassword = function (candidatePassword, cb) {
  console.log("comparing...", candidatePassword);
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    console.log(isMatch);
    if (err) {
      console.log(err);
      return cb(err);
    }
    cb(null, isMatch);
  });
}; */

contact.methods.authenticate = function (formData, cb) {
  // console.log('formData', formData);
  bcrypt.compare(formData.password, this.password, function (err, isMatch) {
    if (err && formData.email === this.email) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = model("contact", contactSchema);
