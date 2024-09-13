import './Button.css'
import {PropsWithChildren} from "react";


interface Props extends  PropsWithChildren{
    className: string
    type: "submit" | "reset" | "button"

}

export default function Button ({type, children, className} : Props ) {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    )
}