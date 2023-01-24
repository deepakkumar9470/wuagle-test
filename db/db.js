import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const connDb = async () =>{
    try {
        await mongoose.connect(process.env.URL)
        console.log('Connected...')
    } catch (error) {
        console.log(error)
    }
}

export default connDb