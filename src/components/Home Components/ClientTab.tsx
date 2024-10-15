import tab1 from "../../assets/tab1.png";
import tab2 from "../../assets/tab2.png";
import tab3 from "../../assets/tab3.png";
const ClientTab = () => {
  return (
    <div className=" flex w-full flex-col gap-24 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-semibold">Streamline your EPC with COG</h3>
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-24">
        <div className=" flex gap-6 flex-col lg:flex-row items-center justify-between w-full  ">
          <div className="flex font-medium  w-full lg:w-1/3  text-center lg:text-start flex-col items-center lg:items-start gap-4">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center rounded-full bg-[#386A8B] text-white">
              1
            </div>
            <h3 className="text-2xl">Sign Up and Onboarding</h3>
            <p className="leading-relaxed">
              Create an account on the platform by providing necessary details
              about your firm. Complete the onboarding process, including
              verifying your credentials and expertise.
            </p>
          </div>
          <div className=" w-full lg:w-1/3 flex items-center justify-center lg:justify-start">
            <img className="w-[150px]" src={tab1} />
          </div>
        </div>
        <div className=" flex gap-6 flex-col items-center justify-between lg:flex-row-reverse w-full  ">
          <div className="flex font-medium  w-full lg:w-1/3  text-center lg:text-start flex-col items-center lg:items-start gap-4">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center rounded-full bg-[#386A8B] text-white">
              2
            </div>
            <h3 className="text-2xl">Customize Your Profile</h3>
            <p className="leading-relaxed">
              Personalize your firm's profile by adding relevant information
              such as specialization, past projects, and notable achievements.
              Showcase your expertise and highlight what sets your firm apart
              from others.
            </p>
          </div>
          <div className=" w-full lg:w-1/3 flex items-center justify-center">
            <img className="w-[150px]" src={tab2} />
          </div>
        </div>
        <div className=" flex gap-6 flex-col lg:flex-row items-center w-full justify-between  ">
          <div className="flex font-medium  w-full lg:w-1/3  text-center lg:text-start flex-col items-center lg:items-start gap-4">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center rounded-full bg-[#386A8B] text-white">
              3
            </div>
            <h3 className="text-2xl">Pre and In Project Management</h3>
            <p className="leading-relaxed">
              Receive inquiries from potential clients through the platform's
              proposal generation system. Review and respond to inquiries
              promptly, providing initial information, bids and establishing
              communication.
            </p>
          </div>
          <div className=" w-full lg:w-1/3 flex items-center justify-center lg:justify-start">
            <img className="w-[150px]" src={tab3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTab;
