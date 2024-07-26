import './AboutUs.css'
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import Advantages from "./Advantages.jsx";


export default function AboutUs() {
    return (
        <section className={'section journey'}>
            <div className="journey_wrapper">
                <SectionHeader title={'Our Journey'}
                               description={'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, weve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.'}
                               width={'755px'}/>

                <ul className="journey_advantages">
                    <Advantages title = {'200+'} description={'Happy Customers'}/>
                    <Advantages title = {'10k+'} description={'Properties For Clients'}/>
                    <Advantages title = {'16+'} description={'Years of Experience'}/>
                </ul>
            </div>

            <div className="journey_img">
                <img className={"img_home"} src="../../../public/home.png" alt="Картинка дома" width={755} height={546}/>
            </div>
        </section>

    )
}