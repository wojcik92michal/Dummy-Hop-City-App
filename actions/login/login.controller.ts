import { loginAction } from "./login.action";
import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../helpers/api/handleRequestError.util";

export const loginController = async () => {
    const paramNames = ["username", "password"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for login action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await loginAction(
            consoleParams.username,
            consoleParams.password
        );

        console.log(`Token: ${response.data.access_token}`);
    } catch (error) {
        handleRequestError(error);
    }
};
