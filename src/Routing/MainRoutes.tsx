import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import MovieListings from "../Pages/MovieListings";
import SeatConfig from "../Pages/SeatConfig";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/listing" element={<MovieListings />} />
            <Route path="/movie/seatSelection" element={<SeatConfig />} />
        </Routes>
    );
}

export default MainRoutes;