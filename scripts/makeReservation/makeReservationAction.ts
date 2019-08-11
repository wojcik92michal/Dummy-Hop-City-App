import { makeReservationRequest } from "./makeReservationRequest";
import {
    IActionConfig,
    performAction
} from "../../helpers/actions/performAction.util";

const makeReservationAction = async () => {
    const config: IActionConfig = {
        request: makeReservationRequest,
        actionName: "make reservation",
        consoleArgumentNames: ["vehicleId"]
    };

    await performAction(config);
};

makeReservationAction();
