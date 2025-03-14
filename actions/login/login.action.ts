import axios from "axios";

import appSettings from "../../appSettings.json";
import { stringify } from "query-string";
import { ILoginParams, urlLogin, ILoginResponse } from "./login.definition";

export const loginAction = (username: string, password: string) => {
    const loginParams: ILoginParams = {
        username,
        password,
        grant_type: "password",
        scope: "ui"
    };

    const headers = {
        Authorization: `Basic ${appSettings.loginToken}`
    };

    return axios.post<ILoginResponse>(urlLogin, stringify(loginParams), {
        headers
    });
};
