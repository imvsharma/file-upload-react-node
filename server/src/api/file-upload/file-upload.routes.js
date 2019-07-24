import fileService from './file.upload.controller';

const fileRoutes = (router) => {
    router.get('/healthcheck', fileService.healthcheck);
    router.post('/user/create', fileService.create);
}

export default fileRoutes;