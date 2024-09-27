import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://h455a4mmehtab:s6J9RtLHx5W1SyXE@kaamwala.chtjx.mongodb.net/kaamwala?retryWrites=true&w=majority&appName=kaamwala" || "mongodb://127.0.0.1:27017/kaamwala", {
        dbName: "kaamwala",
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.log(err);
    });
};

