import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonationPost: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
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

export const { useGetAllDonationPostQuery, useAddDonationPostMutation } =
  donationApi;
