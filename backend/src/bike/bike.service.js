import BikeModel from "./bike.model.js";

class BikeService {
    async addBike(bikeData) {
        const bike = new BikeModel(bikeData);
        await bike.save();
        return bike;
    }

    async getBikes() {
        return BikeModel.find();
    }

    async updateBikeStatus(bikeId, newStatus) {
        return BikeModel.findOneAndUpdate(
            { id: bikeId },
            { status: newStatus },
            { new: true }
        );
    }

    async removeBike(bikeId) {
        return BikeModel.findOneAndDelete({ id: bikeId });
    }

    async getBikeStats() {
        const totalBikes = await BikeModel.countDocuments();
        const availableBikes = await BikeModel.countDocuments({
            status: "available",
        });
        const busyBikes = await BikeModel.countDocuments({ status: "busy" });
        const averagePrice = await BikeModel.aggregate([
            { $group: { _id: null, averagePrice: { $avg: "$price" } } },
        ]);
        return {
            totalBikes,
            availableBikes,
            busyBikes,
            averagePrice: averagePrice.length
                ? averagePrice[0].averagePrice
                : 0,
        };
    }
}

export default BikeService;
