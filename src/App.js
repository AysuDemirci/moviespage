import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Content from "./Components/Content";

export default function App() {
  const Movies = [
    {
      id: 0,
      name: "Believer 2",
      mini: "Action,Crime",
      content:
        "The sequel follows Won-ho's investigation of looking for Rak, who disappeared after Brian's incarceration, while getting to the core of the elusive drug cartel.",
      image: "/images/movies/Believer2.jpeg",
    },
    {
      id: 1,
      name: "Cruella",
      mini: "Comedy,Crime",
      content:
        "Cruella tells the story of Estella, a talented girl and young con artist who tries to make a name for herself with her designs.",
      image: "/images/movies/Cruella.jpeg",
    },
    {
      id: 2,
      name: "Entergalactic",
      mini: "Romantic,Comedy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/movies/Entergalactic.jpeg",
    },
    {
      id: 3,
      name: "Free Guy",
      mini: "Comedy,Action",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/movies/GerçekKahraman.jpg",
    },
    {
      id: 4,
      name: "My Fault",
      mini: "Romantic,Drama",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/movies/MyFault.jpeg",
    },
    {
      id: 5,
      name: "Nowhere",
      mini: "Romantic,Thriller",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/movies/Nowhere.jpeg",
    },
    {
      id: 6,
      name: "Operation Fortune",
      mini: "Action,Comedy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/movies/OperationFortune.jpeg",
    },
    {
      id: 7,
      name: "Oppenheimer",
      mini: "Thriller",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/movies/Oppenheimer.jpeg",
    },
  ];

  const Series = [
    {
      id: 8,
      name: "ConversationsWithFriends",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/Conversatons With Friends.jpeg",
    },
    {
      id: 9,
      name: "Fastest Car",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/fastestcar.jpg",
    },
    {
      id: 10,
      name: "Gen V",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/genV.jpg",
    },
    {
      id: 11,
      name: "Julie And The Phantoms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/JulieAndThe.jpeg",
    },
    {
      id: 12,
      name: "Love Death Robots",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/LoveDeathRobots.jpeg",
    },
    {
      id: 13,
      name: "Magarsus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/Magarsus.jpg",
    },
    {
      id: 14,
      name: "Narcos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/Narcos.jpeg",
    },
    {
      id: 15,
      name: "The Queen of Gambit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/images/series/TheQueenofGambit.jpeg",
    },
  ];

  const combineArrays = Movies.concat(Series);

  return (
    <div className="bg-black">
      <Navbar />
      <Carousel movies={Movies} />
  
      <Content data={combineArrays} movies={Movies} series={Series}/>
    </div>
  );
}
