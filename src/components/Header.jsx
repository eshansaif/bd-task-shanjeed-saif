import React, { useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    console.log(user);

    // Firebase google login

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {

                const loggedInUser = result.user;
                setUser(loggedInUser);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    // Logout


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null); // Reset user state to null
                console.log("Logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            })
    }




    const navMenu = <>
        <li className="text-[16px] font-semibold"><a>Home</a></li>
        <li className="text-[16px] font-semibold"><a>Services</a></li>
        <li className="text-[16px] font-semibold"><a>Portfolio</a></li>
        <li className="text-[16px] font-semibold"><a>Clients</a></li>
        <li className="text-[16px] font-semibold"><a>Review</a></li>
        <li className="text-[16px] font-semibold">
            {/* <button className="bg-[#00A653] ">+ 888 999 000 111</button> */}
            <button className="bg-[#00A653] hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center rounded-full">
                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>+ 888 999 000 111</span>
            </button>
        </li>
    </>
    return (
        <div className='relative'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(top-bg.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="navbar md:px-[150px] mt-0 text-white fixed w-full top-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navMenu}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-[26px]"><span className='font-semibold'>Bdtask</span> <span className='font-black text-[#16994A]'>Media</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navMenu}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {user ? (
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                            </>
                        ) : (
                            <button onClick={handleGoogleLogin} className="btn bg-[#00A653]">Login</button>
                        )}
                    </div>

                </div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl">
                        <h1 className="mb-5 text-[18px] md:text-[25px] font-extrabold">Bdtask Media</h1>
                        <p className="mb-5 text-[36px] md:text-[50px] font-extrabold">Digital Content, Animation & Video Editing Service Provider in Bangladesh.</p>
                        <button className="btn btn-primary bg-[#16994A] mr-4">HIRE US NOW</button>
                        <button className="btn btn-outline text-white">CONTACT US</button>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-center items-center absolute top-3/4 left-72'>
                <img className="mx-auto md:h-[450px]" src="second-top-bg.png" alt="" />
            </div> */}
        </div>
    );
};

export default Header;