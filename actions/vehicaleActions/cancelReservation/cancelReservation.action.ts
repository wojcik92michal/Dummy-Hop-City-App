import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { ICancelReservationResponse } from "./cancelReservation.definition";
import { runVehicaleAction } from "../common/runVehicaleAction.util";

export const cancelReservationAction = (
    token: string,
    vehicleId: string,
    rideId: string
) => {
    return runVehicaleAction<ICancelReservationResponse>({
        token,
        action: VehicleAction.END,
        vehicleId,
        rideId
    });
};
