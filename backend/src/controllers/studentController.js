const Student = require('../models/Student');
const multer = require('multer');
const path = require('path');

const storage = require('../config/gridFsStorage');
const upload = multer({ storage: storage });

exports.upload = upload.single('image');


exports.createStudent = async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      email,
      password,
      batch,
      pinCode,
      address,
      rollNumber,
      gender,
      schoolName,
      studentMobileNumber,
      parentMobileNumber,
    } = req.body;

    const imageUrl = req.file ? req.file.filename : null;

    const student = new Student({
      fullName,
      dateOfBirth,
      email,
      password,
      batch,
      pinCode,
      address,
      rollNumber,
      gender,
      schoolName,
      studentMobileNumber,
      parentMobileNumber,
      imageUrl,
    });

    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (err) {
    res.status(500).json({ message: 'Server error student could not be created', error: err.message });
  }
};
