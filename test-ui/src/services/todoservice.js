import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8080/api/properties';

// export function getAllProperties() {
//     return axios.get(BASE_REST_API_URL);
// }

export const getAllProperties = () => axios.get(BASE_REST_API_URL)

export const addProperty = (property) => axios.post(BASE_REST_API_URL, property)