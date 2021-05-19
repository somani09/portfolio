import React, {useState, useEffect} from 'react'
import { BiUpArrow } from 'react-icons/bi';
import './scrollToTop.scss'
function ScrollToTop() {

    const [show, setShow] = useState(false)

    function handleScroll () {
        if(window.pageYOffset > 500)
            setShow(true)
        else
            setShow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    function handleClick() {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }

    return (
        <div className="scrollToTop center" onClick={handleClick} style={{visibility: show?'visible':'hidden'}}>
            <BiUpArrow className="arrowUp" />
        </div>
    )
}

export default ScrollToTop
