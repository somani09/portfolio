import React, {useEffect, useState, useRef} from 'react'

function Typer({text, className}) {

    const index = useRef(0);

    const [currentText, setCurrentText] = useState('');
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentText( value => value + text.charAt(index.current));
            if(index.current < text.length)
                index.current += 1;
        }, 200);
        return () => {
            clearTimeout(timeoutId)
        }
    }, [currentText,text])

    return (
        <div className={className}>
            {currentText}
        </div>
    )
}

export default Typer
