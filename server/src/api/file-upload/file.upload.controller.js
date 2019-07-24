const upload = require('../../../utils/file-upload');


// import fileModel from './file-upload.dao';



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
      console.log(req.file)
      res.status(200).send(req.file)
    });
  },
};

export default fileService;
