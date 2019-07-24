import mongoose, {Model} from 'mongoose';
import fileSchema from './file-upload.model';

/* userSchema.statics = {
    create: 
} */

class File extends mongoose.Model {
    constructor (file) {
        super(file);
    }
    save = () => {
        return super.save()
    }
}

fileSchema.loadClass(File);

const fileModel = mongoose.model(File, fileSchema, 'File');

export default fileModel;