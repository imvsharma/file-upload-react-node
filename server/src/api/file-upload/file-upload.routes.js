import fileService from './file.upload.controller';
import upload from '../../../utils/file-upload';

const fileRoutes = router => {
  router.get('/healthcheck', fileService.healthcheck);
  router.post('/user/create', fileService.create);
};

export default fileRoutes;
