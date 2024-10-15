import React from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const Demo = () => {
  return (
    <div className="flex w-full my-32   max-w-[1366px] items-center justify-between">
      <div className="flex items-center w-full justify-center h-2/3 ">
        <div className="flex flex-col gap-8 w-1/2 items-start justify-center">
          <h3 className="text-3xl font-semibold"> Request a demo</h3>
          <div className="flex flex-col gap-8 w-full items-start justify-center">
            <Input
              placeholder="Full Name"
              className="rounded-none text-lg font-medium  px-4 h-16 w-[480px] shadow-none border border-[#8D8D8D] "
            />
            <Input
              placeholder="Email Address"
              className="rounded-none text-lg font-medium  px-4 h-16 w-[480px] shadow-none border border-[#8D8D8D] "
            />
            <Input
              placeholder="Service"
              className="rounded-none text-lg font-medium  px-4 h-16 w-[480px] shadow-none border border-[#8D8D8D] "
            />
            <textarea
              placeholder="Message"
              className="px-4  text-lg font-medium w-[480px] border border-[#8D8D8D]"
              rows={6}
            />
            <Button className="bg-[#386A8B] hover:bg-slate-600 rounded-none py-6 px-12 z-10">
              Submit
            </Button>
          </div>
        </div>
        <div className=" flex flex-col  mb-[5.2rem] gap-8 w-1/2 items-start justify-center">
          <h3 className="text-3xl font-semibold ">
            Frequently Asked Questions
          </h3>
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-8"
          >
            <AccordionItem
              className="rounded-none border border-[#D9D9D9] px-4 py-2"
              value="item-1"
            >
              <AccordionTrigger className="text-xl h-[72px]">
                What is COG for Engineers?
              </AccordionTrigger>
              <AccordionContent className="text-xl text-star">
                We deploy the best technologies to ensure data safety and
                privacy. Legal interactions are delicate and we understand that
                cyber threats are common, however we continuously ensure that
                you are protected against them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="rounded-none border border-[#D9D9D9] px-4 py-2"
              value="item-2"
            >
              <AccordionTrigger className="text-xl h-[72px]">
                How secure are my bid documents
              </AccordionTrigger>
              <AccordionContent className="text-xl text-star">
                We deploy the best technologies to ensure data safety and
                privacy. Legal interactions are delicate and we understand that
                cyber threats are common, however we continuously ensure that
                you are protected against them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="rounded-none border border-[#D9D9D9] px-4 py-2"
              value="item-3"
            >
              <AccordionTrigger className="text-xl h-[72px]">
                How secure are practice and legal documents
              </AccordionTrigger>
              <AccordionContent className="text-xl text-star">
                We deploy the best technologies to ensure data safety and
                privacy. Legal interactions are delicate and we understand that
                cyber threats are common, however we continuously ensure that
                you are protected against them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="rounded-none border border-[#D9D9D9] px-4 py-2"
              value="item-4"
            >
              <AccordionTrigger className="text-xl h-[72px]">
                {" "}
                How secure are my bid documents
              </AccordionTrigger>
              <AccordionContent className="text-xl text-star">
                We deploy the best technologies to ensure data safety and
                privacy. Legal interactions are delicate and we understand that
                cyber threats are common, however we continuously ensure that
                you are protected against them.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Demo;
