import houseInfo from "../../data/houseInfo.js";

export default function PropertyInfo (name){
    return (
        <section className={"property_info"}>
            <div className={'info_wrapper'}>
                <h2 className={'info_name'}>
                    name = {name}
                </h2>

            </div>

        </section>
    )

}