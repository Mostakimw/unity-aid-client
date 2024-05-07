import { TDonation, TResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonationPost: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
    }),
    getSingleDonationPost: builder.query({
      query: (params) => ({
        url: `/donations/${params.id}`,
        method: "GET",
      }),
      transformResponse: (res: TResponse<TDonation>) => {
        return res?.data;
      },
    }),
    addDonationPost: builder.mutation({
      query: (data) => ({
        url: "/donations/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllDonationPostQuery,
  useGetSingleDonationPostQuery,
  useAddDonationPostMutation,
} = donationApi;
