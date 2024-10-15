import img from "../../assets/hero.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Call, Global, Location, Sms } from "iconsax-react";
import { Button } from "../ui/button";

import rating from "../../assets/Frame 289.png";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
  const navigate = useNavigate();
  const services = [
    "Waterproof",
    "Swimming Pool",
    "Procurement",
    "Geotechnics",
    "Project management",
  ];
  const ratings = [
    {
      title: "Communication",
      stars: rating,
      rating: 4.6,
    },
    {
      title: "Quality of Service",
      stars: rating,
      rating: 4.8,
    },
    {
      title: "Professionalism",
      stars: rating,
      rating: 4.3,
    },
    {
      title: "Flexibility",
      stars: rating,
      rating: 4.2,
    },
    {
      title: "Creativity",
      stars: rating,
      rating: 4.5,
    },
  ];
  const works = [
    {
      artist: "Eko Hotel",
      art: img,
    },
    {
      artist: "location",
      art: img,
    },
    {
      artist: "location",
      art: img,
    },
    {
      artist: "location",
      art: img,
    },
    {
      artist: "location",
      art: img,
    },
  ];
  return (
    <div className="flex flex-col gap-8   items-center justify-center w-full">
      <div className="w-full flex-col  flex items-center justify-center">
        <div className="h-[240px] w-full ">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
      <div className="flex items-center  w-full justify-between max-w-[1440px]">
        <div className="flex items-center justify-center gap-8">
          <Avatar className="w-[140px] h-[140px]">
            <AvatarImage src={img} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex text-start gap-2 flex-col">
            <h3 className="text-2xl font-medium">Amanda Williams</h3>
            <p className="text-base font-medium border border-[#386A8B] rounded-md bg-[#386A8B]/20 px-4 py-1 text-[#386A8B]">
              Water Resources engineering
            </p>
          </div>
          <div className=" items-center mt-10 text-[#4B5B65] font-medium flex gap-1">
            <Location />
            <p>Lagos,Nigeria</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <p>
            Replies within: <span className="text-[#386A8B]">4 hours</span>
          </p>
          <Button
            onClick={() => {
              navigate("/for-engineers/consult");
            }}
            className="bg-[#0077C2] hover:bg-[#0077C2]/90 w-[12rem] h-16  text-lg"
          >
            Request Quote
          </Button>
        </div>
      </div>
      <div className="grid mt-12 grid-cols-12 gap-12 font-medium text-[#001827] max-w-[1440px]">
        <div className="col-span-9 gap-12 flex p-6 items-center flex-col bg-[#F9F9F9] rounded-md">
          <div className="flex gap-4 flex-col items-start justify-start text-start">
            <h3 className="text-xl ">About</h3>
            <p className="font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              aut esse perferendis reiciendis a aperiam in tempore distinctio
              sunt nemo asperiores, blanditiis perspiciatis dolorum sint,
              corrupti pariatur facilis expedita rem?
            </p>
          </div>
          <div className="flex flex-col w-full items-start gap-4">
            <h3 className="text-xl">Services</h3>
            <div className="w-full flex items-start gap-3">
              {services.map((service, i) => {
                return (
                  <p
                    key={i}
                    className="text-base font-medium border border-[#386A8B] rounded-md  px-4 py-1 text-[#386A8B]"
                  >
                    {service}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-md  w-[340px] p-6 gap-12 flex items-start flex-col bg-[#F9F9F9]">
          <div className="w-full flex items-start flex-col gap-4  ">
            <h3 className="text-xl">Contact Information</h3>
            <div className="flex items-start  w-full justify-between">
              <p className="text-[#4B5B65]">Phone number</p>
              <Call color="#386A8B" />
            </div>
            <div className="flex items-start w-full  justify-between">
              <p className="text-[#4B5B65]">Email</p>
              <Sms color="#386A8B" />
            </div>
            <div className="flex items-start  w-full  justify-between">
              <p className="text-[#4B5B65]">Website</p>
              <Global color="#386A8B" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl">Overall Rating</h3>
            <div className=" flex gap-2 items-center">
              <img className="w-32" src={rating} />
              <p className="text-lg">4.8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full items-start flex flex-col gap-8 max-w-[1440px]">
        <h3 className="text-4xl font-medium">Portfolio</h3>
        <ScrollArea className="w-full whitespace-nowrap rounded-md ">
          <div className="flex w-max space-x-4 ">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
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
                      Eko Hotels{" "}
                    </p>
                    <p className="font-medium text-[#4B5B65]">Procurement</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="w-full mt-12 items-start flex flex-col gap-12 max-w-[1440px]">
        <h3 className="text-4xl font-medium">Product Service</h3>
        <ScrollArea className="w-full whitespace-nowrap rounded-md ">
          <div className="flex w-max space-x-4 ">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
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
                      Eko Hotels{" "}
                    </p>
                    <p className="font-medium text-[#4B5B65]">Procurement</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex  mt-12 flex-col w-full gap-4 max-w-[1440px]">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-4xl font-medium">Reviews(449)</h3>
          <Button className="text-[#386A8B] py-6 shadow-sm border border-[#4B5B65]/20 ">
            Write a Review
          </Button>
        </div>
        <div className="flex items-start gap-4 ">
          <div className="flex flex-col h-[138px] w-[170px] items-center border-[1.8px] border-[#4B5B65] rounded-md justify-center gap-2">
            <p className=" text-[32px] font-medium">4.6</p>
            <img className="w-32" src={rating} />
            <p className="text-[#4B5B65]">449 ratings</p>
          </div>
          <div className="flex self-center items-center justify-center w-full gap-6">
            {ratings.map((rating, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col basis-1/5 bg-[#F9F9F9] p-4 rounded-lg items-center gap-2"
                >
                  <p className="  text-xl">{rating.title}</p>
                  <div className="flex items-center   gap-2">
                    <img className="w-32" src={rating.stars} />
                    <p className="font-semibold text-base">{rating.rating}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
