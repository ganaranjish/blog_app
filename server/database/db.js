
import mongoose from 'mongoose';

const Connection = async() =>{
    try{
  const URL='mongodb+srv://gana:gana@blogapp.4i60z.mongodb.net/BLOG?retryWrites=true&w=majority'
    await    mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false});
console.log('Database connected successfully');
}catch(error){
    console.log('Error while connecting to MongoDb',error);
}
}
export default Connection;