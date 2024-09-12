import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { StepperContext } from "../contexts/StepperContextProvider";

export default function PersonalDetailsLayout() {
  const {currentStep, steps} = useContext(StepperContext) || {}
  return (
    <div>
      <Header />
      <div className="mt-[6rem] mx-[1rem]">
        <div className="flex md:flex-row flex-col gap-10">
          <div
            style={{ backgroundImage: "linear-gradient(#A967FF, #5500C3)" }}
            className="text-white md:p-10 p-5 md:min-h-[83vh] h-[300px]"
          >
            <div>
              {steps?.map(({ label, content }, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-5 mb-[4rem]"
                  >
                    <div
                      className={`min-w-[40px] h-[40px] relative border-[1px] rounded-full border-gray-300 flex justify-center items-center ${
                        index < currentStep
                          ? "bg-white"
                          : index === currentStep
                          ? "border-white"
                          : ""
                      }`}
                    >
                      {/* step-line  */}
                      {index < steps?.length - 1 && (
                        <div className="absolute bg-gray-400 w-[2px] h-[4.2rem] top-[2.4rem]"></div>
                      )}

                      {/* Active line  */}
                      {index < steps?.length - 1 && (
                        <div
                          className={`absolute bg-white w-[2px] top-[2.4rem] duration-300 ${
                            currentStep > index ? "h-[4.2rem]" : "h-0"
                          }`}
                        ></div>
                      )}

                      {/* step-bullet  */}
                      {currentStep === index && (
                        <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
                      )}

                      {/* Completed step  */}
                      {currentStep > index && (
                        <Icon
                          className="text-[#4066E0] text-[1.5rem]"
                          icon="iconamoon:check-thin"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{label?.title}</h3>
                      <p className="text-[12px]">{label?.subTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 md:mb-0 mb-[1rem]"><Outlet/></div>
        </div>
      </div>
    </div>
  );
}
