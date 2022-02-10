import mongoose from 'mongoose';



const PostSchema = mongoose.Schema({
    title: {
        type:String,
        required : true,
        unique: true
    },
    description: {
         type : String,
         required : true
    },
    username: {
        type : String,
        required : true
    },
    categories : {
        type : String,
        required: false
    },
    createDate: {
        type : Date

    }
})


const post = mongoose.model('post',PostSchema);
export default post;