import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

export const createAppointmentApi = async (values) => {
    try {
        const res = await axios.post(`${BASE_URL}appointments/`, values);
        return res
    } catch (error) {
        throw error
    }
}

export const getAllAppointmentApi = async () => {
    try {
        const res = await axios.get(`${BASE_URL}appointments/`);
        return res
    } catch (error) {
        throw error
    }
}

export const removeAppointmentApi = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}appointments/${id}`);
        return res
    } catch (error) {
        throw error
    }
}

