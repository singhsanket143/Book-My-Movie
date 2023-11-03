
import HomeFooter from "../Components/HomeFooter";
import Navbar from "../Components/Navbar";
import ReactNode from "../Types/ReactNode";


function HomeLayout({ children } : {children: ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
            <HomeFooter />
        </>
    );
}

export default HomeLayout;  