import axios from "axios";

const api = "http://192.168.100.40:3000/api";

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
            console.log(JSON.stringify(err));
        });
    }
}