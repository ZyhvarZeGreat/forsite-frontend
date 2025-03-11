import { useState } from "react";
import {
  Financing_Structure,
  Client_Details,
  Project_Schedule,
  Specifications,
  Summary,
  Third_Parties,
} from "./Quotes Tabs Pages/index";
import Check from "../../../assets/check.svg";
import { cn } from "../../../lib/utils";

export type quoteScenes =
  | "Client Details"
  | "Project Schedule"
  | "Specifications"
  | "Financing Structure"
  | "Third Parties"
  | "Summary";

const Quotes_Tabs = () => {
  const [scene, setScene] = useState<quoteScenes>("Client Details");
  const [addedScenes, setAddedScenes] = useState<quoteScenes[]>([
    "Client Details",
  ]);

  const handleSceneChange = (newScene: quoteScenes) => {
    setScene(newScene);
    setAddedScenes((prev) => [...new Set([...prev, newScene])]);
  };
  console.log(scene);

  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="w-full mt-24 max-w-[1440px] flex flex-col items-center justify-center gap-8">
        <div className="w-full  flex flex-col items-center justify-center ">
          <div className="flex w-full items-center justify-center">
            {[
              "Client Details",
              "Project Schedule",
              "Specifications",
              "Financing Structure",
              "Third Parties",
              "Summary",
            ].map((step, index, array) => (
              <div
                key={step}
                className="flex flex-col items-center relative flex-1"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    addedScenes.indexOf(step as quoteScenes) <=
                    addedScenes.indexOf(scene)
                      ? "bg-[#386A8B] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {addedScenes.indexOf(step as quoteScenes) <
                  addedScenes.indexOf(scene) ? (
                    <img src={Check} alt="Check" />
                  ) : (
                    index + 1
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2  text-base font-medium",
                    addedScenes.indexOf(step as quoteScenes) <=
                      addedScenes.indexOf(scene)
                      ? "text-[#386A8B]"
                      : "text-black"
                  )}
                >
                  {step}
                </p>
                {index < array.length - 1 && (
                  <div className="absolute top-5 -z-20 left-1/2 w-full h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {scene === "Financing Structure" && (
        <Financing_Structure scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Client Details" && (
        <Client_Details scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Project Schedule" && (
        <Project_Schedule scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Specifications" && (
        <Specifications scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Summary" && (
        <Summary scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Third Parties" && (
        <Third_Parties scene={scene} setScene={handleSceneChange} />
      )}
    </div>
  );
};

export default Quotes_Tabs;
