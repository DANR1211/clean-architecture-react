import axios, { AxiosRequestConfig } from "axios"
import { getValidationError } from "../utilities";
import { snackbarUtilities } from "../utilities/snackbar-manager";

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    const token = '12345678901111111111111111111111'
    const newHeaders = {
      Authorization: token,
      'Content-type': 'application/json'
    };
    request.headers = newHeaders
    return request;
  }

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  })

  axios.interceptors.response.use(
    (response) => {
      snackbarUtilities.success("Consulta exitosa!!")
      console.log("response", response)
      return response
    },
    (error) => {
      snackbarUtilities.error(getValidationError(error.code))
      console.log(error)
      return Promise.reject(error);
    })
}
