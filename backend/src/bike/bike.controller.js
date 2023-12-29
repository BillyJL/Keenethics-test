import BikeService from "./bike.service.js";

export class BikeController {
    constructor() {
        this.bikeService = new BikeService();
    }

    async addBike(req, res) {
        try {
            const bikeData = req.body;
            const newBike = await this.bikeService.addBike(bikeData);
            res.status(201).json(newBike);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getBikes(req, res) {
        try {
            const bikes = await this.bikeService.getBikes();
            res.status(200).json(bikes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async updateBikeStatus(req, res) {
        try {
            const { bikeId, newStatus } = req.params;
            const updatedBike = await this.bikeService.updateBikeStatus(
                bikeId,
                newStatus
            );
            res.status(200).json(updatedBike);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async removeBike(req, res) {
        try {
            const { bikeId } = req.params;
            await this.bikeService.removeBike(bikeId);
            res.status(204).end();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getBikeStats(req, res) {
        try {
            const bikeStats = await this.bikeService.getBikeStats();
            res.status(200).json(bikeStats);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
