import axios from "axios";
import { API_BASE_URL } from "../../helpers/api/api.consts";

export interface IMakeReservationParams {
    vehicleId: string;
}

const makeReservationUrl = `${API_BASE_URL}/todoUrl`;

export const makeReservationRequest = async (params: IMakeReservationParams) => {
    try {
        const response = await axios.post(makeReservationUrl, params);
        // TODO handle response
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
