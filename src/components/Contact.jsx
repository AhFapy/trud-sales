import { useState, useRef } from "react"
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

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex-gap-10 overflow-hidden">
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          ¿Quieres empezar a aumentar tus ventas? Comencemos.
          <h3 className={styles.sectionHeadText}>Agenda Una Llamada Con Nosotros.</h3>
        </p>
        <div className="bg-none flex flex-row items-center">
          {/* <span className="sm:text-[6vw] lg:text-[3vw]">
          <FontAwesomeIcon icon={faEnvelope} />
          </span> */}
          <p className="ml-[1rem]">(calendly)</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")