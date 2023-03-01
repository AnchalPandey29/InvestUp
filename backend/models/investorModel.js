const { Schema, model } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const investorSchema = new Schema({
  investoravatar:{type:String},
  name: { type: String, required: true },
  identityproofno:{type:String},
  identityproof:{type:String},
  date:{type:String},
  select1:{type:String},
  stage:{type:String},
  brief:{type:String},
  currentincubatees:{type:String},
  graduatedincubatees:{type:String},
  funded:{type:String},
  email: { type: String, required: true, unique: true },
  tel:{type:String},
  password: { type: String, required: true },
  state:{type:String},
  city:{type:String},
  alink:{type:String},
  centerlocation:{type:String},
  centerloactionaddress:{type:String},
  industry:{type:String},
  sector:{type:String},
  DIPPTNumber:{type:String},
  

  
  
  
});

investorSchema.pre("save", function (next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    console.log("Password was not modified");
    return next();
  }

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
});

investorSchema.methods.comparePassword = function (candidatePassword, cb) {
  console.log("comparing...", candidatePassword);
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    console.log(isMatch);
    if (err) {
      console.log(err);
      return cb(err);
    }
    cb(null, isMatch);
  });
};

investorSchema.methods.authenticate = function (formData, cb) {
  // console.log('formData', formData);
  bcrypt.compare(formData.password, this.password, function (err, isMatch) {
    if (err && formData.email === this.email) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = model("investor", investorSchema);
