import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";

import ShowTimingCard from "./ShowTimingCard";
import TheatreNameCard from "./TheatreNameCard";
type MovieShows = {
    id: string, // show id
    timing: string,
    format: string,
    price: number,
    noOfSeats: number,
    seatConfiguration: string
}

function formatTime(timeString: string) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

function TheatreShowCard({ name, shows } : {name: string, shows: [MovieShows]}) {
    return (
        <div className="w-full border-md  px-4 pt-4 pb-2">
            <div className="flex justify-start items-start">

                <div className="max-w-[3%] text-2xl mt-2">
                    <AiOutlineHeart />
                </div>

                <div className="min-w-[30%] max-w-[45%]">
                    <TheatreNameCard name={name} />
                </div>

                <div className="min-w-[6%] max-w-[10%] font-light">
                    <AiOutlineInfoCircle className="inline" /> 
                    <span className="text-sm">{" "}INFO</span>
                </div>

                <div className="ml-4 w-auto flex items-center justify-start flex-wrap">
                    {shows.map((show : MovieShows) => {
                        return <ShowTimingCard config={show.seatConfiguration} format={show.format} price={show.price.toString()} timing={formatTime((new Date(show.timing).toLocaleTimeString()))} key={show.id} />;
                    })}
                    
                </div>
            </div>

            <div className="divider"></div> 
            
        </div>  
    );
}

export default TheatreShowCard;