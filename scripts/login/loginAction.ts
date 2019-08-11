import { loginRequest } from "./loginRequest";
import { IActionConfig, performAction } from "../../helpers/actions/performAction.util";

const loginAction = async () => {
    const config: IActionConfig = {
        request: loginRequest,
        actionName: "login",
        consoleArgumentNames: ["login", "password"]
    };

    await performAction(config);
};

loginAction();
