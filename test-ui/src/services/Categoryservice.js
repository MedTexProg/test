import axios from './axios'; // Adjust the path based on your project structure

const API_BASE_URL = '/api/categories'; // Adjust the base URL based on your backend API structure

const categoryService = {
    addCategory: async (categoryDto) => {
        try {
            const response = await axios.post(API_BASE_URL, categoryDto);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getCategory: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllCategories: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateCategory: async (categoryDto, id) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}`, categoryDto);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteCategory: async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    enableCategory: async (id) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/${id}/enable`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default categoryService;
