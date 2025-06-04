import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {styles} from "../style"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex-gap-10 overflow-hidden">
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          ¿Quieres empezar a aumentar tus ventas? Comencemos.
          <h3 className={styles.sectionHeadText}>Agenda Una Llamada Con Nosotros.<br/></h3>
        </p>
        <div className="bg-none flex flex-row items-center">
          {/* <span className="sm:text-[6vw] lg:text-[3vw]">
          <FontAwesomeIcon icon={faEnvelope} />
          </span> */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/javiermarco-trudsales/30min?primary_color=00ff27" 
        style={{ minWidth: "320px", width:"100%", height: "700px" }}>
      </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")