const Testimonials = () => {
  return (
    <div className=" h-[200px] xl:h-[400px] w-full bg-[#386A8B]">
      <div className="flex flex-col h-full gap-12 text-white items-center justify-center">
        <h3 className="text-3xl font-semibold">What Our Client Says</h3>
        <p className="text-xl w-1/2">
          “Usually, we have to manage our activities manually but we have now
          adopted this solution and this has allowed us to work even more
          collaboratively. Would recommend!”
        </p>
        <div className="flex text-xl gap-2 flex-col">
          <p>Abiodun Adedeji</p>
          <p>Commercial Development</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
