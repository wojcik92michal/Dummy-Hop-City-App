import {
    VehicleAction,
    prepareVehicleParams
} from "../../../helpers/params/prepareVehicaleParams.util";
import axios, { AxiosResponse } from "axios";
import { rideActionsUrl } from "./vehicaleActions.consts";

export interface IVehicleActionParams {
    token: string;
    vehicleId: string;
    rideId?: string;
    action?: VehicleAction;
}

export function runVehicaleAction<Response>(
    params: IVehicleActionParams,
    url: string = rideActionsUrl
): Promise<AxiosResponse<Response>> {
    const headers = {
        Authorization: `Bearer ${params.token}`
    };

    const preparedParams = prepareVehicleParams(
        params.vehicleId,
        params.action,
        params.rideId
    );

    return axios.post<Response>(url, preparedParams, {
        headers
    });
}
