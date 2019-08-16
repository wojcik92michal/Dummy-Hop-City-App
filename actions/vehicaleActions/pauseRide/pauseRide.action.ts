import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { IPauseRideResponse } from "./pauseRide.definition";
import { runVehicaleAction } from "../common/runVehicaleAction.util";

export const pauseRideAction = async (
    token: string,
    vehicleId: string,
    rideId: string
) => {
    return runVehicaleAction<IPauseRideResponse>({
        token,
        action: VehicleAction.PAUSED,
        vehicleId,
        rideId
    });
};
