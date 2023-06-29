import axios from "axios";
import serverDirection from "./server_direction";

// /accounts/signup/
const signup = async (
    fullName,
    usernames,
    documentId,
    email,
    phoneNumber,
    password,
    passwordConfirmation
) => {
    try {
        const response = await axios.post(
            `${serverDirection}/api/accounts/signup/`,
            {
                name: fullName,
                email: email,
                username: usernames,
                password1: password,
                password2: passwordConfirmation,
                client: {
                    doc_type: "CC",
                    doc_number: documentId,
                    phone: phoneNumber,
                },
            }
        );
        console.log(response.data);
    } catch (error) {
        //console.log(error.data);
        const data = error.response.data;
        console.error("request data", data);
        console.error("Error de registro:", error);
        throw error;
    }
};

export default signup