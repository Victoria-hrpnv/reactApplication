import styles from './HomeHeader.module.css'
import Advantages from "../../AboutUs/Advantages.tsx";
import '../../AboutUs/AboutUs.css'
import ImageHome from 'public/ImageHome.png'


export default function HomeHeader() {
    return (
        <section className={styles.dreamRealEstate}>
            <div className={styles.dreamRealEstate_info}>
                <h2 className={styles.info_header}>
                    Discover Your Dream Property with Estatein
                </h2>
                <p className={styles.info_description}>Your journey to finding
                    the perfect property begins here. Explore our listings to
                    find the home that matches your dreams.</p>
                <div className={styles.info_button}></div>
                <ul className={styles.journey_advantages}>
                    <Advantages title={'200+'} description={'Happy Customers'}/>
                    <Advantages title={'10k+'}
                                description={'Properties For Clients'}/>
                    <Advantages title={'16+'}
                                description={'Years of Experience'}/>
                </ul>
            </div>

            <div className={styles.dreamRealEstate_image}>
                <img className={styles.image} src={ImageHome} alt={"Изображение дома"} width={920} height={814}/>
            </div>
        </section>
    )
}