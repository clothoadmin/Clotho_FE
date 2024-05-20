import axios from "axios";

const wishlistUrl='http://localhost:8090/api/wishlist';

export const getWishlistItemByUserId = async (userId) => {
    try {
        const response = await axios.get(`${wishlistUrl}/items/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching wishlist item:', error.message);
        throw error;
    }
};

export const addWishlistItem = async (userId,productId) => {
    const wishlistItem={
        userId:userId,
        productId:productId
    }
    try {
        const response = await axios.post(`${wishlistUrl}/addItem`, wishlistItem);
        return response;
    } catch (error) {
        console.error('Error adding wishlist item:', error.message);
        throw error;
    }
};

export const deleteWishlistItem = async (itemId) => {
    try {
        await axios.delete(`${wishlistUrl}/items/${itemId}`);
    } catch (error) {
        console.error('Error deleting wishlist item:', error.message);
        throw error;
    }
};