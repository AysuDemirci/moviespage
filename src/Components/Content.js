import React, { useState } from "react";

export default function Content(props) {
  const { data, movies, series } = props;
  const [activeId, setActiveId] = useState(null);

  function handleMouseEnter(id) {
    setActiveId(id);
  }
  function handleMouseLeave() {
    setActiveId(null);
  }
  return (
    <div className="pt-5 bg-machine-darkgray">
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-3/4 ">
          <div className="flex space-x-2  mb-8  pl-10  lg:pl-0">
            <h2 className="text-machine-grey p-2  lg:text-2xl hover:bg-machine-red duration-200 uppercase font-gemunu rounded">
              <button href="/">Latest</button>
            </h2>
            <h2 className="text-machine-grey p-2 lg:text-2xl hover:bg-machine-red duration-200 uppercase font-gemunu rounded">
              <button href="/">Popular</button>
            </h2>
            <h2 className="text-machine-grey p-2 lg:text-2xl  hover:bg-machine-red duration-200 uppercase font-gemunu rounded">
              <button href="/">Best</button>
            </h2>
          </div>
          <div className="flex flex-wrap ">
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/2 flex flex-wrap md:-m-2">
              {movies.map((m) => (
                <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/2 p-1 md:p-2">
                  <img
                    src={m.image}
                    alt={m.name}
                    className={` mx-auto h-full object-cover object-center ${
                      activeId === m.id
                        ? "group-hover:scale-110 group-hover:opacity-50 duration-500 "
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(m.id)}
                    onMouseLeave={handleMouseLeave}
                  ></img>
                  <div className="absolute px-6 bottom-8  ">
                    <h3 className="text-machine-grey group-hover:text-machine-melon group-hover:mb-3 duration-500" >
                      {activeId === m.id && m.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/3 pl-10 lg:pl-0">
          <h2 className="text-machine-grey mb-8">Choose Movie</h2>
        </div>
      </div>
    </div>
  );
}

