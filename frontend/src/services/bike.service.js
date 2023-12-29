const BASE_URL = "http://localhost:5000/bike";

export const bikeService = {
    getBikes: async () => {
        try {
            const response = await fetch(BASE_URL, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const bikes = await response.json();
            return bikes;
        } catch (error) {
            console.error("Error fetching bikes:", error);
        }
    },

    addBike: async (bikeData) => {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bikeData),
            });
            const newBike = await response.json();
            return newBike;
        } catch (error) {
            console.error("Error adding bike:", error);
        }
    },

    updateBikeStatus: async (bikeId, newStatus) => {
        try {
            const response = await fetch(`${BASE_URL}/${bikeId}/${newStatus}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const updatedBike = await response.json();
            return updatedBike;
        } catch (error) {
            console.error("Error updating bike status:", error);
        }
    },

    deleteBike: async (bikeId) => {
        try {
            const response = await fetch(`${BASE_URL}/${bikeId}`, {
                method: "DELETE",
            });
            return response.ok;
        } catch (error) {
            console.error("Error deleting bike:", error);
        }
    },

    getStats: async () => {
        try {
            const response = await fetch(`${BASE_URL}/stats`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const stats = await response.json();
            return stats;
        } catch (error) {
            console.error("Error fetching stats:", error);
        }
    },
};
