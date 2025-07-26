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
        <p className="text-2xl font-bold text-center">
          ¿Quieres empezar a aumentar tus ventas?
        </p>
        <p className="text-2xl font-bold color-verde text-center mt-4">
          <a href="https://app.trudsales.com/trabaja-con-nosotros">Pulsa Aquí</a>
        </p>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")