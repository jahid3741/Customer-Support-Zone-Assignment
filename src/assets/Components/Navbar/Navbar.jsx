import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            
            <div className="flex-1">
                <a className=" font-bold text-2xl ml-5">CS — Ticket System</a>
            </div>

            <div className="flex-none">
                
                <ul className="menu menu-horizontal px-1 text-black hidden lg:flex">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li>
                        <button className='btn !bg-gradient-to-r !from-[#632EE3] !to-[#9F62F2] text-white border-0'>
                            + New Ticket
                        </button>
                    </li>
                </ul>

                <div className="dropdown dropdown-end lg:hidden">
                    
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li>
                            <button className='btn w-full mt-2 !bg-gradient-to-r !from-[#632EE3] !to-[#9F62F2] text-white border-0'>
                                + New Ticket
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;