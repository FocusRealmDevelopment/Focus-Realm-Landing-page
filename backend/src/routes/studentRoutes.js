const express = require('express');
const { createStudent, upload } = require('../controllers/studentController');

const router = express.Router();

router.post('/students',upload ,createStudent);

module.exports = router;
