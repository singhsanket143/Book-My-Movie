import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import processSeatConfig from "../Utils/ProcessSeatConfig";

type Seat = {
    number: number,
    status: number
}

type Row = {
    number: string,
    seats: [Seat]
}

type SeatState = [Row];

function SeatConfig() {

    const {state} = useLocation();

    const [seats, setSeats] = useState<SeatState>([{number: "", seats: [{number: 0, status: 0}]}]);

    useEffect(() => {
        const seatsConfigJson = processSeatConfig(state.config);
        console.log(seatsConfigJson);
        setSeats(seatsConfigJson.rows);
    }, []);
    return (
        <HomeLayout>
         config
         {seats.length}
        </HomeLayout>
    );
}

export default SeatConfig;