import express from "express";
import bodyParser from "body-parser";
import { BikeController } from "./bike.controller.js";

export class BikeModule {
    constructor() {
        this.router = express.Router();
        this.bikeController = new BikeController();

        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    initializeMiddlewares() {
        this.router.use(bodyParser.json());
    }

    initializeRoutes() {
        this.router
            .route("/")
            .post((req, res) => this.bikeController.addBike(req, res))
            .get((req, res) => this.bikeController.getBikes(req, res));

        this.router
            .route("/:bikeId/:newStatus")
            .patch((req, res) =>
                this.bikeController.updateBikeStatus(req, res)
            );

        this.router
            .route("/:bikeId")
            .delete((req, res) => this.bikeController.removeBike(req, res));

        this.router.get("/stats", (req, res) =>
            this.bikeController.getBikeStats(req, res)
        );
    }

    getRouter() {
        return this.router;
    }
}
