import {Link} from "react-router-dom";
import './Footer.css'
import {PropsWithChildren} from "react";

interface Props {
    to: string
    src: string
}
export default function SocialMediaItem ({to, src}:Props) {
    return(

        <Link className={'socialMedia_item'} to={to}>
            <img src={src} alt="Иконка социальной сети" width={24} height={24}/>
        </Link>
    )
}