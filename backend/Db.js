import mongoose from "mongoose";

const Connectdb  =  async()=> {
       
    try{
           console.log(process.env.MONGO_URL)
           console.log(process.env.MONGO_URL)
           await mongoose.connect(process.env.MONGO_URL)
           console.log("mongodb Connected")
    }

    catch(error){
          console.log(error)
    }
};

export default Connectdb;