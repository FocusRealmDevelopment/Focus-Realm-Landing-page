const mongoose = require('mongoose');

const { isEmail } = require('validator');
const encryptPassword = require('../middlewares/encryptPassword');

const TeacherSchema = new mongoose.Schema({

    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [isEmail,'Invalid Email Address']
    },
    gender:{
        type: String,
        required: true,
        enum: ['Male','Female','Other'],
    },
    mobileNumber:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    dateofBirth:{
        type: Date,
        required: true,
    },
    schoolName:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    pinCode:{
        type: String,
        required: true,
    },

});

TeacherSchema.pre('save',encryptPassword);

module.exports = mongoose.model('Teacher',TeacherSchema,'teachers');