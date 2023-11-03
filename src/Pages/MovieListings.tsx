import TheatreShowCard from "../Components/TheatreShowCard";
import HomeLayout from "../Layouts/HomeLayout";
function MovieListings() {
    return (
        <HomeLayout>

            <div className="min-h-[80-vh] bg-slate-300">
                <div className="bg-[#333545] text-white">
                    <div className="font-light text-7xl pt-8 pb-6 w-[80vw] mx-auto">
                        12th Fail


                        <div className="flex gap-3 mt-6">
                            <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Drama</button>
                            <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Biography</button>
                        </div>
                    </div>
                </div>


                {/* Theatre listing */}

                <div className="bg-slate-300 mt-4 w-[100vw]">
                    <div className="w-[80vw] mx-auto rounded-xl bg-[#FFFFFF]">
                        <TheatreShowCard num={8}/>
                        <TheatreShowCard num={7}/>
                        <TheatreShowCard num={14}/>
                        <TheatreShowCard num={1}/>
                    </div>
                    
                </div>
            </div>
           
            
        </HomeLayout>
    );
}

export default MovieListings;