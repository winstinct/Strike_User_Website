import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useOutletContext } from "react-router-dom";
import { useGetAllAgentsQuery } from "../../redux/features/transactions/transactionsApi";

export default function Agents() {
  const [stateCoins] = useOutletContext();
  // const location = useLocation();
  // const coins = location?.state?.coins;
  console.log("STATE COINS", stateCoins);
  const { data, isLoading, isError } = useGetAllAgentsQuery(stateCoins);
  if (!isLoading && isError) {
    return (
      <h1 className="text-center text-red-500 py-[5rem]">
        There was something wrong!
      </h1>
    );
  }

  console.log("Agents", data);

  return (
    <div className="mt-[2rem]">
      <h3 className="text-[1.25rem] font-semibold mb-[1rem]">
        Available Agents
      </h3>
      <div className="space-y-[1.5rem]">
        {/* Agent-1  */}
        {data?.response?.agents.map((item) => (
          <div
            key={item.agentId}
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
            className="flex justify-between items-center border-[1px] border-gray-300 rounded-lg p-3"
          >
            <div className="flex flex-col gap-1">
              <p>
                Agent ID: <span className="font-semibold">{item.agentId}</span>
              </p>
              <p>
                Agent Name:{" "}
                <span className="font-semibold">
                  {item.FirstName + " " + item.LastName}
                </span>
              </p>
              <p className="font-semibold">Strike Agent</p>
              <p>
                Available Coins:{" "}
                <span className="font-semibold">{item.wallet}</span>
              </p>
            </div>
            <div>
              <Link to={`agent-details/${item._id}`} state={{reqCoins: stateCoins}}
                style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
                className="border-[1px] flex items-center gap-1 rounded-lg p-2 border-gray-300 text-white bg-[#272424] hover:bg-black hover:text-white duration-300"
              >
                <span>Buy Now</span>
                <Icon
                  className="text-[1.5rem]"
                  icon="ic:twotone-arrow-right-alt"
                />
              </Link>
            </div>
          </div>
        ))}
        {/* Agent-1  */}
        {/* <div
          style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
          className="flex justify-between items-center border-[1px] border-gray-300 rounded-lg p-3"
        >
          <div>
            <p>
              Agent ID: <span className="font-semibold">18273123</span>
            </p>
            <p>Strike Agent</p>
            <p>
              Available Coins: <span className="font-semibold">18273123</span>
            </p>
          </div>
          <div>
            <button
              style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" }}
              className="border-[1px] flex items-center gap-1 rounded-md p-2 border-gray-300 text-white bg-[#272424] hover:bg-black hover:text-white duration-300"
            >
              <span>Buy Now</span>
              <Icon
                className="text-[1.5rem]"
                icon="ic:twotone-arrow-right-alt"
              />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
