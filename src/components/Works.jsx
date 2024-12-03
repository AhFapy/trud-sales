import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import javi from "../assets/fotos-equipo/javi.png"
import jose from "../assets/fotos-equipo/jose.jpg"
import ines from "../assets/fotos-equipo/INES.PNG"
import ahfa from "../assets/fotos-equipo/ahfa.jpg"
import monica from "../assets/fotos-equipo/MONICA.jpg"
import tatiana from "../assets/fotos-equipo/TATIANA.png"
import Aida from "../assets/fotos-equipo/AIDA.png"
import luis from "../assets/fotos-equipo/luis.png"
import diana from "../assets/fotos-equipo/DIANA.jpg"
import clickImg from "../assets/click-img.webp"
import Workflow from "./Workflow/Workflow"
import FAQComponent from "./FAQ/FAQComponent"

const ProjectCard = ({ index, name, description, tags, image, source_code_link, handleWindow }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450,
    }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[100px] hover:cursor-pointer" onClick={() => handleWindow(source_code_link)}>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <img className="w-[3rem] h-[3rem] rounded-full" src={clickImg}></img>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {
  const handleWindow = function(link) {
    window.open(link)
  }

  const faqs = [
    { question: '¿Por qué nosotros?', answer: 'Porque no vamos de cerrar ventas por cerrar, sino de darle a tu negocio una base sólida...' },
    { question: '¿Trabajáis con todo tipo de perfiles?', answer: 'No. Trabajamos con gente que tenga ganas de hacer las cosas bien.' },
    { question: '¿Puedo trabajar con vosotros?', answer: 'Eso depende. Si tienes un negocio con potencial y estás listo para meterle mano en serio a tus ventas, la respuesta es sí.' },
    { question: '¿Qué experiencia tiene Trud Sales?', answer: 'Mucha. Y no lo decimos nosotros, lo dicen los números y los negocios que hemos ayudado a despegar.' },
    { question: '¿Qué necesitamos para trabajar contigo?', answer: 'Solo dos cosas: 1. Que estés comprometido. 2. Que tu negocio tenga potencial.' },
    { question: '¿Cómo puedo empezar a trabajar con TRUD?', answer: 'Facilísimo: 1. Agendas una sesión estratégica con nosotros (si, gratuita) 2. Hablamos y miramos qué necesitas.' },
    { question: 'Quiero formarme como Appt. Setter/Closer', answer: 'Buenísima idea. Aquí no solo aprenderás a vender, aprenderás a hacerlo bien, a lo grande y con todas las herramientas.' },
  ];

  return (
    <>      
    <p className={`${styles.sectionSubText} text-center`}>My Work</p>
    <h2 className={`${styles.sectionHeadText} text-center`}>Nuestra metodología de trabajo</h2>

      <Workflow />

      <div className="w-full mt-[2rem] mb-[2rem]">
        <h2 className={`${styles.sectionSubText} text-center mb-[2rem]`}>Equipo</h2>
        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem]`}>Los Pilares de TRUD</h2>

        {/* Javi & José en una fila de 2 con márgenes y espacio entre ellas */}
        <div className="w-full flex justify-around items-center mb-[3.5rem] gap-8 flex-wrap">
          <div className="w-[45%] sm:w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[400px] h-[400px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full" src={javi} alt="Javier Marco" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Javier Marco<br />Co-Founder</h2>
          </div>
          <div className="w-[45%] sm:w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[400px] h-[400px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full" src={jose} alt="José Gómez" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>José Gómez<br />Co-Founder</h2>
          </div>
        </div>

        {/* Resto del equipo en filas de 3 con espacio entre las columnas */}
        <div className="w-full flex flex-wrap justify-between gap-8 mb-[3.5rem]">
          {/* Inés, Ahmed, Monica */}
          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[375px] h-[375px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full rounded" src={ines} alt="Inés Lobato" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Inés Lobato<br />Project Manager</h2>
          </div>

          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[375px] h-[375px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full rounded" src={ahfa} alt="Ahmed Mirza" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Ahmed Mirza<br />Director Creativo</h2>
          </div>

          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[375px] h-[375px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full rounded" src={monica} alt="Mónica Marco" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Mónica Marco<br />Directora Comercial</h2>
          </div>
        </div>

        {/* Tatiana, Aida, Luis */}
        <div className="w-full flex flex-wrap justify-between gap-8 mb-[3.5rem]">
          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[375px] h-[375px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full rounded" src={tatiana} alt="Tatiana Martin" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Tatiana Martin<br />Setter</h2>
          </div>

          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[375px] h-[375px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full rounded" src={Aida} alt="Aida Monago" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Aida Monago<br />Closer</h2>
          </div>

          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[375px] h-[375px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="w-full rounded" src={luis} alt="Luis de Pablos" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Luis de Pablos<br />Closer</h2>
          </div>
        </div>

        {/* Diana */}
        <div className="w-full flex justify-center items-center mb-[3.5rem] gap-8">
          <div className="w-full sm:w-[45%] md:w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[400px] h-[400px] border-white border-2 rounded flex justify-center items-center overflow-hidden">
              <img className="h-full rounded" src={diana} alt="Diana Salazar" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`}>Diana Salazar<br />Closer</h2>
          </div>
        </div>

        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem]`}>Preguntas Frecuentes</h2>
        {faqs.map((faq, index) => (
          <FAQComponent key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
