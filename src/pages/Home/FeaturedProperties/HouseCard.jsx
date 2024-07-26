import './Home.css'
import HouseDescription from "./HouseDescriotion.jsx";

export default function HouseCard({src, name, description, bedroom, bathroom, type, prise}){


    return(
        <div className={"house_card"}>
            <img className={"card_img"} src={src} alt="Фото недвижимости" width={432} height={318}/>
            <h3 className={'card_name'}>{name}</h3>
            <HouseDescription description={description}/>

            <div className={'CharacteristicsOfTheHouse'}>
                <div className={'Characteristics bedroomCount'}>
                    <img src="../../../../public/bedroom.png" alt="Иконка кровати" width={24} height={24}/>
                    <p className={'Characteristics_text'}>{bedroom}-Bedroom</p>
                </div>

                <div className={'bathroomCount Characteristics'}>
                    <img src="../../../../public/bathroom.png" alt="Иконка душа" width={24} height={24}/>
                    <p className={'Characteristics_text'}>{bathroom}-Bathroom</p>
                </div>

                <div className={'typeHouse Characteristics'}>
                    <img src="../../../../public/villa.png" alt="Иконка дома" width={24} height={24}/>
                    <p className={'Characteristics_text'}>{type}</p>
                </div>
            </div>

            <div className={"price_wrapper"}>
            <p className={"price"}>Prise <br /> <span className={"price_money"}>{prise}</span> </p>
                <button type={"button"} className={"house_button"}>View Property Details</button>
            </div>
        </div>
    )
}