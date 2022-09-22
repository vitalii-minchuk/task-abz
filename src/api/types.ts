import { AxiosError } from "axios";

export interface User {
  email: string;
  id?: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: string;
  registration_timestamp?: number;
}

// export type UserWithoutServerData = Omit<
//   User,
//   "id" | "registration_timestamp" | "position"
// >;

export interface ResponseData {
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
  users: User[];
}

export type APIError = AxiosError<{ message: string; status: boolean }>;

export type DisplayRequestResult = {
  time: boolean;
  success: boolean;
};
