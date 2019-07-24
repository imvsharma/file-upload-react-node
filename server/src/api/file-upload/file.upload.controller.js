import upload from '../../../utils/file-upload';
import fileModel from './file-upload.dao';



const fileService = {
  healthcheck: (req, res, next) => {
    console.log('Health Check');
    res.json({
      status: true,
      message: 'Application APIs are up',
    });
  },

  create: (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.send({ message: 'File not uploaded' });
      }
      console.log(req.file);
      const displayPic = req.file.originalname;
      let originalname = req.file.originalname;
      originalname = originalname.slice(0, originalname.length - 4);

      const file = new fileModel({
        displayPic: originalname,
        filepath: `./uploads/${displayPic}`,
      });

      file.save((err, response) => {
        if (err) {
          res.json(err);
        }
        res.json(response);
      });
    });
  },
};

export default fileService;
