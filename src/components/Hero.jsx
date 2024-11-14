import { motion } from 'framer-motion'

import { styles } from "../style"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row gap-5`}>
        <div className='flex flex-col items-center mt-5'>

          <div className='w-5 h-5 rounded-full bg-[#33FF33]'/>
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-green-500 to-green-300%'/>

        </div>

        <div className='w-full flex flex-col items-center'>
            <h1 className={`${styles.heroHeadText} text-white`}>Bienvenido a<span className='text-[#33FF33]'> Trud Sales</span></h1>
            <p className={`${styles.heroSubText} text-center mt-2`}>
              Convertimos clientes potenciales en ventas recurrentes</p>
              <br/> 
              <p className={`${styles.sectionSubText} text-center mt-2`}>
              Somos tu Partner de Ventas si tienes un producto digital y lo que estás buscando es crear una estructura comercial basada en datos y que funcione como un reloj suizo medible y escalable
</p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.dev 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-[#33FF33] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero