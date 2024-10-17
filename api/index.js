import express from "express";
import cors from "cors";
import morgan from "morgan";
import os from "os";
import { router } from "./routes/Routes.js";
import { connectDB } from "./config/db.js"

const ip = os.networkInterfaces().wlx00e0410d9393[0].address;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

connectDB();

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    console.log(`public url ==> http://${ip}:3000`)
    console.log(`private url ==> http://localhost:3000`)
});