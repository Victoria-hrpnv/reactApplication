import {useParams} from "react-router-dom";
import houseInfo from "../../data/houseInfo.ts";
import "./PropertyDetails.css"

interface ParamsProps {
    propertyDetails: string,
    estateObject: object | undefined,
}

export default function PropertyDetails () {
    const params = useParams <ParamsProps>();
    const estateObject = houseInfo.find((item)=>item.id.toString() === params.propertyDetails);
    return (
           <section className={"propertyDetails"}>
               <div className={'propertyDetails_nameAndPrise'}>

                   <div className={'propertyDetails_nameAndLocation'}>
                       <h2 className={'propertyDetails_name'}>{estateObject?.name}</h2>
                       <div className={'propertyDetails_location'}>{estateObject?.location}</div>
                   </div>
                   <h3 className={'propertyDetails_prise'}><span className={'propertyDetails_prise-span'}>Prise</span> {estateObject?.prise}</h3>
               </div>
           </section>
    )
}