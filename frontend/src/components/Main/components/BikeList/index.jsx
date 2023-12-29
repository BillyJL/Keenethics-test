import BikeCard from "./components/BikeCard";

import classes from "./index.module.css";

const BikeList = ({ bikes, onDelete, onUpdateStatus }) => {
    return (
        <div className={classes.list}>
            {bikes.map((bike) => (
                <BikeCard
                    key={bike.id}
                    bike={bike}
                    onDelete={onDelete}
                    onUpdateStatus={onUpdateStatus}
                />
            ))}
        </div>
    );
};

export default BikeList;
