'use client'
import { Mouse } from "lucide-react";
import { useEffect } from "react";

const MouseComponent = () => {
  const handleScroll = () => {
    const mouseIcon = document.querySelector('.mouse-icon');
    mouseIcon?.classList.remove('mt-[calc(100vh-12rem)]', 'duration-1000');
    mouseIcon?.classList.add('mt-[calc(100vh+10rem)]', 'opacity-0', 'duration-500'); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="hidden absolute w-full lg:flex justify-center mt-[calc(100vh-12rem)] animate-bounce mouse-icon duration-1000 ease-in-out">
      <Mouse size={32}/>
    </div>
  );
}

export default MouseComponent;