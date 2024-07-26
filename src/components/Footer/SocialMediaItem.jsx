import {Link} from "react-router-dom";
import './Footer.css'

export default function SocialMediaItem ({to, src}) {
    return(

        <Link className={'socialMedia_item'} to={to}>
            <img src={src} alt="Иконка социальной сети" width={24} height={24}/>
        </Link>
    )
}