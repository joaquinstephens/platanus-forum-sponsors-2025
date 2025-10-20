import { useState, useEffect } from "react";
import { ContentSection } from "@/components/ContentSection";
import { StatCard } from "@/components/StatCard";
import { LinkList } from "@/components/LinkList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RotatingBanana from "@/components/RotatingBanana";
const Index = () => {
  const [activeSection, setActiveSection] = useState("platanus");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.3
    });
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen bg-background relative">
      {/* Fixed rotating banana background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-80">
        <RotatingBanana modelPath="/assets/models/banana3d.glb" rotationSpeed={0.0025} pixelSize={1} gapRatio={1.5} customResolution={320} initialRotationAngle={0} solid={false} />
      </div>
      
      <main className="p-4 sm:p-8 lg:p-12 relative z-10 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ContentSection id="platanus">
            <div className="mb-12 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
                <img src="/lovable-uploads/e9ec9899-0f84-4b12-9ac6-b81c4d9b51ca.png" alt="Platanus Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                Platanus Forum '25
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4">Sponsors</h2>
            </div>
          </ContentSection>

          {/* About Platanus */}
          <ContentSection id="about" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">🍌 About Platanus</h2>
            <div className="space-y-4">
              <p>
                A lo largo de la historia han existido núcleos espacio-temporales donde hay una concentración de genialidad. Piensen en Atenas siglo IV aC, Florencia siglo XV, Londres en el XVI o actualmente Silicon Valley.
              </p>
              <p>
                Esta concentración es multifactorial, pero en Platanus creemos que la reunión de personas talentosas explorando ideas y construyendo cosas nuevas juega un papel importante.
              </p>
              <p>
                Este espíritu de creación es contagioso. Las ideas se comparten y mejoran, el talento atrae más talento y se va generando un círculo virtuoso.
              </p>
              <p>
                En Platanus buscamos catalizar una concentración de genialidad en el ambiente tecnológico de Latam. Específicamente, impulsamos tres aspectos:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4 [&>li::marker]:text-primary">
                <li>
                  <span className="text-primary">Venture Capital</span>: Necesitamos que más talento entre al mundo tech, y eso requiere financiamiento de riesgo. Por eso invertimos en etapas pre-semilla, incluso pre-producto, con tickets entre USD $50k–$250k.
                </li>
                <li>
                  <span className="text-primary">El Impulso Inicial</span>: Para ayudar a las startups a pasar de 0 a 1, diseñamos un programa de tres meses que genera urgencia y accountability a través de la mentoría de fundadores top de Latam.
              </li>
              </ol>
              
              <ol className="list-decimal list-inside space-y-3 ml-4 [&>li::marker]:text-primary" start="3">
                <li>
                  <span className="text-primary">Redes</span>: En las etapas más tempranas, rodearse de gente ambiciosa es clave. En ese ambiente nacen las mejores startups. Hemos construido una comunidad altamente curada de fundadores excepcionales, de los cuales un 40% son técnicos.
                </li>
              </ol>
              <p>
                Desde 2020, hemos invertido y acelerado 115 startups en 10 países, con una tasa de selección menor al 1%.
              </p>
              <p>
                Gracias a eso tenemos en nuestra red a +300 fundadores, 110 inversionistas y una extensa red de amigos. Hay un exceso de genialidad que debe aprovecharse y para eso esta Platanus Forum.
              </p>
              <p>
                <a href="https://platan.us/" className="text-primary hover:underline font-medium">Más información de lo que hacemos en nuestra página.</a>
              </p>
            </div>
          </ContentSection>

          {/* El evento */}
        <ContentSection id="evento" className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">El evento</h2>
          <div className="mb-6 flex justify-center">
            <div className="bg-primary/20 border border-primary/60 rounded-lg px-8 py-6 text-center">
              <p className="text-lg sm:text-xl font-bold text-white">Jueves 20 de noviembre 2025</p>
              <p className="text-lg sm:text-xl font-bold text-white">08:30 a 19:00</p>
              <p className="text-lg sm:text-xl font-bold text-white">Santiago</p>
            </div>
          </div>
          <div className="space-y-4">
              <p>
                Platanus Forum es <span className="text-primary">un día para que la gente en nuestra comunidad se tope, converse, fluyan las ideas y salgan nuevas oportunidades para crear/impulsar/invertir/investigar sobre startups y tecnología.</span>
              </p>
              <p>
                Para lograr este objetivo el evento debe tener un equilibrio entre:
              </p>
              <ul className="list-disc list-inside space-y-4 ml-4">
                <li>
                  <span className="text-primary">Fireside chats</span>: nos gusta traer a fundadores haciendo cosas distintas a lo que vemos en el día a día en Latam. Para esta versión contamos con:
                  
                  {/* Speaker Profiles */}
                  <div className="grid grid-cols-2 gap-8 mt-8 mb-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 border border-primary/40 bg-muted/30 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-all duration-300">
                        <a href="https://www.linkedin.com/in/ignacio-belieres-montero-14b457b6/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/4ca3c16b-eb9a-4fb0-a1a9-f6b1174d0aec.png" 
                            alt="Ignacio Beliers" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </a>
                      </div>
                      <h3 className="text-primary font-semibold text-base sm:text-lg mb-2">Ignacio Beliers</h3>
                      <p className="text-white text-sm sm:text-base mb-3">
                        <a href="https://epic-aerospace.com/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                          Epic Aerospace
                        </a>
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed text-center">
                        Epic Aerospace está construyendo una línea de <em>Orbit Transfer Vehicles</em> (OTVs), vehículos espaciales que permite transportar carga a cualquier órbita desde lanzamientos espaciales.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 border border-primary/40 bg-muted/30 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-all duration-300">
                        <a href="https://www.linkedin.com/in/tomasocampo/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/tomasOcampo.jpeg" 
                            alt="Tomás Ocampo" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </a>
                      </div>
                      <h3 className="text-primary font-semibold text-base sm:text-lg mb-2">Tomás Ocampo</h3>
                      <p className="text-white text-sm sm:text-base mb-3">
                        <a href="https://www.unblock.global/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                          Unblock
                        </a>
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed text-center">
                        Unblock utiliza el exceso de energía que comúnmente tienen las plantas de generación eléctrica en poder de cómputo.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 border border-primary/40 bg-muted/30 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-all duration-300">
                        <a href="https://www.linkedin.com/in/rogeliorea/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/roger.jpeg" 
                            alt="Roger Rea" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </a>
                      </div>
                      <h3 className="text-primary font-semibold text-base sm:text-lg mb-2">Roger Rea</h3>
                      <p className="text-white text-sm sm:text-base mb-3">
                        <a href="https://grupalia.com/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                          Grupalia
                        </a>
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed text-center">
                        Grupalia es <em>rising star</em> de nuestro portafolio. Otorgan créditos grupales a comunidades de micro empresarios en México.
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 border border-primary/40 bg-muted/30 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-all duration-300">
                        <a href="https://www.linkedin.com/in/roman-teslyuk-a344881a/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/3add01c8-aff6-4ac5-b726-588ba0a5cd4a.png" 
                            alt="Roman Teslyuk" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </a>
                      </div>
                      <h3 className="text-primary font-semibold text-base sm:text-lg mb-2">Roman Teslyuk</h3>
                      <p className="text-white text-sm sm:text-base mb-3">
                        <a href="https://earth-ai.com/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                          Earth AI
                        </a>
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed text-center">
                        Earth AI es una startup australiana de exploración y perforación minera con un fuerte componente de AI para encontrar los mejores yacimientos.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="text-primary">Momentos para conocer lo que hacen los demás de forma estructurada</span>:
                  <ul className="list-disc list-inside space-y-2 ml-6 mt-2">
                    <li>
                      Conoce las startups del portafolio: presentaciones de 10 - 15 minutos de avances y retos tecnológicos que han tenido startups de nuestro portafolio.
                    </li>
                    <li>
                      Ejemplo en vivo de nuestro famoso "Coliseo": dos de nuestros mentores reciben preguntas de fundadores del público y dan consejos sobre el asunto.
                    </li>
            </ul>
                  
                  {/* Mentor Profiles */}
                  <div className="grid grid-cols-2 gap-6 mt-6 mb-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 border border-primary/40 bg-muted/30 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-all duration-300">
                        <img 
                          src="/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.png" 
                          alt="Pedro Pineda" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h3 className="text-primary font-semibold text-sm sm:text-base mb-1">Pedro Pineda</h3>
                      <p className="text-white text-xs sm:text-sm mb-2">
                        <a href="https://fintual.cl/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                          Fintual
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 border border-primary/40 bg-muted/30 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-all duration-300">
                        <img 
                          src="/lovable-uploads/c2bcd5e5-a377-481c-a355-fb55e6ee9dbc.png" 
                          alt="Juan Pablo Cuevas" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h3 className="text-primary font-semibold text-sm sm:text-base mb-1">Juan Pablo Cuevas</h3>
                      <p className="text-white text-xs sm:text-sm mb-2">Cornershop</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 text-center mt-2 italic">Mentores que harán el Coliseo.</p>
                  
                </li>
                <li>
                  <span className="text-primary">Momentos para conocer lo que hacen los demás de forma "desestructurada"</span>: desayuno, almuerzo en mesas con puestos designados, tiempos libres.
                </li>
                <li>
                  <span className="text-primary">Conversaciones de la vida</span>: las mejores conexiones se dan en ambientes más relajados, como en un cocktail para finalizar el evento.
              </li>
            </ul>
            </div>
          </ContentSection>

          <ContentSection id="asistentes" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Asistentes</h2>
            <div className="space-y-4">
              <p>Nuestra comunidad:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fundadores del portafolio.</li>
                <li>Mentores.</li>
                <li>Inversionistas (Family Offices, HNWI, inversionistas ángeles y fondos de VC)</li>
                <li>Amigos (otros fundadores y gente interesada en el mundo startups)</li>
            </ul>
              <p>Las edades van desde los 20 a los 50 años, todos con conexiones en el mundo de startups y actuales o futuros tomadores de decisión.</p>
            </div>
          </ContentSection>

          {/* Intro / Invitación principal */}
          <ContentSection id="intro" className="mb-8">
            <div className="space-y-4">
            </div>
          </ContentSection>


          {/* Evento del año pasado */}
          <ContentSection id="evento-pasado">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Evento del año pasado</h2>
            <p className="font-normal text-inherit">El año pasado juntamos a <span className="text-primary">150</span> personas de nuestra comunidad repartidos entre:</p>
            <ul className="space-y-2 mb-6 list-disc ml-6 mt-4">
              <li className="font-normal text-inherit">Fundadores: <span className="text-primary">52%</span></li>
              <li className="font-normal text-inherit">LPs: <span className="text-primary">20%</span></li>
              <li className="font-normal text-inherit">VC fund: <span className="text-primary">28%</span></li>
               </ul>
            <p className="font-normal text-inherit mb-2">En cuanto a los speakers, trajimos a los fundadores de:</p>
            <ul className="space-y-2 mb-6 list-disc ml-6">
              <li className="font-normal text-inherit"><a href="https://platan-dot-yamm-track.appspot.com/2knOWeIKG8tgZvQLga0F1xT31MTTvGW1mRBbuEXRalan4qc5GlAEItVS7ykkdaQLb3pwnReW47cGXocMrVggivsKF4mCpGhkkDSf0K8_---fp6bu_16qogE2KO4csBjWNMRl8PB3wxKmPl7dmnNCYcAtgOmCvJEx7WM-nWFdpmELnOpMu" className="text-primary underline">AstroForge</a>: minería de asteroides</li>
              <li className="font-normal text-inherit"><a href="https://platan-dot-yamm-track.appspot.com/2f_z8Ivpnzt0o4B7Ivc2HijGTnLJha9bi2yf5FTzzQaEBqs5GlAGVnvbvICwUEoAF47AcsqI-5l3H-0kva_dsl_VJ4QaKsVhVfkvwZMUBgA9As3yKMpYO-u87dFJ6A85_B04ILBwAzWuv3rO2j6mQz1Vy71YefIksuX2wMmwHspo" className="text-primary underline">EarthAI</a>: AI para la exploración y perforación minera. (Así es, a Román le gustó tanto que decidió venir nuevamente por cuenta propia).</li>
              <li className="font-normal text-inherit"><a href="https://platan-dot-yamm-track.appspot.com/2VR8TYLuAA7D4dJSzsrbC_DugvG99wrLX7y0zHYh1izQDqs5GlAFjB3jPIpfaL91juTy4Z2ysJJ-mL7UN3vAqps45gUGTmgPGDCWpq-xjfHJhg2BjR1L3cDXP3xAuJ9oD_6G9hJ9wjOxzzZIpnQfDzcTCDpnqWv47FH3ET4SgmRin_eR6H71K5A" className="text-primary underline">Maverick Biometals</a>: extracción y procesamiento de metales con biotecnología.</li>
              </ul>
            {/* Carrusel vertical (se mantiene) */}
              <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden my-8 rounded-lg">
                {/* Top fade effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"></div>
                {/* Bottom fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
                
                <div style={{
                animation: 'verticalScroll 30s linear infinite',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem'
              }} className="sm:grid-cols-3 sm:gap-4">
                  {/* First complete set */}
                  <img src="/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png" alt="Platanus Forum presentation with mining displays" className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png",
                  alt: "Platanus Forum presentation with mining displays"
                })} />
                  <img src="/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png" alt="Earth AI presentation at forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png",
                  alt: "Earth AI presentation at forum"
                })} />
                  <img src="/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png" alt="Gizmodo asteroid mining presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png",
                  alt: "Gizmodo asteroid mining presentation"
                })} />
                  <img src="/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png" alt="AstroForge speaker presenting" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png",
                  alt: "AstroForge speaker presenting"
                })} />
                  <img src="/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png" alt="Platanus Forum presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png",
                  alt: "Platanus Forum presentation"
                })} />
                  <img src="/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png" alt="Forum attendees listening" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png",
                  alt: "Forum attendees listening"
                })} />
                  <img src="/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png" alt="Speaker at Platanus Forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png",
                  alt: "Speaker at Platanus Forum"
                })} />
                  <img src="/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png" alt="Audience at the forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png",
                  alt: "Audience at the forum"
                })} />
                  <img src="/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png" alt="Person working during event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png",
                  alt: "Person working during event"
                })} />
                  <img src="/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png" alt="Networking on terrace" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png",
                  alt: "Networking on terrace"
                })} />
                  <img src="/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png" alt="Outdoor networking event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png",
                  alt: "Outdoor networking event"
                })} />
                  <img src="/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png" alt="Attendees networking" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png",
                  alt: "Attendees networking"
                })} />
                  
                  {/* Second complete set for seamless infinite loop */}
                  <img src="/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png" alt="Platanus Forum presentation with mining displays" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/25090221-6a61-4858-8aab-b1922cde6c82.png",
                  alt: "Platanus Forum presentation with mining displays"
                })} />
                  <img src="/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png" alt="Earth AI presentation at forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8e7b4326-eeeb-40eb-abbe-524536502eb5.png",
                  alt: "Earth AI presentation at forum"
                })} />
                  <img src="/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png" alt="Gizmodo asteroid mining presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/f9903767-5b74-4659-81a8-bae8ce2b2692.png",
                  alt: "Gizmodo asteroid mining presentation"
                })} />
                  <img src="/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png" alt="AstroForge speaker presenting" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/ed64df99-87c0-4897-a3dc-1672f0425525.png",
                  alt: "AstroForge speaker presenting"
                })} />
                  <img src="/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png" alt="Platanus Forum presentation" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/13884d98-0fcf-4d2f-babd-806f510eabcb.png",
                  alt: "Platanus Forum presentation"
                })} />
                  <img src="/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png" alt="Forum attendees listening" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/c7879c52-30b8-40cc-b12b-81ca3e49614d.png",
                  alt: "Forum attendees listening"
                })} />
                  <img src="/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png" alt="Speaker at Platanus Forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/51c77275-536b-4367-9b70-da20cf4ca6b2.png",
                  alt: "Speaker at Platanus Forum"
                })} />
                  <img src="/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png" alt="Audience at the forum" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8b0c9c08-0dee-4aa0-89cd-69a8a2cc3391.png",
                  alt: "Audience at the forum"
                })} />
                  <img src="/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png" alt="Person working during event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0dc03ae6-91df-43aa-9680-7fae4f2d10c7.png",
                  alt: "Person working during event"
                })} />
                  <img src="/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png" alt="Networking on terrace" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/8973a3c2-a53b-4386-b08b-fe8f28bf29b3.png",
                  alt: "Networking on terrace"
                })} />
                  <img src="/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png" alt="Outdoor networking event" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/0665bd3c-4fef-47e2-b820-d87a15654350.png",
                  alt: "Outdoor networking event"
                })} />
                  <img src="/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png" alt="Attendees networking" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                  src: "/lovable-uploads/791c36a4-7ab7-4ee1-a683-42d987a72efd.png",
                  alt: "Attendees networking"
                })} />
                </div>
              </div>

              {/* Image Modal */}
              <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                  <div className="relative">
                    {selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />}
                  </div>
                </DialogContent>
              </Dialog>
          </ContentSection>

          {/* Paquetes para sponsors */}
          <ContentSection id="sponsors" className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              📦 Paquetes para sponsors
            </h2>
            
            <div className="space-y-6">
              {/* Básico Package */}
              <div className="sponsor-package-bg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    🙌 Básico
                  </h3>
                  <span className="text-xl font-bold text-primary">$2.500 USD</span>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                  <li>Logo de la empresa en la página de <a href="https://forum.platan.us/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">invitación del evento</a>.</li>
                  <li>Logo de la empresa en el merchandising oficial del evento, tamaño pequeño.</li>
                  <li>Mención de la empresa en el evento.</li>
                </ul>
              </div>

              {/* Partner Package */}
              <div className="sponsor-package-bg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    🚀 Partner
                  </h3>
                  <span className="text-xl font-bold text-primary">$5.000 USD</span>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                  <li>Todo lo del plan <strong>🤝 Básico</strong></li>
                  <li>Ser sponsor de un Fire Chat a elección.</li>
                  <li>Logo de la empresa en el merchandising oficial del evento, tamaño mediano.</li>
                  <li>Mención de la empresa en las publicaciones del evento en toda plataforma.</li>
                  <li>Posibilidad de traer pendones y afiches de la empresa para el evento, junto a un representante.</li>
            </ul>
              </div>

              {/* Exclusive Partner Package */}
              <div className="sponsor-package-bg rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    👑 Exclusive Partner
                  </h3>
                  <span className="text-xl font-bold text-primary">$10.000 USD</span>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                  <li>Todo lo del plan <strong>🫶 Partner</strong></li>
                  <li>Posicionamiento protagónico en el merchandising, junto a Platanus.</li>
                  <li>Logo de la empresa en el merchandising oficial del evento, tamaño grande</li>
                  <li>Charla de 10 minutos en la apertura del evento.</li>
                  <li>1 cupo en la <a href="https://cabalgata.platan.us/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">Cabalgata Platanus</a> para los días 22 y 23 de noviembre.</li>
                </ul>
                </div>
            </div>
            
            <p className="text-sm text-foreground/70 mt-6 italic">
              * El plan partner y exclusive partner se pueden ajustar según las necesidades específicas de cada empresa.*
            </p>
            
            <div className="mt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">💬 Contacto</h2>
              <p className="text-white">
                Si les interesa ser sponsors, contactar a <a href="mailto:joaquin@platan.us" className="text-primary underline hover:no-underline">joaquin@platan.us</a>
              </p>
            </div>
          </ContentSection>

            {/* Logo below pictures */}
            <div className="flex justify-center mt-2 mb-8">
            <div className="w-64 h-64 lg:w-96 lg:h-96">
              <img src="/lovable-uploads/0f3371ba-2aa4-4033-85b0-6985b333647d.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>
      </main>
    </div>;
};
export default Index;