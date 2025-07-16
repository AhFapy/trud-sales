import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import javi from "../assets/fotos-equipo/javi.jpg"
import leo from "../assets/fotos-equipo/leo.jpeg"
import angie from "../assets/fotos-equipo/Angie.jpeg"
import ahfa from "../assets/fotos-equipo/ahmed.jpg"
import monica from "../assets/fotos-equipo/MONICA.jpg"
import joaquin from "../assets/fotos-equipo/Setters/joaquin.jpg"
import Aida from "../assets/fotos-equipo/AIDA.png"
import luis from "../assets/fotos-equipo/luis.png"
import diana from "../assets/fotos-equipo/DIANA.jpg"
import raul from "../assets/fotos-equipo/SERRANO.jpg"
import marjorie from "../assets/fotos-equipo/marjorie.jpeg"
import amos from "../assets/fotos-equipo/Setters/amos.jpeg"
import carolina from "../assets/fotos-equipo/Setters/Carolina.jpeg"
import cristina from "../assets/fotos-equipo/Setters/cristina.jpg"
import juan from "../assets/juan_lozano.jpeg"
import xoana from "../assets/xoana.jpeg"
import may from "../assets/fotos-equipo/Setters/may.jpg"
import iago from "../assets/fotos-equipo/iago.jpeg"
import mehdi from "../assets/fotos-equipo/mehdi.jpeg"
import yousef from "../assets/fotos-equipo/yousef.jpg"
import clickImg from "../assets/click-img.webp"
import Workflow from "./Workflow/Workflow"
import FAQComponent from "./FAQ/FAQComponent"
import testimonios1 from "../assets/testimonios1.png"
import testimonios2 from "../assets/testimonios2.jpg"

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

      <div className="mt-4 flex flex-wrap">
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
    { 
      question: '¿Por qué nosotros?', 
      answer: 'Te hago yo la pregunta: ¿por qué seguir buscando si tienes aquí la solución?<br/><br/>Y si no la tienes es porque tienes dudas, ¿verdad?<br/><br/><a href="https://calendly.com/josegomez-trudsales/sesion-de-cualificacion-trud-sales" target="_blank" style="text-decoration: underline; color: #00FF00;">Agenda</a> una breve llamada con alguien de nuestro equipo (no, no vamos a venderte, solo escucharte) y te resolveremos las dudas que tengas.' 
    },
    { 
      question: '¿Trabajáis con todo tipo de perfiles?', 
      answer: 'No, sería mentir si te dijera que no hemos rechazado clientes que no iban acordes a nuestros valores o principios.<br/><br/>Buscamos gente con ganas, comprometida y con visión a largo plazo.<br/><br/>Si tú das 0 pero nosotros damos 10, no importa. 0*10 sigue siendo 0.<br/><br/>Si nos das tu 10 y nosotros 0, no funciona.<br/><br/>Esto va de ambas partes. Automatizamos todo tu equipo comercial y nuestra intención es que pases el menor tiempo posible con nosotros. Eso sí, facilitarnos toda la información necesaria para hacer un buen trabajo es imprescindible.' 
    },
    { 
      question: '¿Puedo trabajar con vosotros?', 
      answer: 'Somos muy selectivos con nuestros clientes. Nos gusta trabajar con proyectos, poner nuestra energía en ellos y escalarlos, mirando siempre el largo plazo más que el corto.<br/><br/>De todos modos, si crees que lo que ofrecemos puede ayudarte o resolver una necesidad actual tuya o de tu empresa, puedes agendar una llamada <a href="https://calendly.com/josegomez-trudsales/sesion-de-cualificacion-trud-sales" target="_blank" style="text-decoration: underline; color: #00FF00;">aquí</a>.'
    },
    { 
      question: '¿Qué experiencia tiene Trud Sales?', 
      answer: 'Trud Sales nace de una necesidad.<br/><br/>Una necesidad de abarcar más proyectos y ayudar a más personas a cerrar sus ventas.<br/><br/>En 2024 facturamos +1.500.000 para nuestros clientes entre los fundadores, y esperamos poder duplicarlo mínimamente este año.<br/><br/>No deberías haber entrado en “experiencia” para ver con quién hemos trabajado, sino hacerte la pregunta: ¿realmente pueden ayudarme?<br/><br/>Si la respuesta es sí, agenda una llamada con nosotros aquí abajo.<br/><br/>Si la respuesta es no, probablemente tengas dudas. En ese caso, agenda <a href="https://calendly.com/josegomez-trudsales/sesion-de-cualificacion-trud-sales" target="_blank" style="text-decoration: underline; color: #00FF00;">aquí</a> y te las resolvemos.' 
    },
    { 
      question: '¿Qué necesitamos para trabajar contigo?', 
      answer: 'Seré breve y conciso, solo necesitas dos cosas:<br/><br/>1- Compromiso<br/>2- Ganas (de hacer dinero, de ayudar y de cambiar vidas)' 
    },
    { 
      question: '¿Cómo puedo empezar a trabajar con TRUD?', 
      answer: 'Facilísimo:<br/><br/>1. Agendas una <a href="https://calendly.com/josegomez-trudsales/sesion-de-cualificacion-trud-sales" target="_blank" style="text-decoration: underline; color: #00FF00;">sesión estratégica</a> con nosotros (sí, gratuita).<br/>2. Hablamos y analizamos qué necesitas.<br/>3. Si concuerda con nuestra visión y valores de marca, te daremos un sí o un no.<br/>4. Lo demás tendrás que descubrirlo.' 
    },
    { 
      question: 'Quiero formarme como Appt. Setter o Closer', 
      answer: 'Nuestro foco está en fluir desde la naturalidad, sin scripts de ventas absurdos. Si quieres apuntarte a la lista prioritaria, puedes enviarnos un mensaje <a href="https://wa.me/message/Z7OQRGD5WEYFO1" target="_blank" style="text-decoration: underline; color: #00FF00;">aquí</a>' 
    }
  ];
  
  return (
    <>      
    <h2 className={`${styles.sectionHeadText} text-center`}>Nuestra metodología de trabajo</h2>

      <Workflow />

      <div className="w-full mt-[2rem] mb-[2rem]">
        <h2 className={`${styles.sectionSubText} text-center mb-[2rem]`}>Equipo</h2>
        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem]`}>Los Pilares de TRUD</h2>

        {/* Javi & José en una fila de 2 con márgenes y espacio entre ellas */}
        <div className="w-full flex justify-around items-center mb-[3.5rem] flex-wrap" id="equipo-wrap">
          <div className="w-[45%] sm:w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[400px] h-[400px] z-10 border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="cofounder">
              <img className="w-full rounded-full" src={javi} alt="Javier Marco" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Javier Marco<br />Co-Founder</h2>
          </div>
          <div className="w-[45%] sm:w-[20%] flex justify-center items-center flex-col mb-[2rem]">
          <div className="w-[400px] h-[400px] z-10 border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="cofounder">
              <img className="w-full rounded-full" src={ahfa} alt="Ahmed Mirza" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white object-fill`} id="equipo-sub">Ahmed Mirza</h2>
            <h2 className={`${styles.sectionSubText} text-center text-white`} id="equipo-sub">Co-Owner</h2>
          </div>
        </div>

        <h2 className={`${styles.sectionHeadText} text-center mb-[1rem]`}>Parte de Nuestro Equipo</h2>
        <h2 className={`${styles.sectionSubText} text-center mb-[2rem]`}>Encargados de la comunicación entre equipos, dirección de los mismos y decisión/toma de ordenes en Lanzamientos y Evergreens.</h2>
        <div className="w-full flex flex-wrap justify-center mb-[3.5rem]" id="equipo-wrap">
          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]"> 
              <div className="w-[200px] h-[200px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="directivos">
                <img className="w-full rounded-full" src={monica} alt="Mónica Marco" />
              </div>
              <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Mónica</h2>
              <h2 className={`${styles.sectionSubText} text-center text-white`} id="equipo-sub">Directora Comercial</h2>
            </div>
          </div>

        {/* Resto del equipo en filas de 3 con espacio entre las columnas */}

        <h2 className={`${styles.sectionHeadText} text-center mb-[1rem]`}>Setters</h2>
        <h2 className={`${styles.sectionSubText} text-center mb-[2rem]`}>Imagina elevar <b>el grado de conciencia</b> de tu público objetivo para que te acaben <b>comprando</b> tu servicio o infoproducto gracias al trato <b>humano</b> y una conversación por LinkedIn/Instagram/Whatsapp o cualquier tipo de aplicación intermediaria.<br/><br/>Danos una base de datos o una <b>red social</b> en la cuál tengas gente con tus mismos intereses. Nosotros hablamos contigo,<b> te escuchamos</b>  y seguidamente te persuadimos para que agendes una llamada con nuestro equipo de closers y que sean ellos quienes vean si podemos <b>ayudarte</b>, de que manera y a raíz de ahí <b>venderte</b> (siempre desde el amor y no desde el ego)</h2>
        <div className="w-full flex flex-wrap justify-around mb-[3.5rem]" id="equipo-wrap">
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={joaquin} alt="Joaquín" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Joaquín</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={raul} alt="Luis de Pablos" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Raúl</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={marjorie} alt="Tatiana Martin" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Marjorie</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={carolina} alt="Tatiana Martin" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Carolina</h2>
          </div>

        </div>
        <div className="w-full flex flex-wrap justify-around mb-[3.5rem]" id="equipo-wrap">
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={angie} alt="Tatiana Martin" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Angie</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={mehdi} alt="Mehdi" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Mehdi</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={may} alt="Tatiana Martin" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">May</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={yousef} alt="Yousef" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Yousef</h2>
          </div>
          <div className="w-[20%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={leo} alt="Leo" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Leo</h2>
          </div>
        </div>
        <h2 className={`${styles.sectionHeadText} text-center color-verde`}>. . .</h2>
        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem] color-verde`}>+30 Setters</h2>


        {/* Tatiana, Aida, Luis */}
        <h2 className={`${styles.sectionHeadText} text-center mb-[1rem]`}>Closers</h2>
        <h2 className={`${styles.sectionSubText} text-center mb-[2rem]`}>Encargados de comprender a las personas que han sido <b>filtradas</b>, <b>cualificadas</b> y elevadas el grado de conciencia por <b>el setter</b> para seguidamente ver si hay alguna manera de ayudar al posible cliente y <b>acabar vendiendole</b> una solución normalmente High Ticket. <b>Sí, todo esto automatizado</b>.
        </h2>
        <div className="w-full flex flex-wrap justify-around mb-[3.5rem]" id="equipo-wrap">
          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={juan} alt="Aida Monago" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Juan Lozano</h2>
          </div>

          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={luis} alt="Luis de Pablos" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Luis</h2>
          </div>
          <div className="w-[30%] flex justify-center items-center flex-col mb-[2rem]">
            <div className="w-[150px] h-[150px] border-white border-2 rounded-full flex justify-center items-center overflow-hidden" id="equipo-img">
              <img className="w-full rounded-full" src={xoana} alt="Tatiana Martin" />
            </div>
            <h2 className={`${styles.sectionSubText} text-center mt-[1rem] text-white`} id="equipo-sub">Xoana</h2>
          </div>
        </div>
        <h2 className={`${styles.sectionHeadText} text-center color-verde`}>. . .</h2>
        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem] color-verde`}>+15 Closers</h2>


        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem]`}>Algunos perfiles con los que hemos trabajado</h2>
        <div>
          <img src={testimonios1}></img>
        </div>
        <div className="mb-[2rem] mt-[2rem]">
          <img src={testimonios2}></img>
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
