import { useEffect, useState } from 'react';

import IccBannerImage from '../Assets/iccbanner.avif';
import MoviePoster from '../Assets/movieposter.png';
import HomeBanner from '../Components/HomeBanner';
import HomeCarousel from "../Components/HomeCarousel";
import HomeMovieCard from "../Components/HomeMovieCard";
import axiosInstance from '../Config/AxiosInstance';
import HomeLayout from '../Layouts/HomeLayout';
import Movie from '../Types/Movie';

type MoviePoster = [{
    id: string,
    poster: string
}];

function Home() {

    const [moviePosters, setMoviePosters] = useState<MoviePoster>([{id: "", poster: ""}]);

    async function fetchMovies() {
        try {
            const response = await axiosInstance.get("/mba/api/v1/movies");
            const movieData = response.data.data.map((movie: Movie) => {
                return {
                    id: movie._id,
                    poster: movie.poster
                };
            });
            console.log(movieData);
            setMoviePosters(movieData);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <HomeLayout>
            
            <HomeCarousel />
            <div className="min-h-[66rem] w-[80vw] mx-auto flex flex-col">
                <HomeBanner image={IccBannerImage} />
                <div className='text-2xl font-semibold text-black mt-4'>
                    Recommended Movies
                </div>
                <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-4">
                    {
                        moviePosters && moviePosters.map((moviePoster) => {
                            return <HomeMovieCard key={moviePoster.id} movieImage={moviePoster.poster} />;
                        })
                    }
                   
                </div>

                <HomeBanner image={IccBannerImage} />
            </div>

            
            
        </HomeLayout>
    );
}

export default Home;