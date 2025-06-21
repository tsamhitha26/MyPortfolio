import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Samhitha</p>
            <p className="subtext">
              A curious and creative developer who brings ideas to life through code.
              I love building meaningful solutions, blending design and logic.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: Cards/Skills */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="OOPS" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="DBMS" containerRef={grid2Container} />
            <Card style={{ rotate: "-15deg", top: "20%", left: "60%" }} text="Machine Learning" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/java.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/Python.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/html.jpg" containerRef={grid2Container} />
            <Card style={{ rotate: "-20deg", top: "20%", left: "35%" }} image="assets/logos/css.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "55%", left: "10%" }} image="assets/logos/sql.png" containerRef={grid2Container} />
            <Card style={{ rotate: "15deg", top: "40%", left: "80%" }} image="assets/logos/javascript.jpeg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3: Time Zone */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I’m based in Hyderabad, India and available for remote work across the globe
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
                      <Globe />
                    </figure>
                  </div>

        {/* Grid 4: Contact */}
        <div className="relative md:col-span-2 grid-special-color">
          <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
            <p className="headtext">Let's build something impactful together.</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I work with modern languages and tools to develop reliable, scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
