import { MdFastfood } from "react-icons/md";
import { PiDeviceMobileBold } from "react-icons/pi";
function TheatreNameCard() {
    return (
        <div className="flex flex-col items-start justify-center font-semibold px-4 py-2">
            <div>
                Cinepolis: Seasons Mall, Pune
            </div>

            <div className="flex gap-8 items-center justify-around mt-3">

                <div className="text-green-500 font-light">
                    <PiDeviceMobileBold className="inline text-2xl " /> M-Ticket
                </div>

                <div className="text-amber-500 font-light">
                    <MdFastfood className="inline text-2xl"/> Food & Beverages
                </div>

            </div>
        </div>
    );
}

export default TheatreNameCard;