import React, { useState } from "react";
import { FaPlay,FaChevronRight  } from "react-icons/fa";

export default function Content(props) {
  const { data, movies, series } = props;
  const [activeId, setActiveId] = useState(null);
  const[activeButtonId,setActiveButtonId]=useState(null)

  function handleMouseEnter(id) {
    setActiveId(id);
  }
  function handleMouseLeave() {
    setActiveId(null);
  }
  function handleOnclick(id){
    setActiveButtonId(id)
  }

  return (
    <div className="pt-5 bg-dark">
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-2/3 ">
          <div className="flex space-x-2  mb-5 mt-3  pl-2  lg:pl-2 border-b-2 border-machine-red ">
            <h2 className={`text-machine-grey p-2  lg:text-2xl hover:bg-machine-red duration-200 uppercase font-gemunu  ${
                      activeButtonId === 1
                        ? " bg-machine-red"
                        : ""
                    }`}>
              <button onClick={()=>handleOnclick(1)} >Latest</button>
            </h2>
            <h2 className={`text-machine-grey p-2  lg:text-2xl hover:bg-machine-red duration-200 uppercase font-gemunu  ${
                      activeButtonId === 2
                        ? "bg-machine-red "
                        : ""
                    }`}>
              <button onClick={()=>handleOnclick(2)}>Popular</button>
            </h2>
            <h2 className={`text-machine-grey p-2  lg:text-2xl hover:bg-machine-red duration-200 uppercase font-gemunu  ${
                      activeButtonId === 3
                        ? "bg-machine-red "
                        : ""
                    }`}>
              <button onClick={()=>handleOnclick(3)}>Best</button>
            </h2>
          </div>
          <div className="flex flex-wrap ">
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/3 lg:basis-full flex flex-wrap pl-1">
              {movies.map((m) => (
                <div key={m.id} className="flex  w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-1 md:p-2 relative overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className={` object-cover object-center ${
                      activeId === m.id
                        ? "group-hover:scale-110 group-hover:opacity-50 duration-500 "
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(m.id)}
                    onMouseLeave={handleMouseLeave}
                  ></img>
                  <div className="absolute px-6 bottom-8">
                    <h3 className="text-machine-grey group-hover:text-machine-melon group-hover:mb-3 duration-500" >
                      {activeId === m.id && m.name}
                    </h3>
                    <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-machine-grey">{activeId===m.id && m.content}</p>
                    <div className="absolute flex space-x-8 text-machine-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                      <a href="/" className="hover:text-machine-red duration-500">{activeId === m.id &&<FaPlay/>}</a>
                      <a href="/" className="hover:text-machine-red duration-500" >{activeId === m.id && <FaChevronRight/>} </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/3 pl-10 lg:pl-0 ">
          <h2 className="text-machine-grey mb-8">Choose Movie</h2>
        </div>
      </div>
    </div>
  );
}

