import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setActiveStyle } from "../../utils/setActiveStyle";
import Countdown, { zeroPad } from "react-countdown";
export default function AgentsLayout() {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>
      {/* Back button  */}
      <div className="flex justify-between items-center mb-[2rem]">
        <div className="flex items-center gap-5">
          <div onClick={() => navigate("/deposit")} className="backBtn">
            <Icon className="text-[2rem]" icon="lets-icons:arrow-left-long" />
          </div>
          <h3 className="text-[1.5rem] font-bold">Agents</h3>
        </div>
        <div className="flex items-center gap-2 font-bold">
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_9426_6441"
              maskUnits="userSpaceOnUse"
              x="-1"
              y="0"
              width="33"
              height="33"
            >
              <rect
                x="-0.00390625"
                y="0.00195312"
                width="32"
                height="32"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_9426_6441)">
              <path
                d="M15.9961 28.002C14.3516 28.002 12.8017 27.6853 11.3461 27.052C9.89054 26.4186 8.61832 25.5575 7.52943 24.4686C6.44054 23.3797 5.57943 22.1075 4.94609 20.652C4.31276 19.1964 3.99609 17.6464 3.99609 16.002C3.99609 15.0242 4.1072 14.0742 4.32943 13.152C4.55165 12.2297 4.87387 11.3631 5.29609 10.552C5.71832 9.74084 6.22387 8.98529 6.81276 8.28529C7.40165 7.58529 8.06276 6.95751 8.79609 6.40195L17.8628 15.4686L15.9961 17.3353L8.79609 10.1353C8.12943 10.9353 7.6072 11.8297 7.22943 12.8186C6.85165 13.8075 6.66276 14.8686 6.66276 16.002C6.66276 18.5797 7.57387 20.7797 9.39609 22.602C11.2183 24.4242 13.4183 25.3353 15.9961 25.3353C18.5739 25.3353 20.7739 24.4242 22.5961 22.602C24.4183 20.7797 25.3294 18.5797 25.3294 16.002C25.3294 13.6242 24.5683 11.5742 23.0461 9.85195C21.5239 8.12973 19.6183 7.11306 17.3294 6.80195V9.33529H14.6628V4.00195H15.9961C17.6405 4.00195 19.1905 4.31862 20.6461 4.95195C22.1017 5.58529 23.3739 6.4464 24.4628 7.53529C25.5517 8.62418 26.4128 9.8964 27.0461 11.352C27.6794 12.8075 27.9961 14.3575 27.9961 16.002C27.9961 17.6464 27.6794 19.1964 27.0461 20.652C26.4128 22.1075 25.5517 23.3797 24.4628 24.4686C23.3739 25.5575 22.1017 26.4186 20.6461 27.052C19.1905 27.6853 17.6405 28.002 15.9961 28.002ZM9.32943 17.3353C8.95165 17.3353 8.63498 17.2075 8.37943 16.952C8.12387 16.6964 7.99609 16.3797 7.99609 16.002C7.99609 15.6242 8.12387 15.3075 8.37943 15.052C8.63498 14.7964 8.95165 14.6686 9.32943 14.6686C9.7072 14.6686 10.0239 14.7964 10.2794 15.052C10.535 15.3075 10.6628 15.6242 10.6628 16.002C10.6628 16.3797 10.535 16.6964 10.2794 16.952C10.0239 17.2075 9.7072 17.3353 9.32943 17.3353ZM15.9961 24.002C15.6183 24.002 15.3017 23.8742 15.0461 23.6186C14.7905 23.3631 14.6628 23.0464 14.6628 22.6686C14.6628 22.2908 14.7905 21.9742 15.0461 21.7186C15.3017 21.4631 15.6183 21.3353 15.9961 21.3353C16.3739 21.3353 16.6905 21.4631 16.9461 21.7186C17.2017 21.9742 17.3294 22.2908 17.3294 22.6686C17.3294 23.0464 17.2017 23.3631 16.9461 23.6186C16.6905 23.8742 16.3739 24.002 15.9961 24.002ZM22.6628 17.3353C22.285 17.3353 21.9683 17.2075 21.7128 16.952C21.4572 16.6964 21.3294 16.3797 21.3294 16.002C21.3294 15.6242 21.4572 15.3075 21.7128 15.052C21.9683 14.7964 22.285 14.6686 22.6628 14.6686C23.0405 14.6686 23.3572 14.7964 23.6128 15.052C23.8683 15.3075 23.9961 15.6242 23.9961 16.002C23.9961 16.3797 23.8683 16.6964 23.6128 16.952C23.3572 17.2075 23.0405 17.3353 22.6628 17.3353Z"
                fill="#212529"
              />
            </g>
          </svg>
          </div>
          <div className="w-[75px]">
            <Countdown
              date={Date.now() + 60000 * 10}
              zeroPadTime={false}
              onComplete={()=>navigate("/deposit")}
              renderer={({ seconds, minutes, hours }) => (
                <div className="text-[1.5rem]">
                  <span>{zeroPad(minutes)}</span>
                  <span>:</span>
                  <span>{zeroPad(seconds)}</span>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="text-center rounded-[12px] p-2"
      >
        <span className="font-medium">No. of Coins Requested:</span>
        <span className="text-[1.25rem] font-bold px-1">1000</span>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
        className="grid grid-cols-2 my-[2rem] gap-5 rounded-[20px]"
      >
        <NavLink
          style={setActiveStyle}
          to=""
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
          end
        >
          <button>Agents</button>
        </NavLink>

        <NavLink
          style={setActiveStyle}
          className="block font-bold text-[1.25rem] italic py-3 rounded-[20px] w-full text-center"
          to="agents-history"
          end
        >
          <button>History</button>
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
