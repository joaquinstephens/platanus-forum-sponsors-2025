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
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 flex items-center gap-3">
                <img src="/lovable-uploads/e9ec9899-0f84-4b12-9ac6-b81c4d9b51ca.png" alt="Platanus Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                Platanus Forum '25
              </h1>
            </div>
          </ContentSection>

          {/* Invitation Text */}
          <ContentSection id="invitation" className="mb-8">
            <div className="space-y-4">
              <p className="text-inherit font-normal">
                If you're reading this, it's because you were invited by <a href="https://platan.us/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Platanus</a> to a gathering in the southernmost country on the planet.
              </p>
         <div className="flex justify-end -mt-4 mb-4 pr-4 sm:pr-8 md:pr-16 lg:pr-28">
           <img
             src="/assets/buthiperconected.svg"
             alt="But hyper-connected thanks to the world's second-fastest internet"
             className="max-h-12 sm:max-h-14 md:max-h-16 w-auto mr-2 sm:mr-4 md:mr-6 lg:mr-8 text-primary"
             style={{ filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor)' }}
           />
         </div>
              <img src="/lovable-uploads/e406049f-08d8-4fb0-96be-647dc626caac.png" alt="Evening campfire gathering in the Andes" className="w-full object-cover rounded-lg" />
            </div>
          </ContentSection>

          {/* About us */}
          <ContentSection id="nosotros">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">A bit About Us</h2>
            <p className="font-normal text-inherit">
              Throughout history, there have been certain space-time clusters where genius concentrates. 
              Think Athens in the 4th century BC, Florence in the 15th, London in the 16th, or Silicon Valley now for tech and startups.
            </p>
            <p className="font-normal text-inherit">
              The reasons for this kind of excess of genius are complex, but we believe a key factor is the gathering of talented people exploring ideas and building new things. 
              This spirit is contagious, creating a positive feedback loop. Ideas get shared and improved, while talent attracts more talent.
            </p>
            <p className="text-base font-normal text-inherit">
              At Platanus, our focus is to spark a nucleus of concentrated genius in Latam’s tech ecosystem. 
              Specifically, we see three paths leading us there:
            </p>
            
            <ol className="space-y-6 mt-6 list-none pl-2 sm:pl-6">
              <li className="font-normal text-inherit">
                <span className="text-primary font-normal">1. <img src="/assets/Ad.svg" alt="Ad" className="inline-block max-h-6 sm:max-h-8 md:max-h-10 w-auto mx-1 -mt-1 text-primary" style={{ filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor)' }} /> Venture Capital:</span> We need more talent to enter the tech world, and that requires venture funding. Latam needs less of a private-equity mindset and more of the exploratory, risk-taking mentality that's still called adventure capital. That's why we invest pre-seed, pre-product, with tickets between $50k–$250k.
              </li>
              
              <li className="font-normal text-inherit">
                <span className="text-primary font-normal">2. The Initial Push:</span> To take startups from 0 to 1, we designed a three-month program that builds urgency and accountability through Latam’s tier-1 founders. Healthy peer competition brings out the best in founders.
              </li>
            </ol>
          </ContentSection>

          {/* Mentor carousel - full width outside max-w-3xl constraint */}
          <div className="w-full overflow-hidden relative mt-6 mb-4">
            {/* Fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            <div className="flex gap-4 sm:gap-6 lg:gap-8" style={{
            animation: 'scroll-mentors 40s linear infinite',
            width: 'fit-content'
          }}>
                       {/* First set of mentors */}
                       <a href="https://www.linkedin.com/in/jpcuevas/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                         <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                           <img src="/lovable-uploads/c2bcd5e5-a377-481c-a355-fb55e6ee9dbc.png" alt="Juan Pablo Cuevas" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                         </div>
                          <p className="text-xs font-normal text-primary text-center mb-1">Juan Pablo Cuevas</p>
                           <p className="text-xs font-normal text-inherit text-center">Cornershop by Uber</p>
                        </a>
                        <a href="https://www.linkedin.com/in/matamalaortiz/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/9e4d3314-470f-4b6f-b89a-0bef10eb69bd.png" alt="Alejandro Matamala" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Alejandro Matamala</p>
                           <p className="text-xs font-normal text-inherit text-center">Runway</p>
                        </a>
                        <a href="https://www.linkedin.com/in/carogargon/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/d5cbc289-1d67-40bd-93ca-44832e795224.png" alt="Carolina Garcia" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Carolina Garcia</p>
                           <p className="text-xs font-normal text-inherit text-center">Chiper</p>
                        </a>
                        <a href="https://www.linkedin.com/in/cristina-etcheberry-toku/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/21e6e5db-74e9-4e5d-966f-79be402d9414.png" alt="Cristina Etcheberry" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Cristina Etcheberry</p>
                           <p className="text-xs font-normal text-inherit text-center">Toku</p>
                        </a>
                        <a href="https://www.linkedin.com/in/helena-polyblank/?originalSubdomain=mx" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/d88630cb-b2f6-489b-acb5-7dbf9de75ff0.png" alt="Helena Polyblank" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Helena Polyblank</p>
                           <p className="text-xs font-normal text-inherit text-center">Mendel</p>
                        </a>
                        <a href="https://www.linkedin.com/in/inigorumayor/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/cd97348a-0d9d-4b9b-9a34-c7a06cd44484.png" alt="Iñigo Rumayor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Iñigo Rumayor</p>
                           <p className="text-xs font-normal text-inherit text-center">Arcus</p>
                        </a>
                        <a href="https://www.linkedin.com/in/jaime-arrieta-boetsch-ab214150/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/f16b08ff-2ca9-438d-a1b5-68c3a3b166d9.png" alt="Jaime Arrieta" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Jaime Arrieta</p>
                           <p className="text-xs font-normal text-inherit text-center">Buk</p>
                        </a>
                        <a href="https://www.linkedin.com/in/pedro-pineda-fintual/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.png" alt="Pedro Pineda" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Pedro Pineda</p>
                           <p className="text-xs font-normal text-inherit text-center">Fintual</p>
                        </a>
                        <a href="https://www.linkedin.com/in/rodolfodanino/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/5ef1b37a-2f65-435e-98ab-c8d1f7ce26fb.png" alt="Rodolfo Dañino" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Rodolfo Dañino</p>
                           <p className="text-xs font-normal text-inherit text-center">Crehana</p>
                       </a>
                      
                       {/* Duplicate set for seamless loop */}
                        <a href="https://www.linkedin.com/in/jpcuevas/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/c2bcd5e5-a377-481c-a355-fb55e6ee9dbc.png" alt="Juan Pablo Cuevas" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                          <p className="text-xs font-normal text-primary text-center mb-1">Juan Pablo Cuevas</p>
                           <p className="text-xs font-normal text-inherit text-center">Cornershop by Uber</p>
                        </a>
                        <a href="https://www.linkedin.com/in/matamalaortiz/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/9e4d3314-470f-4b6f-b89a-0bef10eb69bd.png" alt="Alejandro Matamala" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Alejandro Matamala</p>
                           <p className="text-xs font-normal text-inherit text-center">Runway</p>
                        </a>
                        <a href="https://www.linkedin.com/in/carogargon/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/d5cbc289-1d67-40bd-93ca-44832e795224.png" alt="Carolina Garcia" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Carolina Garcia</p>
                           <p className="text-xs font-normal text-inherit text-center">Chiper</p>
                        </a>
                        <a href="https://www.linkedin.com/in/cristina-etcheberry-toku/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/21e6e5db-74e9-4e5d-966f-79be402d9414.png" alt="Cristina Etcheberry" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Cristina Etcheberry</p>
                           <p className="text-xs font-normal text-inherit text-center">Toku</p>
                        </a>
                        <a href="https://www.linkedin.com/in/helena-polyblank/?originalSubdomain=mx" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/d88630cb-b2f6-489b-acb5-7dbf9de75ff0.png" alt="Helena Polyblank" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Helena Polyblank</p>
                           <p className="text-xs font-normal text-inherit text-center">Mendel</p>
                        </a>
                        <a href="https://www.linkedin.com/in/inigorumayor/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/cd97348a-0d9d-4b9b-9a34-c7a06cd44484.png" alt="Iñigo Rumayor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Iñigo Rumayor</p>
                           <p className="text-xs font-normal text-inherit text-center">Arcus</p>
                        </a>
                        <a href="https://www.linkedin.com/in/jaime-arrieta-boetsch-ab214150/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/f16b08ff-2ca9-438d-a1b5-68c3a3b166d9.png" alt="Jaime Arrieta" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Jaime Arrieta</p>
                           <p className="text-xs font-normal text-inherit text-center">Buk</p>
                        </a>
                        <a href="https://www.linkedin.com/in/pedro-pineda-fintual/?originalSubdomain=cl" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/0a9f992e-3a71-45e6-aebe-612eb9c3aeee.png" alt="Pedro Pineda" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Pedro Pineda</p>
                           <p className="text-xs font-normal text-inherit text-center">Fintual</p>
                        </a>
                        <a href="https://www.linkedin.com/in/rodolfodanino/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                          <div className="w-30 h-30 rounded-full overflow-hidden mb-2">
                            <img src="/lovable-uploads/5ef1b37a-2f65-435e-98ab-c8d1f7ce26fb.png" alt="Rodolfo Dañino" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                          </div>
                           <p className="text-xs font-normal text-primary text-center mb-1">Rodolfo Dañino</p>
                           <p className="text-xs font-normal text-inherit text-center">Crehana</p>
                       </a>
            </div>
             <p className="text-center text-sm font-normal text-inherit mt-4">
               Platanus mentors backing new founders.
             </p>
           </div>

           <ContentSection id="nosotros-continued">
             <ol className="space-y-6 mt-6 list-none pl-6">
               <li className="font-normal text-inherit">
                 <span className="text-primary font-normal">3. Networks:</span> In the earliest stages, surrounding yourself with ambitious people is key. That’s the environment where the best startups are born. We’ve built a highly curated community of exceptional founders, with 40% of them being techies.
               </li>
             </ol>

             <p className="text-inherit font-normal mt-8">
               Since 2020, we’ve invested in <span className="font-normal text-inherit">114 startups</span> across{" "}
               <span className="font-normal text-inherit">10 countries</span>, with a selection rate of less than{" "}
               <span className="text-inherit font-normal">1%</span>.
             </p>
             <div className="mt-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-8 md:gap-12 lg:gap-16">
               <p className="font-normal text-inherit">
                 Funds that have invested <span className="text-primary font-normal text-base">after</span> us:
               </p>
               <img src="/assets/socialproof.svg" alt="Social proof" className="max-h-16 sm:max-h-20 md:max-h-24 w-auto -mt-2 text-primary" style={{ transform: 'rotate(-7deg)', filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor)' }} />
            </div>
            
            <div className="mt-6">
              <div className="w-full max-w-5xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {/* Row 1 */}
                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/fb1e564e-7003-4c03-b5fc-1468a3db1fe9.png" alt="Bessemer Venture Partners" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/8b57f18d-6a8b-42f7-aa6d-03a1f95df7c0.png" alt="Clocktower Technology Ventures" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/fae394fd-0a3a-465a-a255-1cb2cab3abdc.png" alt="F7Prime" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/237c58b5-1181-4d80-9402-86fba20b5719.png" alt="General Catalyst" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/f3226719-32ad-4dee-b492-f7496248e59e.png" alt="Gradient" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/07ea4355-122f-4eed-a677-c418a379e497.png" alt="Hi Ventures" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/890ad7ac-f7ba-4eb5-9674-f5fcbaba037c.png" alt="Hustle Fund" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/5bb51794-5d81-41c3-a05f-b3476b49b568.png" alt="Oak HC/FT" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/c1613880-cae3-4ee6-8e7e-e105c927b455.png" alt="Monashees+" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/3e013926-c502-4d1f-9233-ac173326bfe1.png" alt="Propel" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/097f3a61-2dfb-4d7d-9e7a-57450fe423d8.png" alt="Wollef" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center p-1">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex items-center justify-center bg-white p-3">
                      <img src="/lovable-uploads/05e711ad-442b-4238-9629-bd54b8726f37.png" alt="Y Combinator" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentSection>

          {/* Platanus Forum */}
          <ContentSection id="forum">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">Platanus Forum</h2>
             <p className="font-normal text-inherit">
               Most tech events in Latam have plenty of <em>event </em>
               but not much <em>tech</em>. Attendees are usually investors, corporates, or ex-founders now making the conference circuit.
             </p>
             <p className="font-normal text-inherit">
               At Platanus Forum, we bring together our community and aim to import to Santiago a few cells of Silicon Valley—people at the tech frontier, with fresh ideas and actively building interesting things.
             </p>
             
              <div className="mt-8">
              
              <div className="bg-primary/20 border border-primary/40 rounded-lg p-4 sm:p-6 mt-6 mb-0 relative shadow-lg shadow-primary/10">
                <p className="text-inherit font-normal">
                  Platanus Forum will take place on Thursday, November 20th, from 09:00 to 18:00, featuring <span className="relative">speakers<img src="/assets/asterisco_clean_cropped.svg" alt="Asterisk" className="absolute -top-2 right-0 max-h-4 sm:max-h-3 md:max-h-4 w-auto text-primary" style={{ filter: 'drop-shadow(0 0 1px currentColor) drop-shadow(0 0 1px currentColor) drop-shadow(0 0 1px currentColor) drop-shadow(0 0 2px currentColor)' }} /></span>, lunches, themed conversations and a closing gathering.
                </p>
              </div>
              <div className="flex justify-end gap-1 sm:gap-2 mt-2">
                <img src="/assets/asterisco_clean_cropped.svg" alt="Asterisk" className="max-h-4 sm:max-h-5 md:max-h-6 w-auto text-primary" style={{ filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor)' }} />
                <img src="/assets/thiscouldbeyou.svg" alt="This could be you" className="max-h-8 sm:max-h-10 md:max-h-12 w-auto text-primary" style={{ filter: 'drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor) drop-shadow(0 0 0.5px currentColor)' }} />
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 mt-6">Last Year's Event</h2>

               <p className="font-normal text-inherit mt-6 mb-4">
                 In 2024 we gathered 200+ people, including our founders, investors, and friends. The main theme turned out to be mining (a major topic in Chile), and we brought in founders from:
               </p>
               <ul className="space-y-2 mb-6 list-disc ml-2 sm:ml-6">
                 <li className="font-normal text-inherit">
                   <a href="https://platan-dot-yamm-track.appspot.com/2knOWeIKG8tgZvQLga0F1xT31MTTvGW1mRBbuEXRalan4qc5GlAEItVS7ykkdaQLb3pwnReW47cGXocMrVggivsKF4mCpGhkkDSf0K8_---fp6bu_16qogE2KO4csBjWNMRl8PB3wxKmPl7dmnNCYcAtgOmCvJEx7WM-nWFdpmELnOpMu" className="text-primary underline decoration-primary">AstroForge</a>: asteroid mining.
                 </li>
                 <li className="font-normal text-inherit">
                   <a href="https://platan-dot-yamm-track.appspot.com/2f_z8Ivpnzt0o4B7Ivc2HijGTnLJha9bi2yf5FTzzQaEBqs5GlAGVnvbvICwUEoAF47AcsqI-5l3H-0kva_dsl_VJ4QaKsVhVfkvwZMUBgA9As3yKMpYO-u87dFJ6A85_B04ILBwAzWuv3rO2j6mQz1Vy71YefIksuX2wMmwHspo" className="text-primary underline decoration-primary">EarthAI</a>: AI for exploration and drilling.
                 </li>
                 <li className="font-normal text-inherit">
                   <a href="https://platan-dot-yamm-track.appspot.com/2VR8TYLuAA7D4dJSzsrbC_DugvG99wrLX7y0zHYh1izQDqs5GlAFjB3jPIpfaL91juTy4Z2ysJJ-mL7UN3vAqps45gUGTmgPGDCWpq-xjfHJhg2BjR1L3cDXP3xAuJ9oD_6G9hJ9wjOxzzZIpnQfDzcTCDpnqWv47FH3ET4SgmRin_eR6H71K5A" className="text-primary underline decoration-primary">Maverick Biometals</a>: metal extraction and processing with biotechnology.
                 </li>
               </ul>
               <p className="font-normal text-inherit mb-4">
                 Attendees included:
               </p>
               <ul className="space-y-3 mb-6 list-disc ml-2 sm:ml-6">
                 <li className="font-normal text-inherit">
                   <span className="text-primary font-normal">Platanus Founders:</span> today our community is 300 founders from 10 Latam countries, plus the US and Europe.
                 </li>
                 <li className="font-normal text-inherit">
                   <span className="text-primary font-normal">Investors:</span> our LPs (large family offices, HNWIs, and founders), other VC funds, and angels.
                 </li>
                 <li className="font-normal text-inherit">
                   <span className="text-primary font-normal">Friends of Platanus:</span> mentors, other founders, prospective LPs, and generally interesting people to meet.
                 </li>
              </ul>
               <p className="font-normal text-inherit mb-6">
                  For 2025, there won’t be a single central theme, but we’d love to dive into AI and unusual industries for Latam, like nuclear energy deep tech.
               </p>

              {/* Vertical Carousel */}
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

              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 mt-8">Chile Tech Week</h2>
               <p className="font-normal text-inherit mb-4">
                 Platanus Forum takes place during Chile Tech Week, which runs from Monday, November 17th to Sunday, November 23rd.
               </p>
             <p className="font-normal text-inherit mb-4">
               That week brings together VCs and founders from across Latam—perfect for building a packed agenda.
             </p>
             <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Parallel Agenda</h2>
             <p className="font-normal text-inherit mb-4">
               Chile is a small country population-wise, but we’re fortunate to have the right connections. 
               It’s also one of the best places in Latam to do business and innovate.
             </p>
             <p className="font-normal text-inherit mb-6">
               To make the most of your trip, we can connect you and arrange meetings with whoever you’d like: corporates, investors, funds, government, legislators, founders, foundations—you name it.
             </p>

             <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Bonus: Riding the Andes</h2>
             <p className="font-normal text-inherit mb-4">
               The best conversations don’t happen in transactional settings like events and conferences; they happen in relaxed environments, like a walk or a horseback ride.
             </p>
             <p className="font-normal text-inherit mb-6">
               Since no trip to Chile is complete without the mountains, we’re organizing a two-day, one-night horseback expedition in the Andes.
             </p>
             <p className="font-normal text-inherit mb-6">
               We’re keeping it small—10 to 15 people, a mix of invited founders and other fascinating folks. We expect plenty of good conversations, asados, stunning landscapes, and a night under some of the world’s starriest skies.
             </p>

            {/* Horseback riding images grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 mb-8">
              <img src="/lovable-uploads/e406049f-08d8-4fb0-96be-647dc626caac.png" alt="Evening campfire gathering in the Andes" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                src: "/lovable-uploads/e406049f-08d8-4fb0-96be-647dc626caac.png",
                alt: "Evening campfire gathering in the Andes"
              })} />
              <img src="/lovable-uploads/f694ef5e-7936-469e-a570-5b7d93eafe0d.png" alt="Horseback riders under moonlight in the Andes" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                src: "/lovable-uploads/f694ef5e-7936-469e-a570-5b7d93eafe0d.png",
                alt: "Horseback riders under moonlight in the Andes"
              })} />
              <img src="/lovable-uploads/73cd8f23-4bb0-41bc-8791-2a3a77e76a57.png" alt="Aerial view of horseback trail through Andes mountains" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                src: "/lovable-uploads/73cd8f23-4bb0-41bc-8791-2a3a77e76a57.png",
                alt: "Aerial view of horseback trail through Andes mountains"
              })} />
              <img src="/lovable-uploads/b0fe2f32-a647-454a-8c00-215d787a9554.png" alt="Pack animals and riders in Andes mountain landscape" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                src: "/lovable-uploads/b0fe2f32-a647-454a-8c00-215d787a9554.png",
                alt: "Pack animals and riders in Andes mountain landscape"
              })} />
              <img src="/lovable-uploads/85ef3029-4974-4072-81ea-b9c8ab1019ef.png" alt="Traditional outdoor meal setup during horseback expedition" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                src: "/lovable-uploads/85ef3029-4974-4072-81ea-b9c8ab1019ef.png",
                alt: "Traditional outdoor meal setup during horseback expedition"
              })} />
              <img src="/lovable-uploads/2def10e0-7ce8-4976-8051-a0698c344350.png" alt="Horseback riders exploring green Andes countryside" className="w-full h-32 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:scale-105" onClick={() => setSelectedImage({
                src: "/lovable-uploads/2def10e0-7ce8-4976-8051-a0698c344350.png",
                alt: "Horseback riders exploring green Andes countryside"
              })} />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Invitation</h2>
            <p className="font-normal text-inherit mb-4">
              We'd love to have you join as a speaker for Platanus Forum 2025, and also for the horseback expedition if you can.
            </p>
            <p className="font-normal text-inherit mb-4">
              <strong>Dates:</strong>
            </p>
            <ul className="list-disc list-inside font-normal text-inherit mb-4 ml-4">
              <li><span className="text-primary">Platanus Forum</span>: Thursday, November 20th (all day).</li>
              <li><span className="text-primary">Horseback Expedition</span>: Saturday 22nd – Sunday 23rd.</li>
              <li><span className="text-primary">Chile Tech Week</span>: Monday 17th – Sunday 23rd.</li>
            </ul>
            <p className="font-normal text-inherit mb-8">
              We'll cover plane tickets, transport, lodging, and the expedition.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Confirmed Attendees for 2025</h2>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center mb-8 items-center">
              <a href="https://www.linkedin.com/in/ignacio-belieres-montero-14b457b6/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 sm:w-48 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-3">
                  <img src="/lovable-uploads/4ca3c16b-eb9a-4fb0-a1a9-f6b1174d0aec.png" alt="Ignacio Belieres" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <p className="text-sm sm:text-base font-medium text-primary text-center mb-1">Ignacio Belieres</p>
                <p className="text-sm font-normal text-inherit text-center">Epic Aerospace</p>
              </a>
              <a href="https://www.linkedin.com/in/roman-teslyuk-a344881a/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-40 sm:w-48 flex flex-col items-center p-2 hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-3">
                  <img src="/lovable-uploads/3add01c8-aff6-4ac5-b726-588ba0a5cd4a.png" alt="Roman Teslyuk" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <p className="text-sm sm:text-base font-normal text-primary text-center mb-1">Roman Teslyuk</p>
                <p className="text-sm font-normal text-inherit text-center">Earth AI</p>
              </a>
            </div>
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