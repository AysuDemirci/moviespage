import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaPlay,FaChevronRight  } from "react-icons/fa";
export default function Carousel(props) {
const{movies}=props

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {url:"https://www.critifan.com/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fxocino2wPmdSpXN5SGZWBYtVlSc.jpg&w=1920&q=75"},
    {url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32FE39BDFA7CA19E92520D094F5B9E3443FD537E0A4ABB48FE40711E02EAA6E4/scale?width=1200&aspectRatio=1.78&format=jpeg"},
    {url:"https://images6.alphacoders.com/132/1321794.jpeg"},
    {url:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2FA5695A9D10CD3FF378BFE434E618C630B5728AEF36E3D5122A29624741F92B/scale?width=1200&aspectRatio=1.78&format=jpeg"},
    {url: "https://m.media-amazon.com/images/S/pv-target-images/53f488f85c40db545c226eec34baa50ab40ce653e0ab0ef95b1caa9286b6203f.png"},
    {url:"https://img.chip.com.tr/storage/files/images/2023/10/11/a333-ac8q.jpg"},
    {url:"https://cdn.theplaylist.net/wp-content/uploads/2016/04/13142105/Operation-Fortune-Ruse-de-guerre-.jpg"},
    {url:"https://multiversonoticias.com.br/wp-content/uploads/2023/05/Oppenheimer.jpg"},
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  

  return (
    <div className='h-[450px]  lg:h-[570px] m-auto relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
        className='w-full h-full bg-center bg-cover object-scale-down duration-500  '
      ></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black ">
<div className="container pl-10 lg:pl-5 ">
  {movies.map((a)=>(
    <h3 className=" lg:text-xl text-machine-melon tracking-wider group-hover:mb-1 duration-200 uppercase font-gemunu">{currentIndex===a.id&&(a.mini)}</h3>
    
  ))}
  {movies.map((a)=>(
    <h1 className="text-4xl lg:text-6xl text-machine-red group-hover:mb-1 duration-200 uppercase font-gemunu">{currentIndex===a.id&&(a.name)}</h1>
    
  ))}
  {movies.map((a)=>(
    <h1 className="text-machine-grey group-hover:mb-4 text-sm lg:text-base w-3/4 lg:w-2/3 duration-200 font-gemunu">{currentIndex===a.id&&(a.content)}</h1>
    
  ))}
<div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:md-20 duration-1000">
  <div className="flex space-x-2 items-center cursor-pointer">
     <a href="/" className="text-machine-grey uppercase lg:text-lg hover:text-machine-red duration-200 font-gemunu">Watch Trailer</a>
     <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-machine-red text-machine-grey"><FaPlay/></div>
  </div>
 
  <div className="flex space-x-2 items-center cursor-pointer">
     <a href="/" className="text-machine-grey uppercase lg:text-lg hover:text-machine-red duration-200 font-gemunu">Full Synopsis</a>
     <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-machine-red text-machine-grey"><FaChevronRight/></div>
  </div>
  
</div>
<div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled style={{color:slideIndex===currentIndex ?"red":"white"}}/>
          </div>
        ))}
      </div>
</div>

      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
    </div>
  );

 
}
