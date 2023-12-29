import { useState } from "react";
import classes from "./index.module.css";

const BikeCard = ({ bike, onDelete, onUpdateStatus }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [localBikeStatus, setLocalBikeStatus] = useState(bike.status);

    const handleStatusChange = (newStatus) => {
        setShowDropdown(false);
        setLocalBikeStatus(newStatus);
        onUpdateStatus(bike.id, newStatus);
    };

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={`${classes.card} ${classes[localBikeStatus]}`}>
            <span
                className={classes.deleteButton}
                onClick={() => onDelete(bike.id)}
            >
                &#10006;
            </span>
            <span className={classes.name}>{bike.name} </span>
            <span className={classes.type}>
                - {bike.type} ({bike.color})
            </span>
            <p className={classes.id}>id: {bike.id}</p>
            <div className={classes.lastRow}>
                <p>
                    Status:
                    <span className={classes.statusContainer}>
                        <span
                            className={`${classes.statusDropdown} ${
                                showDropdown ? classes.open : ""
                            }`}
                            onClick={handleToggleDropdown}
                        >
                            {localBikeStatus}
                        </span>
                        {showDropdown && (
                            <div className={classes.dropdownContent}>
                                <div
                                    onClick={() =>
                                        handleStatusChange("available")
                                    }
                                >
                                    available
                                </div>
                                <div onClick={() => handleStatusChange("busy")}>
                                    busy
                                </div>
                                <div
                                    onClick={() =>
                                        handleStatusChange("unavailable")
                                    }
                                >
                                    unavailable
                                </div>
                            </div>
                        )}
                    </span>
                </p>
                <p className={classes.price}>{bike.price} UAH/hr.</p>
            </div>
        </div>
    );
};

export default BikeCard;
