import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { faCss3Alt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons"

const Tech = () => {
  return (
    <>
    
    <main id="main-tech" className="text-white flex flex-col justify-center items-center h-screen">
    <div className="pt-[6vh] flex flex-col items-center mt-[6vh] w-[90vw] h-[40vh]">
        <div>
            <h1 className={`${styles.sectionHeadText} text-center mb-[2rem]`}>
                ¿Que hacemos en <span className="text-[#00FF00]">Trud Sales</span>?<br/>
            </h1>
            <div className="w-full flex justify-center">
                <div className="w-[40rem]">
                <div className="border-r min-h-[25rem] border-white border-[2px] w-full flex justify-center items-center">
                    <span className="">cuadro imagen</span></div>
                </div>
                <div className="w-[40rem] min-h-[30rem] pt-[0.5rem] pl-[2rem]">
                <span className="text-xl text-[#00FF00] font-bold">¿QUÉ ES TRUD SALES?</span> <br/>
                <span className="text-lg text-white font-bold">
                Agencia y academia de ventas que transforma la realidad actual del sector en una más optimizada y competente <br/> <br/>
                </span>
                <span className="text-base text-white font-medium">
Trabajamos por y para mejorar el sector de las ventas actual, formando a profesionales con una ética de trabajo y valores sólidos que hagan prosperar cualquier proyecto en el que se propongan trabajar. <br/> <br/>

Por otro lado ofrecemos una solución única en el mercado a todos los empresarios que tienen limitaciones en la escalabilidad y crecimiento de sus negocios.

                </span> <br/> <br/>
                boton cta
                </div>
             </div>
        </div>
    </div>
    
</main>
</>
)
}

export default SectionWrapper(Tech, "")