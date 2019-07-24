import fileModel from "./file-upload.dao";
import upload from "../../../utils/file.upload";


const fileService = {
    healthcheck: (req, res, next) => {
        console.log('Health Check')
        res.json({
            status: true,
            message: 'Application APIs are up'
        })
    },

    create: (req, res, next) => {
        upload(req, res, (err) => {
            if(err){
                res.send({message : "File not uploaded"});
            }

        })
    }
}

export default fileService;