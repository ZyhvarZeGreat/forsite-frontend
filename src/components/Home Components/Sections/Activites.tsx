import img1 from "../../../assets/home images/home1.jpg";
import img2 from "../../../assets/home images/home2.jpg";
import img3 from "../../../assets/home images/home3.jpg";
import img4 from "../../../assets/home images/home4.jpg";
import img5 from "../../../assets/home images/home5.jpg";

const Activites = () => {
  return (
    <div className=" w-full items-center flex gap-8 flex-col justify-center">
      <div className=" w-full max-w-[1366px] text-center flex items-center lg:items-start">
        <h3 className=" text-2xl sm:text-3xl mx-auto lg:mx-0 xl:text-4xl font-semibold">
          Our Recent Activities
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-5 gap-8  ">
        <img
          src={img1}
          className="w-full sm:w-[80%] mx-auto xl:mx-0 xl:w-full  col-span-1 rounded-md lg:rounded-none h-[250px] sm:h-[320px]  lg:h-[400px]  object-cover"
        />
        <img
          src={img2}
          className="w-full  sm:w-[80%] mx-auto xl:mx-0 xl:w-full col-span-1  rounded-md lg:rounded-none h-[250px] sm:h-[320px]  lg:h-[400px] object-cover"
        />
        <img
          src={img3}
          className="w-full  sm:w-[80%] mx-auto xl:mx-0 xl:w-full col-span-1  rounded-md lg:rounded-none h-[250px] sm:h-[320px]  lg:h-[400px] object-cover"
        />
        <img
          src={img4}
          className="w-full sm:w-[80%] mx-auto xl:mx-0 xl:w-full  col-span-1 rounded-md lg:rounded-none h-[250px] sm:h-[320px]  lg:h-[400px] object-cover"
        />
        <img
          src={img5}
          className="w-full sm:w-[80%] mx-auto xl:mx-0 xl:w-full  col-span-1 rounded-md lg:rounded-none h-[250px] sm:h-[320px]  lg:h-[400px] object-cover"
        />
        {/* <img src={img1} className="w-full col-span-1 object-cover" /> */}
      </div>
    </div>
  );
};

export default Activites;
