import mongoose from "mongoose";

const mongoUri = (
    "mongodb://127.0.0.1:27017"
    ||
    "mongodb+srv://h455a4mmehtab:s6J9RtLHx5W1SyXE@kaamwala.chtjx.mongodb.net/kaamwala?retryWrites=true&w=majority&appName=kaamwala"
)
export const connectDB = async () => {
    await mongoose.connect(mongoUri, {
        dbName: "kaamwala",
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });
};

