import {Schema} from 'mongoose';

const fileSchema = new Schema({
    displayPic: {
        type: String
    },
    filepath: {
        type:String
    }
},{timestamps : true});

export default fileSchema;
