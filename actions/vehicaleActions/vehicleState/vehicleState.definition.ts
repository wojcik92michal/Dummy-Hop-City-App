import { API_ACTIONS_URL } from "../../../helpers/api/api.consts";

export const urlVehicleState = `${API_ACTIONS_URL}/vehicle/view/current-vehicle`;

export interface IVehicleStateResponse {
    id: string;
    name: string;
    plate: string;
    position: {
        lat: number;
        lon: number;
    };
    battery_status: {
        percentage_level: number;
        estimated_distance: number;
        battery_matched: boolean;
        time: number;
    };
    scooter_version: string;
    modifications: null;
    group: string;
    usage_type: string;
    battery_source: string;
    device_vendor: string;
    device_id: string;
    computer_id: string;
    last_update: number;
    old_status: string;
    statuses: null;
    last_status_update: string;
}
