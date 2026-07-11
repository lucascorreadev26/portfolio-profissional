import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Projetcs from "../../sections/Projects/Projetcs";
import Tech from "../../sections/Tech/Tech";

const Main = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="projects">
        <Projetcs />
      </section>
    </main>
  );
};

export default Main;
