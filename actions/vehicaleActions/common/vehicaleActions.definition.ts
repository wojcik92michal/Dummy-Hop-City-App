import { VehicleAction } from "../../../helpers/params/prepareVehicaleParams.util";

export interface IVehicaleActionsParams {
    token: string;
    vehicleId: string;
    rideId?: string;
}

export interface IVehicaleActionsesponse {
    responseType: string;
    ride: {
        activities: [
            {
                after: VehicleAction;
                before: VehicleAction | null;
                date: number;
                lastActivityRate: number;
                lat: number;
                lon: number;
            }
        ];
        adminActivities: string;
        amount: number;
        charged: number;
        group: string;
        id: string;
        lastStateChangeDate: number;
        note: string;
        scooterId: string;
        scooterVersion: string;
        state: VehicleAction;
        userId: string;
        version: number;
    };
}
