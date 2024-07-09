const Teacher = require("../models/Teacher")
const multer = require('multer');
const path = require('path');

const storage = require('../config/gridFsStorage');
const upload = multer({ storage: storage });

exports.upload = upload.single('image');

exports.createTeacher = async (req, res) => {
    try {
        const {
            fullName,
            email,
            gender,
            mobileNumber,
            password,
            dateofBirth,
            schoolName,
            address,
            pinCode,
        }=req.body;

        const imageUrl = req.file ? req.file.filename : null;
        
        const teacher = new Teacher({
            fullName,
            email,
            gender,
            mobileNumber,
            password,
            dateofBirth,
            schoolName,
            address,
            pinCode,
            imageUrl,

    });

    await teacher.save();
    res.status(201).json({ message: 'Teacher created successfully', teacher });
} catch (err) {
    res.status(500).json({ message: 'Server error teacher could not created', error: err.message });
}
};