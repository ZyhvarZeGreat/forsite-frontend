import React from "react";
import { Button } from "../../components/ui/button";
// import Search from "../../components/Home Components/Search";
import hero from "../../assets/hero.jpg";
import star from "../../assets/star.png";
import { Card, CardContent } from "../../components/ui/card";
import Demo from "../../components/Home Components/Sections/Demo";
import Card1 from "../../assets/card-1.png";
import Card2 from "../../assets/card-2.png";
import Card3 from "../../assets/card-3.png";
// import { GlobeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../../components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "../../components/ui/select";
import Bottom_CTA from "../../Reusables/Bottom_CTA";
import { useNavigate } from "react-router-dom";
const Engineers = () => {
  const navigate = useNavigate();
  const contractors = [
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
    {
      role: "Automobile Engineering",
      name: "Peter Coker",
      rating: "5.0",
      stat: "65",
      consultation: "61",
    },
  ];
  return (
    <div className="w-full mt-12 flex items-center justify-center flex-col">
      <div className="w-full relative flex items-center justify-center">
        <div className=" relative w-full   h-[690px]">
          <div className="bg-black/40 z-10 flex-col gap-12   top-0 bottom-0 left-0 right-0 absolute w-full h-full flex items-center justify-center"></div>
          <div className="flex absolute  h-full w-full">
            <img src={hero} className="h-full w-full object-cover" alt="hero" />
          </div>
        </div>
        <div className=" shadow-xl px-4 flex-col text-[#4B5B65] z-20 font-semibold flex gap-8 w-full items-center justify-center -bottom-16 rounded-[8px] bg-white  absolute h-[186px] max-w-7xl">
          <div className="w-full px-4 flex items-center justify-start">
            <h3 className="text-2xl font-medium text-black">
              Enter specialization to find contractors
            </h3>
          </div>
          <div className="w-full text-lg px-4 font-normal flex items-center gap-6 justify-around">
            <div className=" w-1/2  ">
              <Select>
                <SelectTrigger className=" text-[#ABABAB] text-start h-14 w-full px-8 rounded-none  border  shadow-none">
                  <SelectValue
                    className="text-xl"
                    placeholder=" Specialization"
                  />
                </SelectTrigger>

                <SelectContent className="">
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className=" w-1/2 relative ">
              <Input
                className=" px-8 text-lg placeholder:font-normal placeholder:text-[#ABABAB] h-14 w-full rounded-none border shadow-none"
                placeholder="Location"
              />
            </div>

            <div className="flex items-center mr-8 justify-center">
              <Button className="bg-[#386A8B] h-14 w-28 text-base rounded-none hover:bg-slate-600   z-10">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-28  gap-32 flex-col w-full max-w-[1366px]">
        <div className=" flex w-full items-start flex-col">
          <h3 className="flex flex-col py-8 text-3xl font-semibold">
            Todays Stats
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full">
            <div className="col-span-1 h-[200px] rounded-lg flex items-center justify-center flex-col gap-2 text-white bg-[#386A8B]">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <img className="w-8" src={Card1} />
              </div>
              <h3 className="text-3xl font-semibold">200,000</h3>
              <p>Total number of projects</p>
            </div>
            <div className="col-span-1 h-[200px] rounded-lg flex items-center justify-center flex-col gap-2 text-white bg-[#386A8B]">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <img className="w-8" src={Card2} />
              </div>
              <h3 className="text-3xl font-semibold">23,000</h3>
              <p>Contractors</p>
            </div>
            <div className="col-span-1 h-[200px] rounded-lg flex items-center justify-center flex-col gap-2 text-white bg-[#386A8B]">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
                <img className="w-8" src={Card3} />
              </div>
              <h3 className="text-3xl font-semibold">127,000</h3>
              <p>Total number of consultations</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-16 items-center justify-start">
          <div className="flex w-full items-start justify-start gap-2 flex-col">
            <h3 className="text-4xl font-semibold">Featured contractors</h3>
            <p className="font-normal text-xl">
              Meet the exceptional contractors who drive excellence and
              innovation through COG
            </p>
          </div>

          <div className="grid grid-cols-1 justify-start w-full gap-x-[94px] gap-y-[105px] sm:grid-cols-3">
            {contractors.map((contractor, i) => {
              return (
                <Card className="col-span-1 shadow-none   " key={i}>
                  <div className=" h-[18rem] rounded-t-lg">
                    <img
                      src={hero}
                      className="w-full hover:zoom-in-125 rounded-t-lg h-full object-cover"
                    />
                  </div>
                  <CardContent className=" flex items-start flex-col gap-1 py-6">
                    <p className="text-sm font-medium">
                      {contractor.role.toUpperCase()}
                    </p>
                    <h3 className="text-2xl font-medium">{contractor.name}</h3>
                    <div className="flex items-center  justify-center text-sm gap-1 font-medium">
                      <img src={star} className="w-4 h-4 mb-1" />
                      <p>{contractor.rating}</p>
                      <p>({contractor.stat})</p>
                      <p>{contractor.consultation} consultations done</p>
                    </div>
                    <div className="flex h-16  w-full items-end justify-between">
                      <Button
                        onClick={() => {
                          navigate(`profile/${i + 1}`);
                        }}
                        className=" border-2 text-[13.29px] rounded-none text-[#386A8B]  h-12 w-[124px]   border-[#386A8B]"
                        variant="outline"
                      >
                        View Profile
                      </Button>
                      <Button
                        onClick={() => {
                          navigate(`consult`);
                        }}
                        className="bg-[#386A8B] text-[13.29px] rounded-none h-12   w-[124px]"
                      >
                        Consult
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex w-full items-center justify-center py-32">
            <Button className="border-[#386A8B] border-2 shadow-none text-[#386A8B] text-base rounded-none h-12 w-[12rem]   ">
              More Contractors
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#386A8B] flex flex-col items-center justify-center">
        <div className="flex flex-col gap-12 w-full max-w-[1366px] h-[358px] items-center justify-center">
          <h3 className="text-4xl text-white font-semibold">
            Lets Collaborate
          </h3>
          <p className="w-2/3 font-normal text-xl text-white">
            At COG, we understand that your project success is built on trust,
            integrity, and a commitment to excellence. Partner with us to
            elevate your firm's capabilities, streamline your processes, and
            deliver exceptional value to your clients. Contact us today to
            explore how our services can transform your legal practice.
          </p>
          <Button className=" bg-white text-[#386A8B] text-[13.29px] rounded-none h-12   w-[124px]">
            Get Started
          </Button>
        </div>
      </div>
      <Demo />
      <Bottom_CTA />
    </div>
  );
};

export default Engineers;
