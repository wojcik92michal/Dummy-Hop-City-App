import { API_AUTH_URL } from "../../helpers/api/api.consts";

export const urlLogin = `${API_AUTH_URL}/uaa/oauth/token`;

export interface ILoginParams {
    username: string;
    password: string;
    scope: string;
    grant_type: string;
}

export interface ILoginResponse {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
}
