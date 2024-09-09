import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useOutletContext } from "react-router-dom";
import { useGetAllAgentsQuery } from "../../redux/features/transactions/transactionsApi";
import AgentsSkeleton from "./AgentsSkeleton";

export default function Agents() {
  const [stateCoins] = useOutletContext();
  // const location = useLocation();
  // const coins = location?.state?.coins;
  console.log("STATE COINS", stateCoins);
  const { data, isLoading, isError } = useGetAllAgentsQuery(stateCoins);

  // decide what to render
  let content = null;

  if (isLoading && !isError) {
    content = <AgentsSkeleton />;
  }

  if (!isLoading && isError) {
    content = (
      <h1 className="text-center text-red-500 py-[5rem]">
        There was something wrong!
      </h1>
    );
  }

  if (!isLoading && !isError && data?.response?.agents.length == 0) {
    content = (
      <h1 className="text-gray-500 py-5 text-center">
        No agents are available
      </h1>
    );
  }

  if (!isLoading && !isError && data?.response?.agents.length) {
    content = (
      <div className="space-y-[1.5rem]">
        {data?.response?.agents.map((item) => (
          <div
            key={item.agentId}
            style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}
            className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-5 border-[1px] border-gray-300 rounded-lg p-3"
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
              <Link
                to={`agent-details/${item._id}`}
                state={{ reqCoins: stateCoins }}
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
      </div>
    );
  }

  console.log("Agents", data);

  return (
    <div className="mt-[2rem]">
      <h3 className="text-[1.25rem] font-semibold mb-[1rem]">
        Available Agents
      </h3>
      {content}
    </div>
  );
}
