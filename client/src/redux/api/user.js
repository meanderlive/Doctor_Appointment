import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

export const createUserApi = async (values) => {
    try {
        const res = await axios.post(`${BASE_URL}auth/register`, values);
        return res
    } catch (error) {
        throw error
    }
}

export const loginUserApi = async (values) => {
    try {
        const res = await axios.post(`${BASE_URL}auth/login`, values);
        return res
    } catch (error) {
        throw error
    }
}



