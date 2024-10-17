import { CommandStartedEvent } from "mongodb";
import mongoose from "mongoose";

const connectDB = async (DB_URL) =>{
    try {
        const db_name = {
            dbName : "personinfo"
        }
        const res = await mongoose.connect(DB_URL,db_name)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
export default connectDB  