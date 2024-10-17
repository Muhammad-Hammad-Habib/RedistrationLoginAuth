import { CommandStartedEvent } from "mongodb";
import mongoose from "mongoose";

const connectDB = async (DB_URL) =>{
    try {
        const db_name = {
            dbName : "personinfo"
        }
        const res = await mongoose.connect(DB_URL,db_name)
        console.log("Database connected");
    } catch (error) {
        console.log(`Issue in connection ${error}`);
    }
}
export default connectDB  