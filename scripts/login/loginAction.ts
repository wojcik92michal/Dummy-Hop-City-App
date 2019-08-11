import {
    getInvalidConsoleArguments,
    getConsoleArgumentsByNames
} from "../../helpers/consoleArguments/consoleArguments.utils";
import { loginRequest, ILoginParams } from "./loginRequest";

const loginAction = async () => {
    const consoleParamNames = ["login", "password"];
    const invalidArguments = getInvalidConsoleArguments(consoleParamNames);
    if (invalidArguments.length > 0) {
        console.error(
            `Invalid or missing params for login: ${invalidArguments}!`
        );
        return;
    }
    const data = getConsoleArgumentsByNames(consoleParamNames);

    const loginParams: ILoginParams = {
        login: data.login,
        password: data.password,
        grant: "TODO_GRANT",
        scope: "TODO_SCOPE"
    };

    loginRequest(loginParams);
};

loginAction();
