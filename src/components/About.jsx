// import { about1, about2 } from "../images";

import img from '../assets/banner.jpg'


const About = () => {
    return (
        <div id='about' className="lg:flex gap-20 items-center lg:mx-40 my-40 m-[20px]">
            <div className="flex gap-4">
                <div><img src={img} className="h-[300px] w-56 rounded-[20px]" alt="" /></div>
                <div><img src={img} className="h-[300px] w-56 rounded-[20px]" alt="" /></div>
            </div>
            <div className="lg:flex-1 w-full mx-auto justify-center">
                <h2 className="title my-[20px]">About us</h2>
                <p className="mb-[20px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, tempora eveniet illum aspernatur qui assumenda eaque optio esse.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, tempora eveniet illum aspernatur qui assumenda eaque optio esse.</p>
                <button>About us</button>
            </div>
        </div>
    );
};

export default About;