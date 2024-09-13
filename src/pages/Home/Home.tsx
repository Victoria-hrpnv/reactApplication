import './Home.css'
import SectionHeader from "../../components/SectionHeader/SectionHeader.tsx"
import Carousel from "../../components/Carousel/Carousel.tsx";
import HomeHeader from "./HomeHeader/HomeHeader.tsx";



export default function Home() {


    return (
        <>
    <HomeHeader />

    <section className={'section'}>
        <div className={"section_card_description"}>
                    <SectionHeader title={'Featured Properties'}
                                   description={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}
                                    width={'1200px'}/>
                    <button className='section_button'>View All Properties</button>
            </div>

               <Carousel />
        </section>
    </>
)
}
