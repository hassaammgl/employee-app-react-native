import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

const JWT_SECRET = process.env.JWT_SECRET || "dgre5gtu65jyt0ethjr0t0rntr0tfgy8reiert478yirsio78tyhgfosi487ty87yeryot8eyt745ty";

export const verifyToken = async (req, res, next) => {
    console.log("verifying token");

    const { ownerID, owner } = req.body;
    console.log(req.body);
    try {

        if (!ownerID) {
            const verify_token = await jwt.verify(owner, JWT_SECRET)

            console.log(verify_token);

            const isUserExist = await User.findById({ _id: verify_token.id })

            if (isUserExist) {
                req.user = isUserExist._id;
                next()
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success: false,
                    message: getReasonPhrase(StatusCodes.UNAUTHORIZED),
                    error: "Invalid Credentials"
                });
            }

        }
        else {
            const verify_token = await jwt.verify(ownerID, JWT_SECRET)

            console.log(verify_token);

            const isUserExist = await User.findById({ _id: verify_token.id })

            if (isUserExist) {
                req.user = isUserExist._id;
                next()
            } else {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    success: false,
                    message: getReasonPhrase(StatusCodes.UNAUTHORIZED),
                    error: "Invalid Credentials"
                });
            }

        }
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
            error: error.message
        });

    }

}