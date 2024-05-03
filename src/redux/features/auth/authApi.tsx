import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const { useAddUserMutation } = authApi;
