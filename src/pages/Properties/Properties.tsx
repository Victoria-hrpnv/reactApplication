import PropertiesForm
    from "../../components/Forms/PropertiesForm/PropertiesForm.tsx";
import './Properties.css'
import Carousel from "../../components/Carousel/Carousel.tsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.tsx";


export default function Properties() {
    return (
        <>

            <section className={'section'}>
                <SectionHeader title={'Discover a World of Possibilities'}
                               description={'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'}
                               width={'1597px'}/>
                <Carousel/>
            </section>
            <PropertiesForm/>
        </>
    )
}