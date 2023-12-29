import express, { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { BikeModule } from "./bike/bike.module.js";

export class AppModule {
    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeModules();
    }

    initializeMiddlewares() {
        this.app.use(json());
        this.app.use(cors({origin: true, credentials: true}));
        this.app.use(bodyParser.urlencoded());
    }

    initializeModules() {
        const authModule = new BikeModule();

        this.app.use("/bike", authModule.getRouter());
    }

    getApp() {
        return this.app;
    }
}
