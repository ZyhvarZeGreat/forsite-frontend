const ClientTab = () => {
  return (
    <div className=" flex w-full flex-col gap-24 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-semibold">Streamline your EPC with COG</h3>
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-24">
        <div className=" flex items-center w-full  ">
          <div className="flex font-medium w-1/3 text-start flex-col items-start gap-4">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center rounded-full bg-[#386A8B] text-white">
              1
            </div>
            <h3 className="text-2xl">Sign Up and Onboarding</h3>
            <p>
              Create an account on the platform by providing necessary details
              about your firm. Complete the onboarding process, including
              verifying your credentials and expertise.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-row-reverse w-full  ">
          <div className="flex font-medium w-1/3 text-start flex-col items-start gap-4">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center rounded-full bg-[#386A8B] text-white">
              2
            </div>
            <h3 className="text-2xl">Customize Your Profile</h3>
            <p>
              Personalize your firm's profile by adding relevant information
              such as specialization, past projects, and notable achievements.
              Showcase your expertise and highlight what sets your firm apart
              from others.
            </p>
          </div>
        </div>
        <div className=" flex items-center w-full  ">
          <div className="flex font-medium w-1/3 text-start flex-col items-start gap-4">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center rounded-full bg-[#386A8B] text-white">
              3
            </div>
            <h3 className="text-2xl">Pre and In Project Management</h3>
            <p>
              Receive inquiries from potential clients through the platform's
              proposal generation system. Review and respond to inquiries
              promptly, providing initial information, bids and establishing
              communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTab;
