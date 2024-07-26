import {Link} from "react-router-dom";
import './Footer.css'

export default function FooterLinkChild ({to, children}) {
    return(

        <Link className={'link_child'} to={to}>{children}</Link>
    )
}