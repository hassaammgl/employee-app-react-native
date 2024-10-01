import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { Employee } from "../models/Employee.js";
import { User } from "../models/User.js";


export const registerEmployee = {
    addEmployee: async (req, res) => {
        console.log(req.body);
        const {
            firstName,
            lastName,
            phoneNumber,
            address,
            city,
            cnic,
            salary,
            designation,
            workType,
            owner,
        } = req.body;
        const isEmployeeExist = await Employee.findOne({ cnic });
        console.log("Not exists ", isEmployeeExist);
        if (isEmployeeExist) {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "Employee already exists"
            });
        }
        else {
            try {
                const user = await User.find();
                const newEmployee = new Employee({
                    firstName,
                    lastName,
                    phoneNumber,
                    address,
                    city,
                    cnic,
                    salary,
                    designation,
                    workType,
                    boss: user._id
                });
                await newEmployee.save();
                return res.status(StatusCodes.CREATED).json({
                    success: true,
                    message: "Employee added successfully"
                });
            }
            catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                    message: error.message
                });
            }
        }
    }
}