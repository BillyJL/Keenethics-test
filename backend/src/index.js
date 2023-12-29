import mongoose from "mongoose";
import { AppModule } from "./app.module.js";

const app = new AppModule().getApp();
const PORT = process.env.PORT || 5000;

mongoose
    .connect("mongodb+srv://tarasmikulskii:YMThahyA1nU2UXmj@cluster0.n5cwve4.mongodb.net")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
