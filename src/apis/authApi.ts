import axios from "axios"
import { clientID, clientSecret } from "../configs/authConfig"
import type { ClientCredentialTokenResponse } from "../models/auth"

export const getClientCredentialToken = async():Promise<ClientCredentialTokenResponse>=>{
  try {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
    })
    const encodedCredentials = btoa(`${clientID}:${clientSecret}`);

    const response = await axios.post("https://accounts.spotify.com/api/token", body, {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,  
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    return response.data
  } catch (error) {
    throw new Error("Failed to fetch client credential token")
  }
}