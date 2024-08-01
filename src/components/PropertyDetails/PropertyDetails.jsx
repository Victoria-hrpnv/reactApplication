import {useParams} from "react-router-dom";
import houseInfo from "../../data/houseInfo.js";
import sectionHeader from "../SectionHeader/SectionHeader.jsx";
import PropertyInfo from "./PropertyInfo.jsx";


export default function PropertyDetails () {

    const params = useParams();
    console.log(params)
    return (
       // <>
       // <PropertyInfo {houseInfo.map(property => {
       //     property.id === params && return ...property
       //
       // })
       // }
       //
       // </>
    )
}