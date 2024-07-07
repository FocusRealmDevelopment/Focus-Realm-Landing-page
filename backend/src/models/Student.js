const mongoose = require('mongoose');

const { isEmail } = require('validator');
const encryptPassword = require('../middlewares/encryptPassword');

const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Invalid email address']
  },
  password: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  schoolName: {
    type: String,
    required: true,
  },
  studentMobileNumber: {
    type: String,
    required: true, 
  },
  parentMobileNumber: {
    type: String,
    required: true,
  },
});

StudentSchema.pre('save',encryptPassword);

module.exports = mongoose.model('Student', StudentSchema, 'students');
