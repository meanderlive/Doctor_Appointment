import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

export const createMedicine = async (values) => {
    try {
        const res = await axios.post(`${BASE_URL}medicineSchedule/`, values);
        return res
    } catch (error) {
        throw error
    }
}

export const getAllMedicineApi = async () => {
    try {
        const res = await axios.get(`${BASE_URL}medicineSchedule/`);
        return res
    } catch (error) {
        throw error
    }
}

export const removeMedicineApi = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}medicineSchedule/${id}`);
        return res
    } catch (error) {
        throw error
    }
}




