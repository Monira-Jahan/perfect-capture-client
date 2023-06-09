import { Link } from "react-router-dom";
const Header = () => {

    const navOptions = <>
        <li><Link to="/" className="font-bold"> Home</Link></li>
        <li><Link className="font-bold">Instructors</Link></li>
        <li><Link className="font-bold"> Classes</Link></li>
        <li><Link className="font-bold"> Dashboard</Link></li>
        
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-10 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navOptions}
                    </ul>
                </div>
                <div>
                    <img className="-pt-2" src="https://i.ibb.co/qJKw5qQ/Untitled-3.png" alt=""/>
            
                </div>
                </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn mr-4">Button</a>
            </div>
        </div>
    );
};

export default Header;