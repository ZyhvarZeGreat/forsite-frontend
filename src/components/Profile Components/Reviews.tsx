import React from "react";
import rating from "../../assets/Frame 289.png";
import img1 from "../../assets/home images/home1.jpg";
import img2 from "../../assets/home images/home2.jpg";
import img3 from "../../assets/home images/home3.jpg";
import img4 from "../../assets/home images/home4.jpg";
import img5 from "../../assets/home images/home5.jpg";
import img6 from "../../assets/home images/home6.jpg";
const Reviews = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="w-full max-w-[1440px] gap-16 flex flex-col">
      <div className="w-full flex gap-4 text-start flex-col">
        <h1 className="text-2xl font-medium ">Review Photos</h1>
        <div className="w-full grid grid-cols-6 gap-4 mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="h-48 w-full object-cover col-span-1 bg-gray-200 rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="flex w-full text-xl items-start justify-between">
          <div className="flex items-center text-xl gap-2">
            <p> Sort By </p>
            <select className="border border-gray-300 rounded-md px-2 py-1">
              <option value="recent">Most Recent</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
              <option value="relevant">Most Relevant</option>
            </select>
          </div>
          <div>
            <p>View More Reviews</p>
          </div>
        </div>

        <div className="w-full grid grid-cols-4  gap-6 mt-8 mb-32">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9]  items-start text-start h-64 border border-gray-300 rounded-lg p-6 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <img className="w-24" src={rating} alt="Rating" />
              </div>
              <h2 className="text-base font-bold">Corporate Events</h2>
              <p className="text-sm font-medium  text-gray-600">
                John Doe reviewed on May 15, 2023
              </p>
              <p className="text-[14px] ">
                Exceptional service for our corporate event. The team was
                professional, attentive, and went above and beyond to ensure
                everything ran smoothly. Highly recommend for any business
                function.
              </p>
            </div>
          ))}
        </div>

        {/* Content for the new div goes here */}
      </div>
    </div>
  );
};

export default Reviews;
