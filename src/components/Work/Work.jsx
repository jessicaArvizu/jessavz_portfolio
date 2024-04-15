import { sectionsEnums } from "../_enums/sectionsEnums";
import WorkCard from "./WorkCard";
import Tesselar from "../../images/Tesselar.png"
import Tax_Champions from "../../images/Tax_Champions.png"
import Abtrs from "../../images/Abtrs.png"
import Correduria from "../../images/correduria10.png"
import RecoveryInMotion from "../../images/Recovery_In_Motion.png"
import RoofingArchitects from "../../images/Roofing_Architects.png"

export default function Work() {
    return (
        <section id={sectionsEnums.work} className='h-fit py-10 lg:py:20'>
            <h3 className="font-bold text-xl mb-10 text-peach">Check out a little of my previous work</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <WorkCard
                    url='https://www.tesselar.mx/'
                    title='Tesselar'
                    img={Tesselar}
                />
                <WorkCard
                    url='https://www.taxchampions.com/'
                    title='Tax Champions'
                    img={Tax_Champions}
                />
                <WorkCard
                    url='https://www.abtrs.com/'
                    title='A Better Today Recovery Services'
                    img={Abtrs}
                />
                <WorkCard
                    url='https://www.correduria10bcs.com/'
                    title='Correduría Pública 10 B.C.S.'
                    img={Correduria} />
                <WorkCard
                    url='https://www.recoveryinmotion.com/'
                    title='Recovery In Motion'
                    img={RecoveryInMotion} />
                    <WorkCard
                    url='https://roofingarchitects.com/'
                    title='Roofing Architects'
                    img={RoofingArchitects}/>
            </div>

        </section>
    )
}
