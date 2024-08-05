import { createContext, useState } from "react";

const steps = [
  {
    stepNumber:0,
    label: {
      title: "Contact Details",
      subTitle: "Enter contact details",
    }
  },
  {
    stepNumber:1,
    label: {
      title: "Personal Details",
      subTitle: "Enter your personal details",
    }
  },
  {
    stepNumber:2,
    label: {
      title: "Location Details",
      subTitle: "Enter your address",
    }
  },
];

export const StepperContext = createContext();

export default function StepperContextProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep, steps }}>
      {children}
    </StepperContext.Provider>
  );
}
