// const multer = require('multer');
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'demo');
  },
});

const upload = multer(storage).single('displayPic');

export default upload;
