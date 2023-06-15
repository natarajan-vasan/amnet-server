const express = require('express');
const fileController = require('../controller/fileController');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + ".docx")
    }
});
// 
const upload = multer({ storage: storage })
//
var router = express.Router();
//
router.post('/upload', upload.single('myFile'), fileController.upload);
// 
router.post('/download', fileController.download);
//
module.exports = router;