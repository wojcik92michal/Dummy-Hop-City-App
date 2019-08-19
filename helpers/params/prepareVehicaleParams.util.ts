export enum VehicleAction {
    END = "END",
    BOOK = "BOOK",
    PAUSED = "PAUSED",
    ENGINE_STARTED = "ENGINE_STARTED"
}

export interface IVehicleParams {
    options: string[];
}

export const prepareVehicleParams = (
    vehicleId: string,
    action?: VehicleAction,
    rideId?: string
): IVehicleParams => {
    const vehicleParams = [`on:vehicle:${vehicleId}`];

    if (action) {
        vehicleParams.push(`state:${action}`);
    }

    if (rideId) {
        vehicleParams.push(`on:ride:${rideId}`);
    }

    return {
        options: vehicleParams
    };
};
