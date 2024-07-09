const express = require('express');
const { createTeacher, upload } = require('../controllers/teacherController');

const router = express.Router();

router.post('/teachers',upload ,createTeacher);

module.exports = router;
