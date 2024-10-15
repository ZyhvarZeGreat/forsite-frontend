import { useState } from "react";
import Bottom_CTA from "../../Reusables/Bottom_CTA";
import {
  Personal_Information,
  Project_Details,
  Availability,
  Summary,
} from "../../components/Home Components/Consult Components";
import Check from "../../assets/check.svg";
import { cn } from "../../lib/utils";
export type scenes =
  | "Personal Information"
  | "Project Details"
  | "Availability"
  | "Summary";

const Consult = () => {
  const [scene, setScene] = useState<scenes>("Personal Information");
  const [addedScenes, setAddedScenes] = useState<scenes[]>([
    "Personal Information",
  ]);

  const handleSceneChange = (newScene: scenes) => {
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
              "Personal Information",
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
                    addedScenes.indexOf(step as scenes) <=
                    addedScenes.indexOf(scene)
                      ? "bg-[#386A8B] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {addedScenes.indexOf(step as scenes) <
                  addedScenes.indexOf(scene) ? (
                    <img src={Check} alt="Check" />
                  ) : (
                    index + 1
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2  text-base font-medium",
                    addedScenes.indexOf(step as scenes) <=
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
      {scene === "Personal Information" && (
        <Personal_Information scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Project Details" && (
        <Project_Details scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Availability" && (
        <Availability scene={scene} setScene={handleSceneChange} />
      )}
      {scene === "Summary" && (
        <Summary scene={scene} setScene={handleSceneChange} />
      )}
      {scene !== "Summary" && <Bottom_CTA />}
    </div>
  );
};

export default Consult;
