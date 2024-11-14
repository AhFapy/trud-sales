import React, { useEffect, useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion' 

import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon}) => {
return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById("timeline");
      if (timeline) {
        const { top, bottom } = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcular el progreso del scroll dentro del timeline
        const progress = Math.min(1, Math.max(0, 1 - top / (bottom - windowHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    { date: "2020", title: "Título del evento", description: "Descripción detallada del evento en esta fecha." },
    { date: "2018", title: "Otro evento", description: "Más información sobre este otro evento." },
    // Agrega más eventos según sea necesario
  ];

  return (
    <>
    <motion.div variants={[textVariant(), fadeIn("", "", 0., 1)]} className='flex justify-center items-center flex-col'>
      <p className={`${styles.sectionHeadText} text-center`}>Nuestros Resultados</p>
      <div className='w-[60rem] h-[10rem] flex items-center justify-center flex-row'>
        <div className="w-[25%] flex items-center justify-center flex-col border-r border-white border-r-[1px]"> 
        <p className={`font-bold text-center text-2xl`}>19%</p>
        <p className={`text-center`}>de conversión total</p>
        </div>
        <div className="w-[25%] flex items-center justify-center flex-col border-white border-r-[1px]"> 
        <p className={`font-bold text-center text-2xl`}>+39%</p>
        <p className={`text-center`}>de conversión relativa</p>
        </div>
        <div className="w-[25%] flex items-center justify-center flex-col border-white border-r-[1px]"> 
        <p className={`font-bold text-center text-2xl`}>+90%</p>
        <p className={`text-center`}>de ratio de asistencia</p>
        </div>
        <div className="w-[25%] flex items-center justify-center flex-col "> 
        <p className={`font-bold text-center text-2xl`}>10%</p>
        <p className={`text-center`}>de no showup</p>
        </div>

      </div>
      <motion.p
    variants={fadeIn("", "", 0., 1)}
    className='mt-4 text-secondary text-center flex-center text-[17px] max-w-3xl leading-[30px]'
    >
   </motion.p>

    {/* <div className='mt-20 flex flex-wrap gap-10 justify-center'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div> */}
    <div className="relative flex flex-col items-start pl-10" id="timeline">
      {/* Línea vertical con gradiente dinámico */}
      <div
        className="absolute left-5 top-0 bottom-0 w-px"
        style={{
          background: `linear-gradient(to bottom, #3498db ${scrollProgress * 100}%, #ddd ${scrollProgress * 100}%)`
        }}
      ></div>

      {events.map((event, index) => (
        <div key={index} className="relative flex items-start mb-10">
          {/* Punto en cada evento */}
          <div className="absolute left-5 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>

          {/* Fecha del evento */}
          <div className="absolute left-[-2rem] font-bold text-gray-600">{event.date}</div>

          {/* Contenido del evento */}
          <div className="bg-white shadow-lg rounded-lg p-4 ml-8 max-w-md">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>

    </motion.div>

    </>
  )
}

export default SectionWrapper(About, "about")