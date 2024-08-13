import { Link } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import playStoreIcon from "../../assets/play-store.svg"
import appStoreIcon from "../../assets/app-store.svg"

export default function Footer() {
  return (
    <footer 
    className="md:p-[1.5rem] p-[1rem] text-white rounded-lg ml-[12rem] mr-56 bg-[#44009c]"
    // style={{backgroundImage: "linear-gradient(#5500C3, #A967FF)"}}
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-[1.5rem]">
      <div>
        <img src={strikeLogo} alt="Website Logo" className="bg-white p-[0.5rem] w-[130px] h-[50px] rounded-md mb-[0.5rem]"/>
        <p className="text-[14px] text-gray-300">Play Smart, Dream Big.
        Your Future Starts Here!</p>
      </div>
      <div>
        <h3 className="text-[1rem] font-bold">Quick Links</h3>
        <ul className="space-y-[0.3rem] mt-[0.3rem] text-[14px]">
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Home</Link>
          </li>
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Account</Link>
          </li>
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Wallet</Link>
          </li>
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Wallet</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[1rem] font-bold">Support</h3>
        <ul className="space-y-[0.3rem] mt-[0.3rem] text-[14px]">
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">F.A.Q</Link>
          </li>
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Chat Support</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[1rem] font-bold">Policies</h3>
        <ul className="space-y-[0.3rem] mt-[0.3rem] text-[14px]">
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Terms & Conditions</Link>
          </li>
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Privacy Policy</Link>
          </li>
          <li>
            <Link className="hover:underline text-gray-300 hover:text-gray-100" to="">Refund Policy</Link>
          </li>
        </ul>
      </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:mt-0 mt-5">
        <p className="text-[1rem]">Download the Strike app for the ultimate experience!</p>
        <div className="flex xl:flex-row flex-col lg:gap-5 gap-2">
        <div className="flex md:flex-row flex-col md:items-center md:gap-[1.1rem] gap-[0.5rem] bg-black px-[1rem] py-[0.5rem] lg:w-[180px] w-full">
          <img className="w-[30px]" src={playStoreIcon} alt="Playstore icon" />
          <div>
            <p className="text-[10px] font-medium">GET IT ON</p>
            <h3 className="font-semibold text-[12px]">Google Play</h3>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:items-center md:gap-[1.1rem] gap-[0.5rem] bg-black px-[1rem] py-[0.5rem] lg:w-[180px] w-full">
          <img className="w-[30px]" src={appStoreIcon} alt="Playstore icon" />
          <div>
            <p className="text-[10px] font-medium">GET IT ON</p>
            <h3 className="font-semibold text-[12px]">App Store</h3>
          </div>
        </div>
        </div>
      </div>

      <p className="text-center text-[14px] text-gray-300 pt-[1rem]">© {new Date().getFullYear()} Strike x Gaming. All rights reserved.</p>
    </footer>
  )
}
