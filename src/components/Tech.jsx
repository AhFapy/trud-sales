import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import logo from "../assets/logo.png";

const Tech = () => {
  return (
    <>
      <main id="main-tech" className="text-white flex flex-col justify-center items-center h-auto px-4">
        {/* Título con tamaño responsivo que se adapta al tamaño de la pantalla */}
        <h1
          className={`${styles.sectionHeadText} text-center sm:text-[1rem] md:text-[2rem] lg:text-[4rem] 
                      text-[clamp(2rem, 8vw, 4rem)] max-w-full`}
          id="header-tech"
        >
          ¿Qué hacemos en <span className="text-[#00FF00]">Trud Sales</span>?<br />
        </h1>

        {/* Contenedor principal con dos secciones: imagen y texto */}
        <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-7xl h-auto">
          {/* Left side: Logo */}
          <div className="w-full sm:w-[40%] flex justify-center items-center mb-[2rem] sm:mb-0">
            <div className="w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] flex justify-center items-center">
              <img src={logo} alt="Trud Sales logo" className="w-full h-auto max-w-[100%]" />
            </div>
          </div>

          {/* Right side: Text Content */}
          <div className="w-full sm:w-[60%] pt-[0.5rem] pl-[2rem] sm:pl-[0] flex justify-center items-start text-center sm:text-left">
            <div>
              <span className="text-xl text-[#00FF00] font-bold">¿QUÉ ES TRUD SALES?</span> <br /><br />
              <span className="text-base text-white font-medium">
                Trud Sales es ese aliado que te gustaría tener cuando las cosas se complican en las ventas. No
                somos una academia cualquiera ni una agencia tradicional. Aquí trabajamos con humanidad,
                cercanía y (sobre todo) sentido común para lograr algo simple: que las ventas dejen de ser un
                dolor de cabeza y se conviertan en un motor real para tu negocio.
              </span> <br /> <br />

              <span className="text-base text-white font-medium">
                Ayudamos a profesionales y equipos a alcanzar sus objetivos comerciales de manera clara y
                sostenible. Nada de trucos ni promesas vacías. Te enseñamos a optimizar tus procesos,
                conectar mejor con tus clientes y construir un sistema de ventas que funcione de verdad, sin
                complicaciones.
              </span> <br /> <br />

              <span className="text-base text-white font-medium">
                Esto no va solo de vender más, sino de hacerlo bien. Para nosotros, las ventas no son un fin en
                sí mismo, sino una forma de construir relaciones, de darle estabilidad a tu negocio y de asegurar
                que lo que haces tiene futuro. Sin adornos, sin complicaciones. Aquí solo hablamos de lo que
                funciona.
              </span> <br /> <br />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionWrapper(Tech, "");
