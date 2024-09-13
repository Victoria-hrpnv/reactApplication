import houseInfo from "../../data/houseInfo.ts";

interface InfoProps {
    name:string
}
export default function PropertyInfo ({name}:InfoProps){
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