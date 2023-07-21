import axios from "axios";
import { SERVER_URL } from "./axios/config";

export async function getProducts(accessToken) {
  try {
    console.log('test3')
    let response = await axios.get(`${SERVER_URL}/product`, {
      headers: {
        Authorization: accessToken
      }
    });

    console.log('test4')

    return { success: true, data: response.data };
  } catch (err) {
    return { success: false, err }
  }
}