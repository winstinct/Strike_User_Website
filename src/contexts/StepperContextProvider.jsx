import { createContext, useState } from "react";
import ContactDetails from "../pages/Signup/PersonalDetails/ContactDetails";
import PersonalDetails from "../pages/Signup/PersonalDetails/PersonalDetails";
import LocationDetails from "../pages/Signup/PersonalDetails/LocationDetails";

export const StepperContext = createContext({});

export default function StepperContextProvider({ children }) {
  const steps = [
    {
      label: {
        title: "Contact Details",
        subTitle: "Enter contact details",
      },
      content: <ContactDetails />,
    },
    {
      label: {
        title: "Personal Details",
        subTitle: "Enter your personal details",
      },
      content: <PersonalDetails />,
    },
    {
      label: {
        title: "Location Details",
        subTitle: "Enter your address",
      },
      content: <LocationDetails />,
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <StepperContext.Provider value={{ currentStep, setCurrentStep, steps }}>
      {children}
    </StepperContext.Provider>
  );
}
