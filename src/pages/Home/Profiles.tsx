import Portfolio from "../../components/Profile Components/Portfolio";
import Reviews from "../../components/Profile Components/Reviews";
import Bottom_CTA from "../../Reusables/Bottom_CTA";
const Profiles = () => {
  return (
    <div className="w-full mt-6">
      <div className="w-full flex flex-col items-center justify-center gap-16">
        <Portfolio />
        {/* <ProductandServices /> */}
        <Reviews />
        <Bottom_CTA />
      </div>
    </div>
  );
};

export default Profiles;
