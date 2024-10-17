import mongoose from "mongoose";
import moment from "moment";

const attendanceSchema = new mongoose.Schema({
    date: {
        type: String,
        default: moment().format("MMMM Do YYYY, h:mm:ss a")
    },
    bossId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    }
}, {
    timeStamps: true
});

export const Attendance = mongoose.model("Attendance", attendanceSchema);
