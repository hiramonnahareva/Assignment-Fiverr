

import { useState } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    
    const navData = [

        {
            id: 1,
            title: "Features",
            url: "/features",

        },
        {
            id: 2,
            title: "Experiences",
            url: "/experiences",

        },

    ]
    

    const [click, setClick] = useState(false)

    // const link = navData.map(([id, title, url]) => (
    //     <li className="navlink" key={id}><Link to={url}>{title}</Link></li>
    // ) )

    const link = navData.map(({ id, title, url }) => (
        <li className="navlink" key={id}><Link to={url}>{title}</Link></li>
      ));
   
    return (
        
       
      
        <div className="relative px-16 py-2 bg-gray-300 z-20 text-black">
           <nav className="flex justify-between items-center">
           <h2 className="text-2xl">DEW</h2>
           <ul className="lg:flex items-center justify-center gap-6  text-[18px] hidden">
            {link}
            <button className="bg-white my-0 text-black hover:bg-gray-400">Login</button>
            <button className="my-0">Signin</button>
           </ul>

           {/* --------- mobile ----------- */}

           <div onClick={() => setClick(!click)} className="lg:hidden " >
            <div className="flex flex-col gap-2 absolute top-3 z-50">
                <div className={`${click && 'absolute top-1 rotate-45'} menubar w-6`}></div>
                <div className={`${click && 'hidden'} menubar w-4`}></div>
                <div className={`${click && 'absolute top-1 -rotate-45'} menubar w-6`}></div>
            </div>
            <div className={`${click ? 'w-60% visible' : 'invisible'}`}>
                <ul className= {`flex flex-col gap-6 text-[18px] bg-gray-200 text-black transition-all h-[100vh]  ${click ? 'w-[80%] translate-x-0' : 'translate-x-full' } duration-700 top-0 bottom-0 right-0 z-20 fixed p-20`}>
                    {link}

                    <button className="bg-white my-0 text-black hover:bg-gray-400 ">Login</button>
                    <button className="my-0">Signin</button>

                </ul>
            </div>
           </div>
           </nav>
        </div>
    );
};

export default Header;