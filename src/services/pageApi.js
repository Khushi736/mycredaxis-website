import apiClient from './apiClient';

export const getHomePageData = async () => {
    try {
        const response = await apiClient.get('/website/pages/home');
        if (response.success) {
            return response.data;
        } else {
            throw new Error(response.message || "Data fetch failed"); 
        }
    } catch (error) {
        console.error("Home page API error:", error);
        throw error;
    }
};
