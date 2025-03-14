import {
    getConsoleArgumentsByNames,
    areConsoleParamsValid,
    getInvalidConsoleArguments
} from "../../../helpers/consoleArguments/consoleArguments.utils";
import { handleRequestError } from "../../../helpers/api/handleRequestError.util";
import { makeReservationAction } from "./makeReservation.action";

export const makeReservationController = async () => {
    const paramNames = ["token", "vehicleId"];
    const consoleParams = getConsoleArgumentsByNames(paramNames);

    if (!areConsoleParamsValid(paramNames, consoleParams)) {
        console.log(
            `Invalid or missing params for make reservation action: ${getInvalidConsoleArguments(
                paramNames,
                consoleParams
            )}`
        );
        return;
    }

    try {
        const response = await makeReservationAction(
            consoleParams.token,
            consoleParams.vehicleId
        );

        const { id, scooterId } = response.data.ride;
        console.log(`Reservation for ${scooterId} completed! RideId: ${id}`);
    } catch (error) {
        handleRequestError(error);
    }
};
