import {Link} from "react-router-dom";
import './Footer.css'

export default function FooterLink ({to, children}) {
    return(

        <Link className={'link_main'} to={to}>{children}</Link>
    )
}