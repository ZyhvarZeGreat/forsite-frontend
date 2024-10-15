import React from "react";
import img from "../../assets/portfolio.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import rating from "../../assets/Frame 289.png";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import Bottom_CTA from "../../Reusables/Bottom_CTA";
const Portfolio = () => {
  const ratings = [
    {
      title: "Communication",
      stars: rating,
      rating: 4.6,
    },
    {
      title: "Flexibility",
      stars: rating,
      rating: 4.2,
    },

    {
      title: "Professionalism",
      stars: rating,
      rating: 4.3,
    },
    {
      title: "Quality of Service",
      stars: rating,
      rating: 4.8,
    },
    {
      title: "Creativity",
      stars: rating,
      rating: 4.5,
    },
  ];
  const works = [
    {
      artist: "The BET Awards",
      type: "Award Show",
      art: img,
    },
    {
      artist: "A Formal Affair",
      type: "Wedding planning",
      art: img,
    },
    {
      artist: "Stella is one!",
      type: "Birthday Planning",
      art: img,
    },
    {
      artist: "Waka Waka Beach Launch",
      type: "Launch",
      art: img,
    },
  ];
  return (
    <div className="w-full flex items-center justify-center flex-col gap-8">
      <div className="max-w-[1240px] mb-32 w-full flex flex-col">
        <div className="w-full h-[963px] my-12   relative">
          <img
            src={img}
            alt=""
            className="w-full rounded-xl h-full object-cover"
          />
          <div className="absolute     inset-0 flex items-end justify-start ">
            <div className="flex flex-col z-20 items-start p-16 justify-center gap-4">
              <h1 className="text-4xl  font-bold text-white">
                Eko Atlantic Project
              </h1>
              <p className="text-white font-normal text-center">
                A detailed description project presentation
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-transparent backdrop-blur-xl text-white border border-white px-4 py-2 rounded-md">
                  Procurement
                </div>
                <div className="bg-transparent backdrop-blur-xl text-white border border-white px-4 py-2 rounded-md">
                  Water Proofing
                </div>
                <div className="bg-transparent backdrop-blur-xl text-white border border-white px-4 py-2 rounded-md">
                  Lagos
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 sm:flex-row w-full items-center justify-between">
          <div className="flex w-1/2 flex-col text-start gap-4">
            <h3 className="text-3xl font-semibold">
              Introduction to the project and value proposition
            </h3>
            <p>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor.
            </p>
          </div>
          <div className="w-1/2 h-[406px] flex items-center justify-center">
            <img
              src={img2}
              className="w-[505px] object-cover  h-full bg-red-500 rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-16 mt-32 sm:flex-row-reverse w-full items-center justify-between">
          <div className="flex w-1/2 flex-col text-start gap-4">
            <h3 className="text-3xl font-semibold">Project Specifications</h3>
            <p>
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor.
            </p>
          </div>
          <div className="w-1/2  h-[406px] flex  justify-start">
            <img
              src={img3}
              className="w-full object-cover  h-full  rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-48 gap-12 items-center justify-center">
          <h1 className="text-3xl font-semibold">Gallery Section</h1>

          <div className="relative">
            <div className="flex items-center justify-center">
              <img
                src={img}
                className="w-full object-cover h-full rounded-xl"
              />
            </div>
            <div className="absolute bottom-[-80px] left-0 right-0 flex flex-wrap justify-center gap-4">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-1/6 bg-white  rounded-xl shadow-md"
                >
                  <img
                    src={img}
                    className="w-full object-cover h-full rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-64 gap-12 items-center justify-center">
          <div className="flex flex-col w-full gap-4">
            <div className="flex  gap-4">
              <div className="w-[55%] flex p-6 gap-6 items flex-col bg-[#F9F9F9] rounded-xl">
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-2xl font-medium">Comments</h1>
                  <button className="text-xl  font-normal text-red-500">
                    See All
                  </button>
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col text-start mt-6">
                    <div className="flex text-start items-center gap-4">
                      <img
                        src={img}
                        alt="Avatar"
                        className="w-16 object-cover h-16 rounded-full"
                      />
                      <div className=" flex flex-col items-start text-start">
                        <h3 className="font-medium text-lg">John Doe</h3>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <p className="mt-2 font-medium text-gray-700">
                      This project looks amazing! The attention to detail and
                      the user interface design are truly impressive
                    </p>
                  </div>
                  <div className="flex flex-col text-start mt-6">
                    <div className="flex text-start items-center gap-4">
                      <img
                        src={img}
                        alt="Avatar"
                        className="w-16 object-cover h-16 rounded-full"
                      />
                      <div className=" flex flex-col items-start text-start">
                        <h3 className="font-medium text-lg">John Doe</h3>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <p className="mt-2 font-medium text-gray-700">
                      This project looks amazing! The attention to detail and
                      the user interface design are truly impressive
                    </p>
                  </div>
                  <div className="flex flex-col text-start mt-6">
                    <div className="flex text-start items-center gap-4">
                      <img
                        src={img}
                        alt="Avatar"
                        className="w-16 object-cover h-16 rounded-full"
                      />
                      <div className=" flex flex-col items-start text-start">
                        <h3 className="font-medium text-lg">John Doe</h3>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <p className="mt-2 font-medium text-gray-700">
                      This project looks amazing! The attention to detail and
                      the user interface design are truly impressive
                    </p>
                  </div>
                </div>
                <div className="w-full flex  items-center gap-4">
                  <div className="flex text-start items-center gap-4">
                    <img
                      src={img}
                      alt="Avatar"
                      className="w-16 object-cover h-16 rounded-full"
                    />
                  </div>
                  <div className="w-full h-14 items-center flex gap-4">
                    <Input
                      className="h-full"
                      placeholder="Write a comment on this project"
                    />
                    <Button className="bg-red-500 h-full w-[100px]">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[45%] gap-6 p-6 flex items flex-col  bg-[#F9F9F9] rounded-xl">
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-2xl font-medium">
                    Review from project client
                  </h1>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex text-start items-center gap-4">
                    <img
                      src={img}
                      alt="Avatar"
                      className="w-16 object-cover h-16 rounded-full"
                    />
                    <div className=" flex flex-col items-start text-start">
                      <img className="w-32" src={rating} />
                      <h3 className="font-medium text-2xl">John Doe</h3>
                      <p className="text-lg text-gray-500">
                        Posted on 19 Jun 2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 self-center items-center justify-center w-full gap-1">
                  {ratings.map((rating, i) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col col-span-1 bg-[#F9F9F9]  rounded-lg items-start py-4 gap-2"
                      >
                        <p className="  text-base font-medium">
                          {rating.title}
                        </p>
                        <div className="flex items-center   gap-2">
                          <img className="w-16" src={rating.stars} />
                          <p className="font-semibold text-base">
                            {rating.rating}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full font-medium text-start">
                  <p>
                    The wedding was a huge success thanks to [event planner's
                    name] and her team. Our guests were absolutely blown away by
                    the stunning setting, the exceptional service, and the
                    overall experience. I would highly recommend [event
                    planner's name] to anyone looking for a talented and
                    dedicated event planner. She truly made our wedding day a
                    dream come true{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-32 mb-32 items-start flex flex-col gap-12 max-w-[1440px]">
          <h3 className="text-4xl font-medium">Product Service</h3>
          <ScrollArea className="w-full whitespace-nowrap rounded-md ">
            <div className="flex w-max space-x-4 ">
              {works.map((artwork, i) => (
                <figure key={i} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={artwork.art}
                      alt={`Photo by ${artwork.artist}`}
                      className="aspect-[3/4] w-[287px] h-[295px] object-cover"
                      width={"295"}
                      height={"287"}
                    />
                  </div>
                  <figcaption className="pt-2 w-full flex  px-2 items-start text-xs text-muted-foreground">
                    <div className="  text-start flex flex-col">
                      <p className="text-black text-xl font-semibold">
                        {" "}
                        {artwork.artist}{" "}
                      </p>
                      <p className="font-medium text-[#4B5B65]">
                        {artwork.type}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <Bottom_CTA />
    </div>
  );
};

export default Portfolio;
