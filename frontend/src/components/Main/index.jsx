import { useState, useEffect } from "react";
import BikeList from "./components/BikeList";
import classes from "./index.module.css";
import BikeForm from "./components/BikeForm";
import Stats from "./components/Statistic";
import { bikeService } from "../../services/bike.service";

const Main = () => {
    const [bikes, setBikes] = useState([]);
    const { getBikes, addBike, deleteBike, updateBikeStatus } = bikeService;

    const fetchBikes = () => {
        getBikes().then((data) => setBikes(data));
    };

    const handleSave = (formData) => {
        addBike(formData).then(() => getBikes().then((data) => setBikes(data)));
    };

    const handleDelete = (bikeId) => {
        const isSuccess = deleteBike(bikeId).then((data) => data);
        if (isSuccess) {
            const updatedBikes = bikes.filter((bike) => bike.id !== bikeId);
            setBikes(updatedBikes);
        }
    };

    const handleUpdateStatus = (bikeId, newStatus) => {
        const updatedBike = updateBikeStatus(bikeId, newStatus).then(data => data);
        setBikes((prevBikes) =>
            prevBikes.map((bike) =>
                bike.id === updatedBike.id
                    ? { ...bike, status: updatedBike.status }
                    : bike
            )
        );
    };

    useEffect(() => {
        fetchBikes();
    }, []);

    return (
        <main className={classes.main}>
            <div className={classes.area1}>
                <BikeList
                    bikes={bikes}
                    onDelete={handleDelete}
                    onUpdateStatus={handleUpdateStatus}
                />
            </div>
            <div className={classes.area2}>
                <BikeForm onSave={handleSave} />
            </div>
            <div>
                <Stats bikes={bikes} />
            </div>
        </main>
    );
};

export default Main;
