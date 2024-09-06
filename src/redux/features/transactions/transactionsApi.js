import { baseApi } from "../../api/baseApi";

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAgents: builder.query({
      query: (coins) => {
        return {
          url: `/users/fetch-wallet/agent/${coins}`,
          method: "GET",
        };
      },
    }),
    getSingleAgentDetails: builder.query({
      query: (_id) => {
        return {
          url: `https://api.strikexgaming.com/users/fetch-agent-ticket/${_id}`,
          method: "GET",
        };
      },
    }),
    getAllAgentsTickets: builder.query({
      query: () => {
        return {
          url: `https://api.strikexgaming.com/users/fetch-agent-ticket`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllAgentsQuery,
  useGetSingleAgentDetailsQuery,
  useGetAllAgentsTicketsQuery
} = transactionsApi;
