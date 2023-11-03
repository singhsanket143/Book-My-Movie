import HomeLayout from "../Layouts/HomeLayout";

function MovieListings() {
    return (
        <HomeLayout>
            <div className="bg-[#333545] text-white">
                <div className="font-light text-7xl pt-8 pb-6 w-[80vw] mx-auto">
                    12th Fail


                    <div className="flex gap-3 mt-6">
                        <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Drama</button>
                        <button className="btn btn-xs text-sm border-2 border-white bg-transparent text-white hover:bg-transparent">Biography</button>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default MovieListings;