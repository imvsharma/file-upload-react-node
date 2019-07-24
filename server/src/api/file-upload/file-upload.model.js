import {Schema} from 'mongoose';

const fileSchema = new Schema({
    filename: {
        type: String
    },
    filepath: {
        type:String
    }
},{timestamps : true});

export default fileSchema;
