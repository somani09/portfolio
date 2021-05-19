import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from '@popmotion/popcorn';
import './imageLoop.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import loading from '../../assets/images/loading.svg'

const backgroundvariants = {
    initial:{
      opacity: 0
  
    },
    animate: {
      opacity: 1,
      transition: {
        duration:2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration:2
      }
    }
  };

function ImageLoop({images}) {
    

    const [[page, direction], setPage] = useState([0,0])
    const imageIndex = wrap(0, images.length, page)

    const paginate = useCallback((newDirection)=>{
            setPage([page + newDirection, newDirection]);
    },[page])
     

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            paginate(1);
            
        }, 5000);
        return () => {
            clearInterval(interval)

        }
    }, [paginate])

    return (
        <div className="loopArea">
            <AnimatePresence initial={false} custom={direction} >
                {/* <motion.img
                    className="loopImage"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={backgroundvariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                /> */}
                <motion.div
                  key={page}
                  custom={direction}
                  variants={backgroundvariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  >
                  <LazyLoadImage
                  className="loopImage"
                  src={images[imageIndex]}
                  alt="loopImages"
                  placeholderSrc={loading}
                  />
                </motion.div>
                
                </AnimatePresence>
        </div>
    )
}

export default ImageLoop
