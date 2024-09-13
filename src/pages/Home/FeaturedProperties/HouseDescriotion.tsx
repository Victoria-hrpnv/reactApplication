import {useEffect, useRef} from "react";
import "../Home.css"

interface Props{
    description:string
}

export default function HouseDescription({description} : Props) {

    const line = description.length > 80 ? description.slice(0, 80) + '...' : description;
    const descriptionRef = useRef(null);
    useEffect(() => {
        descriptionRef.current.style.height = 'auto';
    }, [descriptionRef])

    return (
            <p ref={descriptionRef} className={"card_description"}>{line} <span onClick={() => {
                descriptionRef.current.innerText = description
            }} className='readMore'>Read More</span>
            </p>
    )
}

//61