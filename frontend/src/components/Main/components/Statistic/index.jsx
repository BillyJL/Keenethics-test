import { useEffect, useState } from "react";
import { bikeService } from "../../../../services/bike.service";
import classes from "./index.module.css";

const Stats = ({ bikes }) => {
    const [statistic, setStatistic] = useState({});
    const { getStats } = bikeService;

    const fetchStat = () => {
        getStats().then((data) => {
            setStatistic(data);
        });
    };

    useEffect(() => {
        fetchStat();
    }, [bikes]);

    return (
        <>
            <p className={classes.name}>Statistic</p>
            <p>
                Total Bikes: <b>{statistic.totalBikes}</b>
            </p>
            <p>
                Alible Bikes: <b>{statistic.availableBikes}</b>
            </p>
            <p>
                Booked Bikes: <b>{statistic.busyBikes}</b>
            </p>
            <p>
                Average bike cost: <b>{statistic.averagePrice}</b> UAH/hr.
            </p>
        </>
    );
};

export default Stats;
