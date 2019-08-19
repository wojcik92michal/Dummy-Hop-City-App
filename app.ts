import { getConsoleArgumentByName } from "./helpers/consoleArguments/consoleArguments.utils";
import { loginController } from "./actions/login/login.controller";
import { vehicleStateController } from "./actions/vehicaleActions/vehicleState/vehicleState.controller";
import { makeReservationController } from "./actions/vehicaleActions/makeReservation/makeReservation.controller";
import { endRideController } from "./actions/vehicaleActions/endRide/endRide.controller";
import { cancelReservationController } from "./actions/vehicaleActions/cancelReservation/cancelReservation.controller";
import { startEngineController } from "./actions/vehicaleActions/startEngine/startEngine.controller";
import { pauseRideController } from "./actions/vehicaleActions/pauseRide/pauseRide.controller";
import { initAppConfig } from "./config/app.config";

enum Actions {
    login = "login",
    vehicleState = "vehicleState",
    makeReservation = "makeReservation",
    endRide = "endRide",
    cancelReservation = "cancelReservation",
    startEngine = "startEngine",
    pauseRide = "pauseRide"
}

const runApp = () => {
    initAppConfig();

    const actionName = getConsoleArgumentByName("action");

    console.log(`Running action: ${actionName}...`);

    switch (actionName) {
        case Actions.login:
            loginController();
            break;
        case Actions.vehicleState:
            vehicleStateController();
            break;
        case Actions.makeReservation:
            makeReservationController();
            break;
        case Actions.endRide:
            endRideController();
            break;
        case Actions.cancelReservation:
            cancelReservationController();
            break;
        case Actions.startEngine:
            startEngineController();
            break;
        case Actions.pauseRide:
            pauseRideController();
            break;
        default:
            console.error(`Invalid action name: ${actionName}`);
    }
};

runApp();
