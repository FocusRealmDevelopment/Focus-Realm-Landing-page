const Teacher = require("../models/Teacher")

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

    });

    await teacher.save();
    res.status(201).json({ message: 'Teacher created successfully', teacher });
} catch (err) {
    res.status(500).json({ message: 'Server error teacher could not created', error: err.message });
}
};