import {Link} from "react-router-dom";
import './Footer.css'
import {PropsWithChildren} from "react";


interface Props extends PropsWithChildren{
    to: string
}
export default function FooterLinkChild ({to, children} : Props) {
    return(

        <Link className={'link_child'} to={to}>{children}</Link>
    )
}