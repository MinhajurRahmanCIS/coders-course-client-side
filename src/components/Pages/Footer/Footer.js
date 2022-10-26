import React from 'react';
import { AiFillCopyrightCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Footer = () => {
    return (
        <div className="text-light bg-dark mt-5 p-5 text-center">
            <h4 ><AiFillCopyrightCircle></AiFillCopyrightCircle> Copy Right 2022</h4>
            <p><ImLocation> </ImLocation> Dhaka, Bangladesh</p>
        </div>
    );
};

export default Footer;