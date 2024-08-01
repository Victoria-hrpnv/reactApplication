import './Home.css'
import SectionHeader from "../../../components/SectionHeader/SectionHeader.jsx"
import Carousel from "../../../components/Carousel/Carousel.jsx";


export default function Home() {


    return (
        <section className={'section'}>

            <div className="section_card_description">
                    <SectionHeader title={'Featured Properties'}
                                   description={'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'}
                                    width={'1200px'}/>
                    <button className='section_button'>View All Properties</button>
            </div>

               <Carousel />

        </section>
)
}
