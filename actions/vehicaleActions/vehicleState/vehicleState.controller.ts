import { vehicleStateAction } from "./vehicleState.action";
import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../../helpers/api/handleRequestError.util";

const base = (params: string[]) => {

};

export const vehicleStateController = async () => {
    const paramNames = ["token", "vehicleId"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for vehicle state action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await vehicleStateAction(
            consoleParams.token,
            consoleParams.vehicleId
        );

        // TODO [mw] handle response
        console.log(response.data);
    } catch (error) {
        handleRequestError(error);
    }
};
