
import Navbar from "../Components/Navbar";
import ReactNode from "../Types/ReactNode";


function HomeLayout({ children } : {children: ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default HomeLayout;  