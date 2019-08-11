import axios from "axios";
import { API_BASE_URL } from "../../helpers/api/api.consts";

export interface ILoginParams {
    login: string;
    password: string;
    scope: string;
    grant: string;
}

const urlLogin = `${API_BASE_URL}/uaa/oauth/token`;

export const loginRequest = async (params: ILoginParams) => {
    try {
        const response = await axios.post(urlLogin, params);
        // TODO handle response
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
