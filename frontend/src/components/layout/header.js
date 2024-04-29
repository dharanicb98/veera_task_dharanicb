import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavIcon } from "../../icons";

const Header = () => {
  let location = useLocation();
  const [icon, setIcon] = useState(false);

  // const renderNavBar = () => (
  //   <ul className="flex flex-col">

  //   </ul>
  // )

  return (
    <header className="bg-white h-[70px] w-[100%] z-[10] flex justify-around md:justify-between items-center md:px-[20px] fixed top-0 left-0 right-0 shadow-sm">
      <img
        // src="http://drive.google.com/uc?export=view&id=1AhdAxwH2BNlQTbBJCJAU4D8Evvo1c-ja"
        src="https://iconape.com/wp-content/files/hp/344898/svg/344898.svg"
        alt="Veera company logo"
        className="w-[100px] h-[40px] md:w-[250px] md:h-[60px]"
      />
      <div className="group relative nav-Icon">
        <NavIcon
          // onClick={(prev) => setIcon((prev) => !prev)}
          className=""
        />
        <div
          className={`absolute bg-white shadow-lg p-6 rounded-md flex flex-col  invisible group-hover:visible -left-[150px] w-[160px]`}
        >
          <NavLink to="/" className="text-black  hover:font-bold hover:text-md">
            Task 1
          </NavLink>
          <NavLink to="/task2" className="text-black hover:font-bold hover:text-md">
            Task 2
          </NavLink>
          <NavLink to="/task3" className="text-black hover:font-bold hover:text-md">
            Task 3
          </NavLink>
        </div>
      </div>

      <div className={`flex justify-around nav-bar-list`}>
        <NavLink to="/" className="text-black mr-4 hover:font-bold hover:text-md after:content-['task 1']">
          Web Serach Application
          {/* <span className="font-bold">{"("}Task 1{")"}</span> */}
        </NavLink>
        <NavLink to="/task2" className="text-black mr-4 hover:font-bold hover:text-md">
          Simple caculater
          {/* <span className="font-bold">{"("}Task 2{")"}</span> */}
        </NavLink>
        <NavLink to="/task3" className="text-black mr-4 hover:font-bold hover:text-md">
          Task 3
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
