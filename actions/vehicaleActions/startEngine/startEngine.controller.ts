import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../../helpers/api/handleRequestError.util";
import { startEngineAction } from "./startEngine.action";

export const startEngineController = async () => {
    const paramNames = ["token", "rideId", "vehicleId"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for start engine action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await startEngineAction(
            consoleParams.token,
            consoleParams.vehicleId,
            consoleParams.rideId
        );

        // TODO [mw] handle response
        console.log(response.data);
    } catch (error) {
        handleRequestError(error);
    }
};
