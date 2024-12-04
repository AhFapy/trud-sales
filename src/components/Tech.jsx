import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import logo from "../assets/logo.png";

const Tech = () => {
  return (
    <>
      <main id="main-tech">
        {/* Título con ajuste responsivo */}
        <h1 id="header-tech" className="font-black">
          ¿Qué hacemos en <span className="text-[#00FF00]">Trud Sales</span>?<br />
        </h1>

        {/* Contenedor con logo y texto */}
        <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-7xl h-auto">
          {/* Left side: Logo */}
          <div className="logo-container flex justify-center items-center mb-[2rem] sm:mb-0">
            <img src={logo} alt="Trud Sales logo" />
          </div>

          {/* Right side: Text Content */}
          <div className="content w-full sm:w-[60%] pt-[0.5rem] pl-[2rem] sm:pl-[0] flex justify-center items-start text-center sm:text-left">
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
