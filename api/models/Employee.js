import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    dutyType: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: Date,
        default: Date.now,
    },
    attendance: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Attendance"
        }
    ]
}, {
    timeStamps: true
});

export const Employee = mongoose.model("Employee", employeeSchema);
