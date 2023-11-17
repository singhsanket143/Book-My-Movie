import { useLocation, useNavigate } from "react-router-dom";

import axiosInstance from "../Config/AxiosInstance";
import HomeLayout from "../Layouts/HomeLayout";

function Bookings() {


    const {state} = useLocation();
    const navigate = useNavigate();

    async function makePayment() {
        const response = await axiosInstance.post("/mba/api/v1/payments", {
            showId: state.showId,
            bookingId: state.booking.data._id,
            amount: state.booking.data.totalCost
        }, {
            headers: {
                'x-access-token': import.meta.env.VITE_ACCESS_TOKEN
            }
        });
        if(response.data.success) {
            navigate("/");
        }
    }

    return (
        <HomeLayout>
            <div>{state.booking.data.theatreId.name}</div>
            <div>{state.booking.data.totalCost}</div>
            <div>{state.booking.data._id}</div>
            <div>{state.showId}</div>

            <button onClick={makePayment} className="btn-primary px-2 py-1">Make Payment</button>
        </HomeLayout>
    );
}

export default Bookings;