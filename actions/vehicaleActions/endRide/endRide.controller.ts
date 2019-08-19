import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../../helpers/api/handleRequestError.util";
import { endRideAction } from "./endRide.action";

export const endRideController = async () => {
    const paramNames = ["token", "rideId", "vehicleId"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for end ride action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await endRideAction(
            consoleParams.token,
            consoleParams.vehicleId,
            consoleParams.rideId
        );

        console.log("Ride completed", response.data);
    } catch (error) {
        handleRequestError(error);
    }
};
