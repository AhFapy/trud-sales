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
<div className="text-center mt-16">
  <h3
    className="text-[2rem] md:text-5xl font-semibold mb-12"
    style={{ color: '#00FF00' }}
  >
    ¿Qué eliges?
  </h3>

  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    <a
      href="https://app.trudsales.com/trabaja-con-nosotros"
      className="bg-black text-center text-[#00FF00] w-full md:w-auto font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 hover:text-black hover:bg-[#00FF00]"
      style={{ borderColor: '#00FF00' }}
    >
      Empezar a trabajar con TRUD
    </a>

    <a
      href="https://app.trudsales.com/formate-con-nosotros"
      className="bg-black text-center text-[#00FF00] w-full md:w-auto font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 hover:text-black hover:bg-[#00FF00]"
      style={{borderColor: '#00FF00' }}
    >
      Formarme con TRUD
    </a>
  </div>
</div>

  )
}

export default SectionWrapper(Contact, "contact")