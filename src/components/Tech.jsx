import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import logo from "../assets/logo.png";
import fotoAlejandro from "../assets/alejandro.jpg"

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
      
{/* Caso de éxito destacado */}
{/* Caso de éxito destacado */}
{/* Caso de éxito destacado */}
<section className="w-full max-w-7xl mt-10 px-4 sm:px-0">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-10 px-4 leading-tight text-center">
    De<span className="text-[#00FF00]"> 0</span> a <span className="text-[#00FF00]">177.000€.</span> Cómo construimos una máquina de ventas sin funnels ni anuncios.
  </h2>

  <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-8">
    {/* Lado izquierdo: contenido */}
    <div className="flex-1">
      <p className="text-[#00FF00] text-xl font-semibold mb-2">
        Solamente con un equipo que escucha, entiende y sabe vender.
      </p>

      <p className="text-white text-base leading-relaxed mb-4">
        Alejandro tenía una comunidad brutal. Pero no sabía cómo convertirla.  
        En unas semanas, le montamos un equipo comercial desde cero: setters, closers y un sistema de seguimiento adaptado al dedillo.  
        ¿El resultado? <span className="font-bold text-[#00FF00]">177.000 € facturados en el primer mes. </span>  
         Sin presión. Sin trucos. Solo conversaciones reales y bien gestionadas.
      </p>

      <p className="font-semibold text-[#00FF00] mb-2">¿La clave?</p>
      <ul className="list-disc list-inside text-white mb-4">
        <li>Un equipo que conecta</li>
        <li>Un proceso claro</li>
        <li>Una gestión de operaciones que hace que todo fluya sin caos</li>
      </ul>

      <span className="font-semibold text-[#00FF00] mb-2">Y a nivel operativo:</span> <br/><br/>

      <ul className="list-disc list-inside text-white mb-4">
        <li>Cada lead sabe en qué punto está y qué necesita</li>
        <li>Cada cierre viene de entender, no de empujar</li>
        <li>Cada paso está pensado para que el negocio crezca sin perder el alma</li>
      </ul>

        Alejandro Bradshaw<span className="not-italic font-semibold text-[#00FF00]"> (@metodo.tiroides)</span>
    </div>

    {/* Lado derecho: imagen del caso */}
    <div className="w-full sm:w-[300px]">
      <img
        src={fotoAlejandro} // reemplaza con la ruta real
        alt="Caso de éxito Alejandro Bradshaw"
        className="rounded-xl w-full object-cover h-[350px] sm:h-[275px]"
      />
    </div>
  </div>
</section>



      </main>
    </>
  );
};

export default SectionWrapper(Tech, "");
