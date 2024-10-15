import Hero from "../../components/Home Components/Hero";
// import Search from "../../components/Home Components/Search";
import Activites from "../../components/Home Components/Sections/Activites";
import Demo from "../../components/Home Components/Sections/Demo";
import Process from "../../components/Home Components/Sections/Process";
import Purpose from "../../components/Home Components/Sections/Purpose";
import Testimonials from "../../components/Home Components/Sections/Testimonials";
const Home = () => {
  return (
    <div className="w-full px-6 xl:px-0    gap-12 mt-10   flex items-center justify-center flex-col">
      <Hero />

      <Purpose />
      <Activites />
      <Process />
      <Testimonials />
      <Demo />
    </div>
  );
};

export default Home;
