const Student = require('../models/Student');

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
    });

    await student.save();
    res.status(201).json({ message: 'Student created successfully', student });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
