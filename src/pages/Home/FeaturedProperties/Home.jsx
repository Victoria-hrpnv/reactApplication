import './Home.css'
import SectionHeader from "../../../components/SectionHeader/SectionHeader.jsx"
import HouseCard from "./HouseCard.jsx";
import houseInfo from "../../../data/houseInfo.js";
import ScrollButton from "./ScrollButton.jsx";
import {useRef, useState} from "react";


export default function Home() {
    const houseCardRef = useRef(null);
    const [translate, setTranslate] = useState({
        numberHouseCard: 3,
        shift: 0,
    });
    function rightClick () {
        if (translate.numberHouseCard < houseInfo.length) {
        houseCardRef.current.style.transform = `translateX(${translate.shift -542}px)`;
        setTranslate(prevState => ({
            ...prevState,
            shift: prevState.shift -542,
            numberHouseCard: prevState.numberHouseCard + 1,
        }))}
    }
    function leftClick () {
        if (translate.numberHouseCard > 3) {
            houseCardRef.current.style.transform = `translateX(${translate.shift +542}px)`;
        setTranslate(prevState => ({
            ...prevState,
            shift: prevState.shift + 542,
            numberHouseCard: prevState.numberHouseCard - 1,
        }))}
    }

    return (
        <section className={'section'}>

            <div className="section_card_description">
                    <SectionHeader title={'Featured Properties'}
                                   description={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}
                                    width={'1200px'}/>
                    <button className='section_button'>View All Properties</button>
            </div>

                <div className={'house_carousel'}>
                    <div ref={houseCardRef} className={'house_wrapper'}>
                        {houseInfo.map((house) => (
                            <HouseCard key={house.id} {...house} />
                        ))}
                    </div>
                </div>

                <div className={'scrollButton'}>
                    <ScrollButton onClick={() => leftClick()} fill={translate.numberHouseCard > 3 ? 'white' : '#808080'}
                                  className={'arrow_left'}/>
                    <ScrollButton onClick={() => rightClick()}
                                  fill={translate.numberHouseCard < houseInfo.length ? 'white' : '#808080'}
                                  className={'arrow_right'}/>
                </div>

        </section>
)
}
