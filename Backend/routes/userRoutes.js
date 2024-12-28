const express = require('express');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const User = require('../Model/User');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, confirmPassword, userType } = req.body;

  // Check password match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log("User already exists:", existingUser);
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({ firstName, lastName, email, phoneNumber, password, userType });
    console.log("New user data before saving:", newUser);
    await newUser.save();
    console.log("User saved successfully.");
    // Send email to admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'New Registration',
      text: `A new user has registered. 
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phoneNumber}
      User Type: ${userType}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', userType: user.userType });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

module.exports = router;
