import React from "react";

const Navbar = () => {
    return(
        <div className="navBar flex justify-between items-center p-[3rem]">
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>Pencarian</strong>Kerja</h1>
                    
            </div>

                <div className="menu flex gap-8">
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Perusahaan</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
                    <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
                    
                </div>

            </div>
    )
}

export default Navbar