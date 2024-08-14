import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Offers from "../pages/Offers/Offers";
import Tickets from "../pages/Tickets/Tickets";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/PasswordReset/ForgotPassword/ForgotPassword";
import OTPVerification from "../pages/PasswordReset/OTPVerification/OTPVerification";
import SetPassword from "../pages/PasswordReset/SetPassword/SetPassword";
import OTPVerificationSignup from "../pages/Signup/OTPVerificationSignup/OTPVerificationSignup";
import SetPasswordSignup from "../pages/Signup/SetPasswordSignup/SetPasswordSignup";
import PersonalDetailsLayout from "../layouts/PersonalDetailsLayout";
import PersonalDetails from "../pages/Signup/PersonalDetails/PersonalDetails";
import ContactDetails from "../pages/Signup/PersonalDetails/ContactDetails";
import LocationDetails from "../pages/Signup/PersonalDetails/LocationDetails";
import LoginSignupLayout from "../layouts/LoginSignupLayout";
import LotteryGames from "../pages/LotteryGames/LotteryGames";
import NumberGames from "../pages/NumberGames/NumberGames";
import WheelGames from "../pages/WheelGames/WheelGames";
import AddToCart from "../pages/AddToCart/AddToCart";
import CartQuantityAdjuster from "../pages/CartQuantityAdjuster/CartQuantityAdjuster";
import ShopperBag from "../pages/ShopperBag/ShopperBag";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <LoginSignupLayout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "otp-verification",
        element: <OTPVerification />,
      },
      {
        path: "set-password",
        element: <SetPassword />,
      },
      {
        path: "otp-verification-signup",
        element: <OTPVerificationSignup />,
      },
      {
        path: "set-password-signup",
        element: <SetPasswordSignup />,
      },
    ],
  },
  {
    path: "/auth/personal-details-layout",
    element: <PersonalDetailsLayout />,
    children: [
      {
        path: "personal-details",
        element: <PersonalDetails />,
      },
      {
        path: "",
        element: <ContactDetails />,
      },
      {
        path: "location-details",
        element: <LocationDetails />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "lottery-games",
        element: <LotteryGames />,
      },
      {
        path: "number-games",
        element: <NumberGames />,
      },
      {
        path: "wheel-games",
        element: <WheelGames />,
      },
      {
        path: "addToCart/:lotteryId",
        element: <AddToCart />,
      },
      {
        path: "cartQuantityAdjuster/:lotteryId",
        element: <CartQuantityAdjuster />,
      },
      {
        path: "shopper-bag",
        element: <ShopperBag />,
      },
    ],
  },
]);
