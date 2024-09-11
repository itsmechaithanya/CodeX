import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles

export default function App() {
  const scrollRef = useRef(null); // Reference to the scroll container

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Element to apply locomotive scroll
      smooth: true,          // Enable smooth scrolling
    });

    return () => {
      // Clean up Locomotive Scroll on component unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className=" bg-black text-white " >
      <div className='h-screen w-screen overflow-hidden relative' data-scroll-section>
        <div className='h-[110vh] w-screen absolute'>
        <Spline scene="https://prod.spline.design/HFP8IXeN4m5T2fqx/scene.splinecode" />
        </div>
        <div>
          {/* <h1 className='text-white absolute font-bold text-[7vw] bottom-[13vh] left-[2vw]'>CodeX</h1> */}
        </div>
        {/* <div className='absolute z-10 bottom-[10vh] left-[2vw] text-xl bg-white text-black px-5 py-2 rounded-full'>Explore More</div> */}
      </div>
      <div className='h-screen w-screen flex items-center justify-center' data-scroll-section>
        <h1 className="text-3xl">hello</h1>
      </div>
      <div className='h-screen w-screen flex items-center justify-center' data-scroll-section>
        <h1 className="text-3xl">hello</h1>
      </div>
    </div>
  );
}