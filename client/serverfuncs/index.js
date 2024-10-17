import axios from "axios";

const api = "http://192.168.100.40:3000/api";
// http://localhost:3000/api/get-all-employees

export const apiCalls = {
    registerUser: async ({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        address,
        city,
        cnic,
    }) => {
        return await axios.post(`${api}/register`, {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            city,
            cnic,
        }).catch((err) => {
            console.log(err);
        });
    },
    loginUser: async ({ email, password }) => {
        return await axios.post(`${api}/login`, {
            email,
            password
        }).catch((err) => {
            console.log(err);
            return err;
        });
    },
    addEmployee: async ({
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
    }) => {
        return await axios.post(`${api}/addEmployee`, {
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
        }).catch((err) => {
            console.log(err);
            return err;
        });
    },


}