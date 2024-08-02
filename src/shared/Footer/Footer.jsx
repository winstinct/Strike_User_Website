import { Link } from "react-router-dom";
import strikeLogo from "../../assets/strike-logo.svg";
import playStoreIcon from "../../assets/play-store.svg"
import appStoreIcon from "../../assets/app-store.svg"

export default function Footer() {
  return (
    <footer 
    className="md:p-[4rem] p-[1rem] text-white"
    style={{backgroundImage: "linear-gradient(#A967FF, #5500C3)"}}
    >
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-[3rem]">
      <div>
        <img src={strikeLogo} alt="Website Logo" className="bg-white p-[0.5rem] rounded-md mb-[2.5rem]"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit lacinia est, nec pretium dolor molestie id.</p>
      </div>
      <div>
        <h3 className="text-[1.5rem] font-bold">Quick Links</h3>
        <ul className="text-[1.25rem] space-y-[1rem] mt-[1rem]">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Account</Link>
          </li>
          <li>
            <Link to="">Wallet</Link>
          </li>
          <li>
            <Link to="">Wallet</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[1.5rem] font-bold">Support</h3>
        <ul className="text-[1.25rem] space-y-[1rem] mt-[1rem]">
          <li>
            <Link to="">F.A.Q</Link>
          </li>
          <li>
            <Link to="">Chat Support</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[1.5rem] font-bold">Policies</h3>
        <ul className="text-[1.25rem] space-y-[1rem] mt-[1rem]">
          <li>
            <Link to="">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
          <li>
            <Link to="">Refund Policy</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-[1.5rem]">
        <p className="text-[1.25rem] leading-[1.8rem]">Download the Strike app for the ultimate experience!</p>
        <div className="flex items-center gap-[1.1rem] bg-black px-[1rem] py-[0.5rem] w-[180px]">
          <img src={playStoreIcon} alt="Playstore icon" />
          <div>
            <p className="text-[10px] font-medium">GET IT ON</p>
            <h3 className="font-semibold">Google Play</h3>
          </div>
        </div>

        <div className="flex items-center gap-[1.1rem] bg-black px-[1rem] py-[0.5rem] w-[180px]">
          <img src={appStoreIcon} alt="Playstore icon" />
          <div>
            <p className="text-[10px] font-medium">GET IT ON</p>
            <h3 className="font-semibold">App Store</h3>
          </div>
        </div>
      </div>
      </div>

      <p className="text-center pt-[3rem]">© {new Date().getFullYear()} Strike x Gaming. All rights reserved.</p>
    </footer>
  )
}
