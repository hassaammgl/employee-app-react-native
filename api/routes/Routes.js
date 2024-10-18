import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User.js";
import { registerEmployee as Employee } from "../controllers/Employee.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

// Registeration routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// employee routes
router.post("/addEmployee", verifyToken, Employee.addEmployee);
router.post("/add-attendance", verifyToken, Employee.addAttendance);
router.post("/get-employee-data", verifyToken, Employee.getEmployeeData);
router.get("/get-attendance-data", verifyToken, Employee.getAttendanceData);
router.post("/get-all-employees", verifyToken, Employee.getAllEmployees);
router.post("/get-all-present-employees", verifyToken, Employee.getAllPresentEmployees);


export { router };