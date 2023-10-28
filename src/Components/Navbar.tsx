
import DummyProfileImage from '../Assets/dummyprofile.png';
import Logo from '../Assets/logo.png';
function Navbar() {

    return (
        <div className="bg-[#333545]">
            <div className="navbar bg-[#333545] w-[80vw] mx-auto">
            <div className="flex-1">
                <div className='h-12 mr-8'>
                    <img className="h-[100%] w-36" src={Logo} />
                </div>
                <div className="form-control w-3/5">
                    <input type="text" placeholder="Search" className="input input-bordered md:w-auto" />
                </div>
            </div>
            <div className="flex-none gap-2">
                
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src={DummyProfileImage} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm text-white dropdown-content bg-[#333545] rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        
    );
}


export default Navbar;