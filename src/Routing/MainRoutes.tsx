import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import MovieListings from "../Pages/MovieListings";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/listing" element={<MovieListings />} />
        </Routes>
    );
}

export default MainRoutes;