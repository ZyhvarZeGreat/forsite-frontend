import { useState } from "react";

import Check from "../../../assets/check.svg";
import { cn } from "../../../lib/utils";
import {
  Availability,
  Client_Details,
  Project_Details,
  Summary,
} from "./Prospects Tabs Pages/index";

export type prospectScenes =
  | "Client Details"
  | "Project Details"
  | "Availability"
  | "Summary";

const Prospects_Tabs = () => {
  const [scene, setScene] = useState<prospectScenes>("Client Details");
  const [addedScenes, setAddedScenes] = useState<prospectScenes[]>([
    "Client Details",
  ]);

  const handleSceneChange = (newScene: prospectScenes) => {
    setScene(newScene);
    setAddedScenes((prev) => [...new Set([...prev, newScene])]);
  };
  console.log(scene);

  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="w-full mt-12 max-w-[1440px] flex flex-col items-center justify-center gap-8">
        <div className="w-full  flex flex-col items-center justify-center ">
          <div className="flex w-full items-center justify-center">
            {[
              "Client Details",
              "Project Details",
              "Availability",
              "Summary",
            ].map((step, index, array) => (
              <div
                key={step}
                className="flex flex-col items-center relative flex-1"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    addedScenes.indexOf(step as prospectScenes) <=
                    addedScenes.indexOf(scene)
                      ? "bg-[#386A8B] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {addedScenes.indexOf(step as prospectScenes) <
                  addedScenes.indexOf(scene) ? (
                    <img src={Check} alt="Check" />
                  ) : (
                    index + 1
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2  text-base font-medium",
                    addedScenes.indexOf(step as prospectScenes) <=
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
      {scene === "Project Details" && (
        <Project_Details scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Client Details" && (
        <Client_Details scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Availability" && (
        <Availability scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Summary" && (
        <Summary scene={scene} setScene={handleSceneChange} />
      )}
    </div>
  );
};

export default Prospects_Tabs;
