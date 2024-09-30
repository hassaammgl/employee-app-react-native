import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User.js";
import { registerEmployee } from "../controllers/Employee.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/addEmployee", registerEmployee.addEmployee);

export { router };