import numberGameImg from "../../assets/number-games.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";

export default function NumberGames() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0 });
  return (
    <section className="mx-56 mb-[2rem]">
      <div className="flex items-center gap-5">
        <div onClick={() => navigate(-1)} className="backBtn">
          <Icon className="text-[2.5rem]" icon="lets-icons:arrow-left-long" />
        </div>
        <h3 className="text-[1.5rem] font-bold">Number Games</h3>
      </div>
      <div className="text-center space-y-[0.5rem]">
        <div className="flex justify-center">
          <img className="h-[300px]" src={numberGameImg} alt="" />
        </div>
        <h3 className="text-[1.5rem] font-bold">What's Coming 🚀</h3>
        <p>We're cooking up something special for you. Stay tuned! 🚀</p>
        <div>
        <Link to="/">
          <button className="submitBtn w-[250px]">Home</button>
        </Link>
        </div>
      </div>
    </section>
  );
}
