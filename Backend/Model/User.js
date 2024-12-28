const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  phoneNumber: String,
  password: { type: String, required: true },
  userType: { type: String, enum: ['Freelancer', 'Client'], default: 'Client' },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre('validate', function (next) {
    if (this.userType) {
      // Convert userType to capitalized format
      this.userType = this.userType
        .toLowerCase() // Convert to lowercase
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
    }
    next();
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
