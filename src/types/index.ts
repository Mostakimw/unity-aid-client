import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TDonation = {
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: number;
  description: string;
  timestamp: string;
  isDeleted: boolean;
  totalReceived: number;
};

export type TResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type TResponseRedux<T> = BaseQueryApi | TResponse<T>
