import {
    urlVehicleState,
    IVehicleStateResponse
} from "./vehicleState.definition";
import { runVehicaleAction } from "../common/runVehicaleAction.util";

export const vehicleStateAction = (token: string, vehicleId: string) => {
    return runVehicaleAction<IVehicleStateResponse>(
        {
            token,
            vehicleId
        },
        urlVehicleState
    );
};
