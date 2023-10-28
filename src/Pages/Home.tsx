import MoviePoster from '../Assets/movieposter.png';
import HomeCarousel from "../Components/HomeCarousel";
import HomeMovieCard from "../Components/HomeMovieCard";
import Navbar from "../Components/Navbar";
function Home() {
    return (
        <>
            <Navbar />
            <HomeCarousel />

            <div className="mt-8 flex justify-center items-center gap-10">
                <HomeMovieCard movieImage={MoviePoster} />
                <HomeMovieCard movieImage={MoviePoster} />
                <HomeMovieCard movieImage={MoviePoster} />
                <HomeMovieCard movieImage={MoviePoster} />

            </div>
            Home
        </>
    );
}

export default Home;