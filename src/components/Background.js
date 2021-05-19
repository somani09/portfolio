import React, {useEffect} from 'react'
import background from '../assets/images/background.jpg'

function Background({setLoaded}) {

    useEffect(() => {
        const loadImage = image => {
        return new Promise((resolve, reject) => {
            const loadImg = new Image()
            loadImg.src = image
            loadImg.onload = () =>resolve(image)
            loadImg.onerror = err => reject(err)
        })
        }

        loadImage(background)
        .then(() =>{ setLoaded(true);})
        .catch(err =>{ console.log("Failed to load images", err);})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="backgroundImage">
            <img src={background} className="backImage" alt="backGroundImage"/>
        </div>
    )
}

export default Background
