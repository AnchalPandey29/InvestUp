const { Schema, model } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const startupSchema = new Schema({
  email: {type : String},
  role: {type:String},
  password: { type: String, required: true },//password
  
  startupimage: {type: String},//startuplogo
  name: { type: String },//startupname
  created_at: Date,//date of creation of startup
  type:{type:String},//bootstrap or funded
  stage:{type:String},// stage by button
  brief:{type:String},// Description about startup
  sdocuments: {type: String},//document for the verification of startup

  owneravatar:{type:String},//owner image
  ownername:{type:String},// name of the owner
  identityproof:{type:String},
  identityno:{type:String},
  documents: {type: String},//document for the verification of owner
  ownercontact: { type: Number},//contact no of owner
  owneremail:{type:String},
  teammemberno:{type:Number},//no of members in team
  teammembers:{type:Array},//name of members
  productimage:{type:String},//image of startup product
  productname:{type:String},//Name of the product
  productdescription:{type:String},//Description of the product 

  email: { type: String },//startupemail
  tel:{type:String},
  state:{type:String},
  city:{type:String},
  website:{type:String},//website link of startup
  app:{type:String},//app link of startup

  

  industry:{type:String},
  sector:{type:String},
  interests:{type:String},
  aadhar:{type:String},
 
  
});

startupSchema.pre("save", function (next) {
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

startupSchema.methods.comparePassword = function (candidatePassword, cb) {
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

startupSchema.methods.authenticate = function (formData, cb) {
  // console.log('formData', formData);
  bcrypt.compare(formData.password, this.password, function (err, isMatch) {
    if (err && formData.email === this.email) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = model("startup", startupSchema);
