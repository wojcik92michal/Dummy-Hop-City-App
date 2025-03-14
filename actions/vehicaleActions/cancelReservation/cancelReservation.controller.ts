import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../../helpers/api/handleRequestError.util";
import { cancelReservationAction } from "./cancelReservation.action";

export const cancelReservationController = async () => {
    const paramNames = ["token", "rideId", "vehicleId"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for cancel reservation action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await cancelReservationAction(
            consoleParams.token,
            consoleParams.vehicleId,
            consoleParams.rideId
        );

        console.log('Reservation cancelled:', response.data);
    } catch (error) {
        handleRequestError(error);
    }
};
