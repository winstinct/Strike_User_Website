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
import UpComingDraws from "../pages/Tickets/UpComingDraws/UpComingDraws";
import Winners from "../pages/Tickets/Winners/Winners";
import Withdraw from "../pages/Withdraw/Withdraw";
import WithdrawAndDepositLayout from "../layouts/WithdrawAndDepositLayout";
import WithdrawSubmitted from "../pages/Withdraw/WithdrawSubmitted";
import WithdrawRequestsHistory from "../pages/Withdraw/WithdrawRequestsHistory";
import WithdrawLayout from "../pages/Withdraw/withdrawLayout";
import DepositLayout from "../pages/Deposit/DepositLayout";
import Wallet from "../pages/Wallet/Wallet";
import Deposit from "../pages/Deposit/Deposit";
import AgentsLayout from "../pages/Agents/AgentsLayout";
import Agents from "../pages/Agents/Agents";
import DepositHistory from "../pages/DepositHistory/History";
import Profile from "../pages/Profile/Profile";
import ProfilePersonalDetails from "../pages/Profile/ProfilePersonalDetails";
import ProfileContactDetails from "../pages/Profile/ProfileContactDetails";
import ProfileLocationDetails from "../pages/Profile/ProfileLocationDetails";
import { TermsAndConditions } from "../pages/TermsAndConditions/TermsAndConditions";
import { PrivacyPolicy } from "../pages/PrivacyPolicy/PrivacyPolicy";
import { RefundPolicy } from "../pages/RefundPolicy/RefundPolicy";
import FAQ from "../pages/FAQ/FAQ";
import BecomePublicAgent from "../pages/BecomePublicAgent/BecomePublicAgent";
import BecomePrivateAgent from "../pages/BecomePrivateAgent/BecomePrivateAgent";
import WishList from "../pages/WishList/WishList";
import Preferences from "../pages/Preferences/Preferences";
import ReferAndEarn from "../pages/ReferAndEarn/ReferAndEarn";
import ChatSupport from "../pages/ChatSupport/ChatSupport";
import AgentsHistory from "../pages/Agents/AgentsHistory";
import PersonalDetailsPublicAgent from "../pages/BecomePublicAgent/PersonalDetailsPublicAgent";
import BankDetailsPublicAgent from "../pages/BecomePublicAgent/BankDetailsPublicAgent";
import NotificationSettings from "../pages/Preferences/NotificationSettings";
import PrivacySettings from "../pages/Preferences/PrivacySettings";
import ChangePasswordPreference from "../pages/Preferences/ChangePasswordPreference";

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
        children: [
          {
            path: "",
            element: <UpComingDraws />,
          },
          {
            path: "winners",
            element: <Winners />,
          },
        ],
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
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "refund-policy",
        element: <RefundPolicy />,
      },

      // sidebar pages
      {
        path: "become-public-agent",
        element: <BecomePublicAgent />,
        children:[
          {
            path:"",
            element:<PersonalDetailsPublicAgent/>
          },
          {
            path:"bank-details-public-agent",
            element:<BankDetailsPublicAgent/>
          },
        ]
      },
      {
        path: "become-private-agent",
        element: <BecomePrivateAgent />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
      {
        path: "deposit-history",
        element: <DepositHistory />,
      },
      {
        path: "preferences",
        element: <Preferences />,
        children:[
          {
            path:"",
            element:<NotificationSettings/>
          },
          {
            path:"privacy-settings",
            element:<PrivacySettings/>
          }
        ]
      },
      {
        path:"privacy/change-password",
        element:<ChangePasswordPreference/>
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "chat-support",
        element: <ChatSupport />,
      },
      {
        path: "refer-and-earn",
        element: <ReferAndEarn />,
      },
    ],
  },
  {
    path: "withdraw",
    element: <WithdrawAndDepositLayout />,
    children: [
      {
        path: "",
        element: <Withdraw />,
      },
      {
        path: "withdraw-submitted",
        element: <WithdrawSubmitted />,
      },
      {
        path: "withdraw-requests-history",
        element: <WithdrawRequestsHistory />,
      },
      {
        path: "",
        element: <WithdrawLayout />,
        children: [
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "deposit",
            element: <Deposit />,
          },
        ],
      },
    ],
  },
  {
    path: "",
    element: <WithdrawAndDepositLayout />,
    children: [
      {
        path: "",
        element: <DepositLayout />,
        children: [
          {
            path: "deposit",
            element: <Deposit />,
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
        ],
      },
    ],
  },
  {
    path: "deposit/agents",
    element: <WithdrawAndDepositLayout />,
    children: [
      {
        path: "",
        element: <AgentsLayout />,
        children: [
          {
            path: "",
            element: <Agents />,
          },
          {
            path: "agents-history",
            element: <AgentsHistory />,
          },
        ],
      },
    ],
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      {
        path: "",
        element: <ProfilePersonalDetails />,
      },
      {
        path: "location-details",
        element: <ProfileLocationDetails />,
      },
      {
        path: "contact-details",
        element: <ProfileContactDetails />,
      },
    ],
  },
]);
