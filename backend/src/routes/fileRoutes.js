const express = require('express');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const router = express.Router();

// Mongo URI
const mongoURI = process.env.MONGO_URI;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Init gfs
let gfs;
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// @route GET /api/students/files
// @desc  Display all student files in JSON
router.get('/students/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No student files exist',
      });
    }
    res.json(files);
  });
});

// @route GET /api/students/files/:filename
// @desc  Display a single student file by filename
router.get('/students/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!file) {
      return res.status(404).json({
        err: 'File not found',
      });
    }
    res.json(file);
  });
});

// @route GET /api/students/image/:filename
// @desc  Display an image by filename
router.get('/students/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!file) {
      return res.status(404).json({
        err: 'File not found',
      });
    }
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image',
      });
    }
  });
});

module.exports = router;
