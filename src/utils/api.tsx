import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const UNAUTHORIZED_CODE = 401;

export async function getProductsApi(endpoint: any) {
  const apiUrl = `${API_ENDPOINT}${endpoint}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    return response;
  } catch (error: any) {
    handleError(error);
    return error?.response;
  }
}

function handleError(error: any) {
  if (error?.response?.status === UNAUTHORIZED_CODE) {
    ("Notfound");
  }
}
