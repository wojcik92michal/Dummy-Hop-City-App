import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { runVehicaleAction } from "../common/runVehicaleAction.util";
import { IVehicaleActionsesponse } from "../common/vehicaleActions.definition";

export const makeReservationAction = async (
    token: string,
    vehicleId: string
) => {
    return runVehicaleAction<IVehicaleActionsesponse>({
        token,
        action: VehicleAction.BOOK,
        vehicleId
    });
};
