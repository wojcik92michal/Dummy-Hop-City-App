import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { IEndRideResponse } from "./endRide.definition";
import { runVehicaleAction } from "../common/runVehicaleAction.util";

export const endRideAction = (
    token: string,
    vehicleId: string,
    rideId: string
) => {
    return runVehicaleAction<IEndRideResponse>({
        token,
        action: VehicleAction.END,
        vehicleId,
        rideId
    });
};
