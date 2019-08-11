import {
    getConsoleArgumentsByNames,
    getInvalidConsoleArguments
} from "../../helpers/consoleArguments/consoleArguments.utils";
import {
    makeReservationRequest,
    IMakeReservationParams
} from "./makeReservationRequest";

const makeReservationAction = async () => {
    const consoleParamNames = ["vehicleId"];
    const invalidArguments = getInvalidConsoleArguments(consoleParamNames);
    if (invalidArguments.length > 0) {
        console.error(
            `Invalid or missing params for make reservation: ${invalidArguments}!`
        );
        return;
    }
    const data = getConsoleArgumentsByNames(consoleParamNames);

    const makeReservationParams: IMakeReservationParams = {
        vehicleId: data.vehicleId
    };

    makeReservationRequest(makeReservationParams);
};

makeReservationAction();