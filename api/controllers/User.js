import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dgre5gtu65jyt0ethjr0t0rntr0tfgy8reiert478yirsio78tyhgfosi487ty87yeryot8eyt745ty";

export const registerUser = async (req, res) => {
    console.log("registering user");
    const {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        address,
        city,
        cnic
    } = req.body;
    console.log("checking email");
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
        console.log("email already exists");
        return res.status(StatusCodes.CONFLICT).json({
            success: false,
            error: getReasonPhrase(StatusCodes.CONFLICT),
            message: "Email already exists"
        });
    }
    else {

        try {
            console.log("Hashing password before saving");

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                email,
                password: hashedPassword,
                firstName,
                lastName,
                phoneNumber,
                address,
                city,
                cnic
            });

            await newUser.save();
            console.log("user created successfully");
            res.status(StatusCodes.CREATED).json({
                success: true,
                message: "User created successfully",
                error: null
            });
        } catch (error) {
            console.error(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
                message: error.message
            });
        }
    }
};


export const loginUser = async (req, res) => {

    console.log("logging in user");
    const { email, password } = req.body;

    console.log("finding email");

    const user = await User.findOne({ email });
    console.log("user", user);

    if (user === null) {
        console.log("user not found");
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            error: getReasonPhrase(StatusCodes.NOT_FOUND),
            message: "User not found"
        });
    }
    console.log("comparing password");
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        console.log("invalid credentials");
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success: false,
            error: getReasonPhrase(StatusCodes.UNAUTHORIZED),
            message: "Invalid credentials"
        });
    }
    else {
        console.log("genrating token");

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || JWT_SECRET, { expiresIn: "1d" });
        console.log("user logged in successfully");
        res.status(StatusCodes.OK).json({
            success: true,
            message: "User logged in successfully",
            error: null,
            token,
        });
    }
};