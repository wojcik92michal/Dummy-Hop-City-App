import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { IStartEngineResponse } from "./startEngine.definition";
import { runVehicaleAction } from "../common/runVehicaleAction.util";

export const startEngineAction = async (
    token: string,
    vehicleId: string,
    rideId: string
) => {
    return runVehicaleAction<IStartEngineResponse>({
        token,
        action: VehicleAction.ENGINE_STARTED,
        vehicleId,
        rideId
    });
};
