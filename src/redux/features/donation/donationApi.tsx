import { TDonation, TResponse } from "../../../types";
import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonationPost: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["Posts"]
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
      invalidatesTags: ["Posts"]
    }),
    deleteSingleDonationPost: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/donations/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Posts"]
    }),
    updateSingleDonationPost: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/donations/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Posts"]
    }),
  }),
});

export const {
  useGetAllDonationPostQuery,
  useGetSingleDonationPostQuery,
  useAddDonationPostMutation,
  useDeleteSingleDonationPostMutation,
  useUpdateSingleDonationPostMutation,
} = donationApi;
