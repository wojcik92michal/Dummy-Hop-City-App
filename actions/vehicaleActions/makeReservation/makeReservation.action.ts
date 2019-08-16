import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";
import { IMakeReservationResponse } from "./makeReservation.definition";
import { runVehicaleAction } from "../common/runVehicaleAction.util";

export const makeReservationAction = async (
    token: string,
    vehicleId: string
) => {
    return runVehicaleAction<IMakeReservationResponse>({
        token,
        action: VehicleAction.BOOK,
        vehicleId
    });
};
