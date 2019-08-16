import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../../helpers/api/handleRequestError.util";
import { pauseRideAction } from "./pauseRide.action";

export const pauseRideController = async () => {
    const paramNames = ["token", "rideId", "vehicleId"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for pause ride action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await pauseRideAction(
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
