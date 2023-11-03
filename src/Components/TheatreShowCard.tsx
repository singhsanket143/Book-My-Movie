import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";

import ShowTimingCard from "./ShowTimingCard";
import TheatreNameCard from "./TheatreNameCard";

function TheatreShowCard({ num } : {num: number}) {
    return (
        <div className="w-full border-md  px-4 pt-4 pb-2">
            <div className="flex justify-start items-start">

                <div className="max-w-[3%] text-2xl mt-2">
                    <AiOutlineHeart />
                </div>

                <div className="min-w-[30%] max-w-[45%]">
                    <TheatreNameCard />
                </div>

                <div className="min-w-[6%] max-w-[10%] font-light">
                    <AiOutlineInfoCircle className="inline" /> 
                    <span className="text-sm">{" "}INFO</span>
                </div>

                <div className="ml-4 w-auto flex items-center justify-start flex-wrap">
                    {Array(num).fill(0).map(() => {
                        return <ShowTimingCard />;
                    })}
                    
                </div>
            </div>

            <div className="divider"></div> 
            
        </div>  
    );
}

export default TheatreShowCard;