import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { runVehicaleAction } from "../common/runVehicaleAction.util";
import { IVehicaleActionsesponse } from "../common/vehicaleActions.definition";

export const cancelReservationAction = (
    token: string,
    vehicleId: string,
    rideId: string
) => {
    return runVehicaleAction<IVehicaleActionsesponse>({
        token,
        action: VehicleAction.END,
        vehicleId,
        rideId
    });
};
