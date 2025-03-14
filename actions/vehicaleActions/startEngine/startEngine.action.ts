import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { runVehicaleAction } from "../common/runVehicaleAction.util";
import { IVehicaleActionsesponse } from "../common/vehicaleActions.definition";

export const startEngineAction = async (
    token: string,
    vehicleId: string,
    rideId: string
) => {
    return runVehicaleAction<IVehicaleActionsesponse>({
        token,
        action: VehicleAction.ENGINE_STARTED,
        vehicleId,
        rideId
    });
};
