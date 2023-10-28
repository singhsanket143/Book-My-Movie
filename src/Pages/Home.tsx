import IccBannerImage from '../Assets/iccbanner.avif';
import MoviePoster from '../Assets/movieposter.png';
import HomeBanner from '../Components/HomeBanner';
import HomeCarousel from "../Components/HomeCarousel";
import HomeFooter from '../Components/HomeFooter';
import HomeMovieCard from "../Components/HomeMovieCard";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <HomeCarousel />
            <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
                <HomeBanner image={IccBannerImage} />
                <div className='text-2xl font-semibold text-black mt-4'>
                    Recommended Movies
                </div>
                <div className="mt-8 flex justify-center items-center gap-4">
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />
                    <HomeMovieCard movieImage={MoviePoster} />


                </div>

                <HomeBanner image={IccBannerImage} />
            </div>

            <HomeFooter />
            
        </>
    );
}

export default Home;