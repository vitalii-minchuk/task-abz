import axios from "axios";
import { ResponseData, User } from "./types";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export async function getUsers(page = 1) {
  const { data } = await client.get<ResponseData>(
    `/users?page=${page}&count=6`,
  );
  return data;
}

export async function createNewUser(user: User) {
  const token = await client.get("/token");
  const formData = new FormData();
  formData.append("position_id", user.position_id);
  formData.append("name", user.name);
  formData.append("email", user.email);
  formData.append("phone", user.phone);
  formData.append("photo", user.photo);
  const { data } = await client.post<ResponseData>("/users", formData, {
    headers: { Token: token.data.token },
  });
  return data;
}
