import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/register",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useAddUserMutation } = authApi;
