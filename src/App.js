import './App.css';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // scrollWidth: the total width including stuff that is only visible if you scroll
    console.log(carousel.current.scrollWidth); 
    // offsetWidth: the space occupied by the element, including padding and borders
    console.log(carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <div className="App">
      <motion.div 
        ref={carousel} 
        whileTap={{cursor: "grabbing"}}
        className='carousel'
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className='inner-carousel'
        >
          {images.map((image) => {
            return(
              <motion.div className='item'>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
