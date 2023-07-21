import axios from "axios";
import { SERVER_URL } from "./axios/config";

export async function login(payload) {
  try {
    let response = await axios.post(`${SERVER_URL}/auth/signin`, payload);

    return { success: true, data: response.data };
  } catch (err) {
    return { success: false, err }
  }
}