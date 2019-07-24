import fileService from './file.upload.controller';
const multer = require('multer');
// import fileModel from './file-upload.dao';
const upload = multer({ dest: 'uploads/' });

const fileRoutes = router => {
  router.get('/healthcheck', fileService.healthcheck);
  router.post('/user/create', upload.single('filename'), fileService.create);
};

export default fileRoutes;
