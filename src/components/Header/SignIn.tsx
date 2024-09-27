import "./Header.css"
import {PropsWithChildren} from "react";
import {useSelector} from "react-redux";
import {FaHeart} from "react-icons/fa";


export default function SignIN ({children} : PropsWithChildren) {
    const favorites = useSelector(state => state.favorites)
    const quantityFavorites = favorites.length
    return (
        // <button className='navigation_sigInButton navigation_item' type={"button"}>{children}</button>
        <button className={'favorites'}>
            <FaHeart className="myIcon" />
            <span>Favorites: {quantityFavorites}</span>
        </button>
    )
}