import React from 'react';

const Footer = () => {
    return (

        <footer className="footer p-10 bg-black text-white md:px-[150px]">
            <div>
                <a className="btn btn-ghost normal-case text-[26px]"><span className='font-semibold'>Bdtask</span> <span className='font-black text-[#16994A]'>Media</span></a>
                <p>Custom software development conveys “personalizing it <br /> specifically only for that dedicated entrepreneur or <br /> organization”. Creating, building.</p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <ul className="list-disc pl-4">
                    <li><a className="link link-hover">About Us</a></li>
                    <li><a className="link link-hover">Blogs</a></li>
                    <li><a className="link link-hover">Careers</a></li>
                    <li><a className="link link-hover">Contact</a></li>
                </ul>
            </div>
            <div>
                <span className="footer-title">Resources</span>
                <ul className="list-disc pl-4">
                    <li><a className="link link-hover">Downloads</a></li>
                    <li><a className="link link-hover">Help Center</a></li>
                    <li><a className="link link-hover">Partners</a></li>
                    <li><a className="link link-hover">Press Kits</a></li>
                </ul>
            </div>
            <div>
                <span className="footer-title">Social Media </span>
                <ul className="list-disc pl-4">
                    <li><a className="link link-hover">Facebook</a></li>
                    <li><a className="link link-hover">Twitter</a></li>
                    <li><a className="link link-hover">Instagram</a></li>
                    <li><a className="link link-hover">LinkedIn</a></li>
                </ul>
            </div>


        </footer>
    );
};

export default Footer;