import * as multer from 'multer';
import * as path from 'path';
import uuidv4 from 'uuidv4';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidv4()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage}).single('filename');
export default upload;