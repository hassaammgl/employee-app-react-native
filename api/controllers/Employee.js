import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { Employee } from "../models/Employee.js";
import { Attendance } from "../models/Attendance.js";
import moment from "moment";


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
        } = req.body;
        const owner = req.user;
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
                    boss: owner,
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
    },
    getEmployeeData: async (req, res) => {
        const { employeeId } = req.body;
        const ownerID = req.user;
        console.log(req.body);
        if (employeeId === undefined || employeeId === null || employeeId === "") {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "ID's are Required!"
            });
        } else {
            try {
                const employee = await Employee.findOne({ _id: employeeId, boss: ownerID })
                console.log(employee);
                return res.status(StatusCodes.OK).json({
                    success: true,
                    employeeData: employee,
                    message: "Employee found successfully!",
                });

            } catch (error) {
                console.error(error);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                    message: error.message
                });
            }
        }
    },
    addAttendance: async (req, res) => {
        const { employeeId, date } = req.body;
        const ownerID = req.user;
        console.log(req.body);
        if (employeeId === undefined || employeeId === null || employeeId === "") {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "ID's are Required!"
            });
        } else {
            try {

                console.log("Marking employee as " + employeeId);


                const attendance = new Attendance({
                    bossId: ownerID,
                    employeeId,
                })

                console.log(attendance);
                const employee = await Employee.findOne({ _id: employeeId, boss: ownerID });
                employee.attendance = [attendance._id, ...employee.attendance];
                console.log(employee);

                await attendance.save();
                await employee.save();

                return res.status(StatusCodes.CREATED).json({
                    success: true,
                    message: "Attendance marked successfully!",
                })


            } catch (error) {
                console.error(error);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                    message: error.message
                });
            }
        }
    },
    getAttendanceData: async (req, res) => {
        const { employeeId } = req.body;
        const ownerID = req.user;
        console.log(req.body);
        if (employeeId === undefined || employeeId === null || employeeId === "" || ownerID === undefined || ownerID === null || ownerID === "") {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "ID's are Required!"
            });
        } else {
            try {

                const employeeAttendanceData = await Employee.findOne({ _id: employeeId, boss: ownerID }).populate("attendance");
                console.log(employeeAttendanceData);
                if (employeeAttendanceData.attendance.length > 0) {
                    return res.status(StatusCodes.OK).json({
                        success: true,
                        data: employeeAttendanceData,
                        message: "Attendance has been successfully Found!"
                    });
                }
                else {
                    return res.status(StatusCodes.OK).json({
                        success: true,
                        data: employeeAttendanceData,
                        message: "Not Attendance Found Yet!"
                    });
                }


            } catch (error) {
                console.error(error);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                    message: error.message
                });
            }
        }
    },
    getAllEmployees: async (req, res) => {
        const ownerID = req.user;
        console.log(req.user);
        if (!ownerID || ownerID === "") {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "ID is Required!"
            });
        } else {
            try {
                const employees = await Employee.find({ boss: ownerID });
                console.log(employees);
                if (employees.length > 0) {

                    return res.status(StatusCodes.OK).json({
                        success: true,
                        data: employees,
                        message: "Employees founds successfully!"
                    })
                }
                else {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        success: false,
                        data: employees,
                        message: "Employees not found!",
                    })
                }

            } catch (error) {
                console.error(error);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                    message: error.message
                });
            }
        }
    },
    getAllPresentEmployees: async (req, res) => {
        const { month, date } = req.body;
        const ownerID = req.user;

        if (month === undefined || month === null || month === "" || date === undefined || date === null || date === "") {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "Date and Month are Required!"
            })

        }

        console.log(req.user);
        if (!ownerID || ownerID === "") {
            return res.status(StatusCodes.CONFLICT).json({
                success: false,
                error: getReasonPhrase(StatusCodes.CONFLICT),
                message: "ID is Required!"
            });
        } else {
            try {
                const employees = await Employee.find({ boss: ownerID }).populate("attendance");
                if (employees.length > 0) {
                    console.log(req.body);

                    const presentEmployees = employees.map(employee => {
                        const attendance = employee.attendance.filter(att => (
                            att.date.split(" ")[0] === month && att.date.split(" ")[1] === date
                        ));
                        return attendance.length > 0 ? employee : null;


                    });
                    const presents = presentEmployees.filter(employee => employee !== null);
                    console.log("pe: ", presents);
                    return res.status(StatusCodes.OK).json({
                        success: true,
                        data: presents.length,
                        message: "Employees founds successfully!"
                    })
                }
                else {
                    return res.status(StatusCodes.NOT_FOUND).json({
                        success: false,
                        data: employees,
                        message: "Employees not found!",
                    })
                }

            } catch (error) {
                console.error(error);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                    message: error.message
                });
            }
        }
    },
}


