import axios from "axios";
import { API_PERSONIL_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getPersonilRequest = async ({ filter = '' }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_PERSONIL_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.personil;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getPersonilDetailRequest = async ({ id }) => {
    const user = getLocalUser();
    let append = `/${id}`;
    try {
        const response = await axios.get(`${API_PERSONIL_GET}${append}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.personil;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}